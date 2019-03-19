const MySQL = require("mysql");

export default class database {
    constructor(user, password, host, standardDB = "Hackathon") {
        if (!database.engine)
            if (user && password && host)
                database.engine = MySQL.createPool({
                    host,
                    user,
                    password,
                    database: standardDB
                });
            else throw new TypeError("Trying to create database without parameters.");
    }
    static async query(query) {
        let result = [];
        database.engine.query(query, (err, results, fields) => {
            if (err)
                throw new Error(err);
            else {
                if (results.length) {
                    results.forEach((row, index) => {
                        let currentRow = {};
                        Object.keys(row).map(column => {
                            let json = this.IsJson(results[index][column]);
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
}
database.IsJson = (str) => {
    try {
        var o = JSON.parse(str);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    } catch {}

    return false;
}