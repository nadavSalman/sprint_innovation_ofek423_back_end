const { Pool } = require('pg');


const pool = new Pool({
    user: 'sryvfdltkzxaze',
    host: 'ec2-3-248-4-172.eu-west-1.compute.amazonaws.com',
    database: 'devquojnobf62t',
    password: '4de869ff47497e1677ecb430e4c1474559bf5b1b2abe9161c33492ad7dd16b66',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

exports.groups_by_userID = (req, response, next) => {
    pool.query("SELECT TeamName,TeamID FROM TEAMS WHERE TeamID in (SELECT TeamID FROM TEAM_PER_USER WHERE UserID =" + req.params.userID + ");", (err, res) => {
        try {
            var item = res.rows
            response.send(item)

        } catch (e) {
            response.send("error")
        }
    })
};

exports.create_group = (req, response, next) => {
    const { name, team_members } = req.body
    try {
        pool.query("INSERT INTO TEAMS (TeamName) VALUES ($1)", [name], (error, results) => {
            if (error) {
                throw error
            }
            //   response.send(`Team added`)
        })

    } catch (e) {
        response.send("error")
    }

    pool.query("SELECT TeamID FROM TEAMS WHERE TeamName = $1;", [name], (err, res) => {
        try {
            team_id = res.rows[res.rows.length - 1].teamid
            team_members.forEach(user_id => {
                if (typeof user_id == 'number') {
                    pool.query("INSERT INTO TEAM_PER_USER VALUES ((SELECT UserID FROM USERS WHERE UserID = $1), (SELECT TeamID FROM TEAMS WHERE TeamID = $2))", [user_id, team_id], (error, results) => {
                        if (error) {
                            throw error
                        }
                        // response.send(`Team added`)
                    })
                }
                else {
                    throw 'parameter is not a number'
                }
            });

        } catch (e) {
            response.send("error")
        }

    })
};