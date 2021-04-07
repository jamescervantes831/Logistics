// const { Pool } = require('pg')
const runQuery = require('../services/queryService')

module.exports = {
    getAllProviders: (req, res) => {
        getAllProvidersQuery = 'SELECT * FROM service_providers';

        runQuery(getAllProvidersQuery,

            (err, result) => {
                if (err) {
                    return res.json(err);
                }
                return res.status(200).json({
                    data: result
                })
            }
        );
    },

    getProviderByUser: (req, res) => {

        getProviderQuery = `SELECT * FROM service_providers
            WHERE manager= '${req.params.userid}';`;

        runQuery(getProviderQuery,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                return res.status(200).json({
                    message: "List of Service Provider",
                    data: result
                })
            }
        );
    },

    getProvider: (req, res) => {

        getProviderQuery = `SELECT * FROM service_providers
            WHERE manager = '${req.params.userid}'
            AND providerid= ${req.params.providerid};`;

        runQuery(getProviderQuery,
            (err, result) => {
                if (err) {
                    return res.json(err);
                }
                return res.status(200).json({
                    message: "List of Service Provider",
                    data: result
                })
            }
        );
    },

    addProvider: (req, res) => {

        if (req.body.manager != undefined &&
            req.body.name != undefined &&
            req.body.address_1 != undefined &&
            req.body.city != undefined &&
            req.body.state != undefined &&
            req.body.zip != undefined &&
            req.body.country != undefined) {

            addProviderQuery = ` INSERT INTO service_providers(manager, name, address_1, address_2, city, state, zip, country)
            VALUES ((SELECT userid FROM authentication WHERE userid = '${req.body.manager}'),
                    '${req.body.name}',
                    '${req.body.address_1}',
                    '${req.body.address_2}',
                    '${req.body.city}',
                    '${req.body.state}',
                    '${req.body.zip}',
                    '${req.body.country}')`;

            runQuery(addProviderQuery,
                (err, result) => {
                    if (err) {
                        return res.json(err);
                    }
                    return res.status(200).json({
                        message: "Added Service Provider",
                        data: result
                    })
                })

        }
        return res.status(404).json({
            message: "Undefined field detected"
        })

    },

    updateProvider: (req, res) => {
        if (req.body.manager != undefined &&
            req.body.name != undefined &&
            req.body.address_1 != undefined &&
            req.body.city != undefined &&
            req.body.state != undefined &&
            req.body.zip != undefined &&
            req.body.country != undefined) {
                updateProviderQuery = `UPDATE service_providers
                                        SET
                                            manager = (SELECT userid FROM authentication WHERE userid = '${req.body.manager}'),
                                            name = '${req.body.name}',
                                            address_1 = '${req.body.address_1}',
                                            address_2 = '${req.body.address_2}',
                                            city = '${req.body.city}',
                                            state = '${req.body.state}',
                                            zip = '${req.body.zip}',
                                            country = '${req.body.country}'
                                        WHERE providerid = ${req.params.providerid};`;
                        runQuery(updateProviderQuery,
                        (err, result) => {
                        if (err) {
                            return res.json(err);
                        }
                        return res.status(200).json({
                            message: `Service Provider of ID: ${req.body.providerid} is updated`,
                            data: result
                        })
                        });

            }
            return res.status(404).json({
                message: "Undefined field detected"
            })
    },

    deleteProvider: (req, res) => {
        deleteProviderQuery = `DELETE FROM service_providers
                                WHERE providerid = ${req.params.providerid};`

        runQuery(deleteProviderQuery,
            (err, result) => {
                if (err) {
                    return res.json(err);
                }
                return res.status(200).json({
                    message: `Provider of ID: ${req.params.providerid} is deleted `,
                    data: result
                })
            })
    }
}