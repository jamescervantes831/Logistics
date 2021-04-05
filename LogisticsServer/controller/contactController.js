const runQuery = require('../services/queryService');

module.exports = {
    getAllContacts: (req, res) => {
        getAllContactsQuery = `SELECT * FROM contacts`;

        runQuery(getAllContactsQuery,
            (err, result) =>{
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
    getContact: (req, res) => {
        getContactQuery = `SELECT * FROM contacts
                            WHERE contactid = '${req.params.contactid}';`;
        runQuery(getContactQuery, 
            (err, result) => {
                if(err) {
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
                            VALUES
                                (),
                                '${req.body.first_name}',
                                '${req.body.last_name}',
                                '${req.body.mobile_number}',
                                '${req.body.office_phone}',
                                '${req.body.fax}',
                                '${req.body.toll_free}',
                                '${req.body.email}',
                                ()`
    }
}
