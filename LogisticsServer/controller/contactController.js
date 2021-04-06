const runQuery = require('../services/queryService');

module.exports = {
    getAllContacts: (req, res) => {
        getAllContactsQuery = `SELECT * FROM contacts`;

        runQuery(getAllContactsQuery,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                return res.status(200).json({
                    message: 'List of all contacts',
                    data: result
                })
            });
    },
    getContactsByProvider: (req, res) => {
        getContactQuery = `SELECT * FROM contacts
                            WHERE providerid = '${req.params.providerid}';`;
        runQuery(getContactQuery,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                return res.status(200).json({
                    data: result
                })
            });
    },
    getContactById: (req, res) => {
        getContactQuery = `SELECT * FROM contacts
                            WHERE contactid = '${req.params.contactid}';`;
        runQuery(getContactQuery,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                return res.status(200).json({
                    data: result
                })
            });
    },
    addContact: (req, res) => {
        addContactQuery = `INSERT INTO contacts(
                                titleid,
                                first_name,
                                last_name,
                                mobile_number,
                                office_phone,
                                fax,
                                toll_free,
                                email,
                                providerid )
                            VALUES(
                                (SELECT titleid FROM titles WHERE titleid = '${req.body.titleid}'),
                                '${req.body.first_name}',
                                '${req.body.last_name}',
                                '${req.body.mobile_number}',
                                '${req.body.office_phone}',
                                '${req.body.fax}',
                                '${req.body.toll_free}',
                                '${req.body.email}',
                                (SELECT providerid FROM service_providers WHERE providerid = '${req.params.providerid}'))`;
        console.log(addContactQuery);

        runQuery(addContactQuery,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return res.json({
                        message: "Error is Occured",
                        data: err
                    });
                }
                return res.status(200).json({
                    message: "Contact is added",
                    data: result
                });
            });
    },

    updateContact: (req, res) => {
        updateContactQuery = `UPDATE contacts
                                SET
                                    titleid = (SELECT titleid FROM titles WHERE titleid = '${req.body.titleid}'),
                                    first_name = '${req.body.first_name}',
                                    last_name = '${req.body.last_name}',
                                    mobile_num = '${req.body.mobile_number}',
                                    office_phone = '${req.body.office_phone}',
                                    fax = '${req.body.fax}',
                                    toll_free = '${req.body.toll_free}',
                                    email = '${req.body.email}'
                                WHERE contactid = '${req.params.contactid}';`;
        console.log(updateProviderQuery);
        runQuery(updateProviderQuery,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                return res.status(200).json({
                    message: `Service Provider of ID: ${req.body.providerid} is updated`,
                    data: result
                })
            });
    },

    deleteContact: (req, res) => {
        deleteContactQuery = `DELETE FROM contacts
                                WHERE contactid = '${req.params.contactid}';`

        runQuery(deleteContactQuery,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                return res.status(200).json({
                    message: `Contact of ID: ${req.params.contactid} is deleted `,
                    data: result
                })
            })
    }
}