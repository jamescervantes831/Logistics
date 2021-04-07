var runQuery = require('../services/queryService')

module.exports = {
    GetAllNotes: (req, res) => {
        queryString = `SELECT * FROM notes;`

        runQuery(queryString,
            (err, result) => {
                if (err) return res.json(err);

                return res.json({
                    message: "Retrieved all notes",
                    data: result
                })
            }
        )
    },

    GetNotesByProvider: (req, res) => {
        queryString =
            `SELECT * FROM notes
            WHERE providerid = ${req.params.providerid};`

        runQuery(queryString,
            (err, result) => {
                if (err) return res.json(err);

                return res.json({
                    message: "Retrieved notes list",
                    data: result
                })
            }
        )
    },

    GetNote: (req, res) => {
        queryString =
            `SELECT * FROM notes
            WHERE noteid = ${req.params.noteid};`

        runQuery(queryString,
            (err, result) => {
                if (err) return res.json(err);

                return res.json({
                    message: "Retrieved note",
                    data: result
                })
            }
        )
    },

    AddNote: (req, res) => {

        if (req.params.providerid == undefined || req.body.title == undefined || req.body.body == undefined) {
            console.log("BODY TITLE: " + req.body.title)
            console.log("BODY BODY: " + req.body.body)
            console.log("PARAMS: " + req.params.providerid)
            return res.status(400).json({
                message: "Invalid parameter"
            })
        }

        queryString =
            `INSERT INTO notes (providerid, title, body)
            VALUES (${req.params.providerid}, '${req.body.title}', '${req.body.body}');`

        runQuery(queryString,
            (err, result) => {
                if (err) return res.json({
                    message: err.message,
                    error: err
                });

                return res.json({
                    message: "Added new note",
                    data: result
                })
            }
        )
    },

    UpdateNote: (req, res) => {
        results = [];

        if (req.body.title != null || req.body.title != undefined || req.body.body != undefined) {
            queryString =
                `UPDATE notes
                SET title = '${req.body.title}',
                    body = '${ req.body.body }'           
                WHERE noteid = ${req.params.noteid};`

            runQuery(queryString,
                (err, result) => {
                    if (err) return res.json(err);

                    results.push(result);
                }
            )

        } else {
            return res.status(400).json({
                message: "Failed to update note, one or more parameters are undefined.",
                data: results
            })
        }
    },

    DeleteNote: (req, res) => {
        if (req.params.noteid == undefined) {
            return res.status(400).json({
                message: "Invalid parameter"
            })
        }
        queryString =
            `DELETE FROM notes
            WHERE noteid = ${req.params.noteid};`

        runQuery(queryString,
            (err, result) => {
                if (err) return res.json(err);
                if (result.rowCount === 0) return res.status(404).json({
                    message: `No note exists with the ID: ${req.params.noteid}.`,
                    data: result
                })
                return res.status(200).json({
                    message: `Removed note with id: ${req.params.noteid} from the system.`,
                    data: result
                })
            }
        )
    }
}