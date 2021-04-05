// const { Pool } = require('pg')
const runQuery = require('../services/queryService')

module.exports = {
    getAllProviders: (req, res) => {
        getAllProvidersQuery = 'SELECT * FROM service_providers';

        runQuery(getAllProvidersQuery,
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
        getProviderQuery = `SELECT * FROM service_providers
            WHERE providerid='${req.params.providerid}';`;

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

    addProvider: (req, res) => {
        addProviderQuery = ` INSERT INTO service_providers(manager, name, address_1, address_2, city, state, zip, country)
                    VALUES ((SELECT userid FROM authentication WHERE userid = '${req.body.manager}'),
                            '${req.body.name}',
                            '${req.body.address_1}',
                            '${req.body.address_2}',
                            '${req.body.city}',
                            '${req.body.state}',
                            '${req.body.zip}',
                            '${req.body.country}')`;
        console.log(query);
        runQuery(addProviderQuery, 
            (err, result) => {
                if (err){
                    console.log(err)
                    return;
                }
                return res.status(200).json({
                    message: "Added Service Provider",
                    data: result
                })
            })
    },

    updateProvider: (req, res) => {
        updateProviderQuery = `UPDATE service_providers
                                SET  name = '${req.body.name}',
                                            '${req.body.address_1}',
                                            '${req.body.address_2}',
                                            '${req.body.city}',
                                            '${req.body.state}',
                                            '${req.body.zip}',
                                            '${req.body.country}'
                                WHERE providerid = '${req.params.id}';`;
        console.log(updateProviderQuery);
        runQuery(updateProviderQuery, 
            (err, result) => {
                if(err){
                    console.log(err)
                    return;
                }
                return res.status(200).json({
                    message: `Service Provider of ID: ${req.body.id} is updated`,
                    data: result
                })
            });

    }
}