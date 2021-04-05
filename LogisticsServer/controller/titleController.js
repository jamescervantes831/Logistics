const runQuery = require('../services/queryService')

module.exports = {
    getAllTitles: (req, res) => {
        getAllTitlesQuery = 'SELECT * FROM titles';

        runQuery(getAllTitlesQuery,

            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                return res.status(200).json({
                    data: result
                })
            }
        );
    },
}