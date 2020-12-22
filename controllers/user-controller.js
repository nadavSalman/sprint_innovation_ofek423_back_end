const { Pool } = require('pg');
const { response } = require('express');

const client = new Pool({
    user: 'sryvfdltkzxaze',
    host: 'ec2-3-248-4-172.eu-west-1.compute.amazonaws.com',
    database: 'devquojnobf62t',
    password: '4de869ff47497e1677ecb430e4c1474559bf5b1b2abe9161c33492ad7dd16b66',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})


exports.user_phone_number = (req, response, next) => {
    client.connect()
    client.query("SELECT userfullname FROM public.USERS WHERE UserPhoneNumber='" + req.params.phonenumber + "'", (err, res) => {
        var username = res.rows[0].userfullname
        client.end()
        response.send(username)
    })
};

exports.user_create = (req, res, next) => {
    console.log(req.body.name)
}