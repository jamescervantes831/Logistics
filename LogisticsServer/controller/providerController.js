// const { Pool } = require('pg')
const getProviders = require('../services/queryService')

module.exports = {
    getAllProviders: (req, res) => {
        query = 'select * from service_providers';

        console.log(typeof(getProviders));
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

        console.log(typeof(getProviders));
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