const pool = require('../dbconfig/dbConfig')

runQuery = function(queryString, callback) {
    pool.query(
        queryString, [],
        (error, result) => {

            if (error) return callback(error);
            return callback(null, result);
        }
    )
}

module.exports = runQuery