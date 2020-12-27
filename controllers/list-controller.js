const { Pool } = require('pg');

const pool = new Pool({
    user: 'sryvfdltkzxaze',
    host: 'ec2-3-248-4-172.eu-west-1.compute.amazonaws.com',
    database: 'devquojnobf62t',
    password: '4de869ff47497e1677ecb430e4c1474559bf5b1b2abe9161c33492ad7dd16b66',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

exports.lists_by_groupID = (req, response, next) => {
    pool.query("SELECT * \
    FROM LISTS \
    WHERE TeamID = "+ req.params.groupID, (err, res) => {

        try {
            var item = res.rows
            response.send(item)

        } catch (e) {
            response.send("error")
        }
    })

};
exports.create_list = (req, response, next) => {
    const { team, creator, date, location } = req.body
    console.log(date)

    if (!isNaN(parseInt(team)) && !isNaN(parseInt(creator))) {
        try {
            pool.query("INSERT INTO LISTS (TeamID, ListCreator, ListPurchaseDate, PurchaseLocation) VALUES ($1, $2, $3, $4)", [parseInt(team), parseInt(creator),date, location], (error, results) => {
                if (error) {
                    throw error
                }
                response.send(`list added`)
            })
        } catch (e) {
            response.send("error")
        }
    }
    else {
        response.send("please send the right parameters")
    }
};