// const { Pool } = require('pg')
const runQuery = require('../services/queryService')

module.exports = {
    getAllProviders: (req, res) => {
        query = 'select * from service_providers';

        runQuery(query,
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

    getProvider: (req, res) => {
        var id = req.params.providerid
        query = `SELECT * FROM service_providers
            WHERE providerid=${id}`;
        runQuery(query,
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
    }
}