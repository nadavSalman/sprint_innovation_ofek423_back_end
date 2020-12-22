const { Pool } = require('pg');

const pool = new Pool({
    user: 'sryvfdltkzxaze',
    host: 'ec2-3-248-4-172.eu-west-1.compute.amazonaws.com',
    database: 'devquojnobf62t',
    password: '4de869ff47497e1677ecb430e4c1474559bf5b1b2abe9161c33492ad7dd16b66',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

exports.item_by_list = (req, response, next) => {
    pool.query("SELECT * \
    FROM PRODUCTS\
    WHERE ListID = "+ req.params.listID, (err, res) => {

        try {
            var item = res.rows
            response.send(item)

        } catch (e) {
            response.send("error")
        }
    })
};

exports.item_create = (req, response, next) => {
    console.log(req.params.phonenumber)

};