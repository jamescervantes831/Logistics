var runQuery = require('../services/queryService')
module.exports = {
    GetAllUsers: (req, res) => {
        queryString = `SELECT * FROM authentication;`

        runQuery(queryString,
            (err, result) => {
                if (err) return res.json(err);

                return res.json({
                    message: "Retrieved user list",
                    data: result
                })
            }
        )
    },

    GetUser: (req, res) => {
        queryString =
            `SELECT * FROM authentication
            WHERE userid = '${req.params.userid}';`;

        runQuery(queryString,
            (err, result) => {
                if (err) return res.json(err);
                // return an error if the query returns nothing
                if (result.rowCount === 0) return res.status(404).json({
                    message: "No user exists with the specified id",
                    data: result
                })
                return res.json({
                    message: `Retrieved user: ${req.params.userid}`,
                    data: result
                })
            }
        )
    },

    AddUser: (req, res) => {
        queryString =
            `INSERT INTO authentication (userid, password)
            VALUES ('${req.body.userid}', '${req.body.password}');`;

        runQuery(queryString,
            (err, result) => {
                if (err) return res.json(err);
                return res.status(200).json({
                    message: `Added user: ${req.body.userid}.`,
                    data: result
                })
            }
        )
    },
    DeleteUser: (req, res) => {
        queryString =
            `DELETE FROM authentication
            WHERE userid = '${req.params.userid}';`

        runQuery(queryString,
            (err, result) => {
                if (err) return res.json(err);
                if (result.rowCount === 0) return res.status(404).json({
                    message: `No user exists with the user ID: ${req.params.userid}.`,
                    data: result
                })
                return res.status(200).json({
                    message: `Removed user: ${req.params.userid} from the system.`,
                    data: result
                })
            }
        )
    },

    ChangeUserPassword: (req, res) => {
        queryString =
            `UPDATE authentication
            SET password = '${req.body.password}'
            WHERE userid = '${req.params.userid}';`;

        runQuery(queryString,
            (err, result) => {
                if (err) return res.json(err);
                return res.status(200).json({
                    message: `Updated password for user: ${req.params.userid}`,
                    data: result
                })
            }
        )
    }


}