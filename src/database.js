const MySQL = require("mysql");

class database {
    constructor(user, password, host, standardDB = "Hackathon") {
        if (!database.engine) {
            console.log(arguments);
            if (user && password && host) {
                database.engine = MySQL.createPool({
                    host,
                    user,
                    password,
                    database: standardDB
                });
            }
            else throw new TypeError("Trying to create database without parameters.");
        }
    }
}
database.query = async (query) => {
    let result = [];
    database.engine.query(query, (err, results, fields) => {
        if (err)
            throw new Error(err);
        else {
            if (results.length) {
                results.forEach((row, index) => {
                    let currentRow = {};
                    Object.keys(row).map(column => {
                        let json = database.IsJson(results[index][column]);
                        if (json)
                            currentRow[column] = json;
                        else {
                            currentRow[column] = results[index][column];
                        }
                    });
                    result.push(currentRow);
                });
                return {
                    count: results.length,
                    columns: fields,
                    results: result
                };
            } else return;
        }
    });
}

database.IsJson = (str) => {
    try {
        var o = JSON.parse(str);
        if (o && typeof o === "object") {
            return o;
        }
    } catch (e) {}

    return false;
}
module.exports = database;