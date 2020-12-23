const { Pool } = require('pg');

const pool = new Pool({
    user: 'sryvfdltkzxaze',
    host: 'ec2-3-248-4-172.eu-west-1.compute.amazonaws.com',
    database: 'devquojnobf62t',
    password: '4de869ff47497e1677ecb430e4c1474559bf5b1b2abe9161c33492ad7dd16b66',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

exports.user_phone_number = (req, response, next) => {
    pool.query("SELECT userfullname,UserID FROM public.USERS WHERE UserPhoneNumber='" + req.params.phonenumber + "'", (err, res) => {

        try {
            var item = {
                username: res.rows[0].userfullname,
                id: res.rows[0].userid
            }
            response.send(item)

        } catch (e) {
            response.send("user does not exist")
        }

    })
};


exports.all_users = (req, response, next) => {
    pool.query("SELECT * FROM public.USERS", (err, res) => {
        try {
            var item = res.rows
            response.send(item)

        } catch (e) {
            response.send("user does not exist")
        }

    })
};

exports.user_create = (req, response, next) => {
    const { name, phone } = req.body
    try {
            pool.query("INSERT INTO USERS (UserFullName, UserPhoneNumber) VALUES  ($1, $2)", [name, phone], (error, results) => {
            if (error) {
                throw error
            }
            response.send(`User added`)
        })
    
    } catch (e) {
        response.send("error")
    }
};