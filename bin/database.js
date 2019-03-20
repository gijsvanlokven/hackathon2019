"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class database {
    constructor(user, password, host, standardDB = "Hackathon") {
        if (!database.engine) {
            console.log(arguments);
            if (user && password && host) {
                database.engine = mysql_1.default.createPool({
                    host,
                    user,
                    password,
                    database: standardDB
                });
            }
            else
                throw new TypeError("Trying to create database without parameters.");
        }
    }
    static query(query) {
        return new Promise((resolve, reject) => {
            let result = [];
            database.engine.query(query, (err, results, fields) => {
                if (err)
                    reject(err);
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
                        resolve({ count: results.length, columns: fields, results: result });
                    }
                    else
                        resolve({ count: 0, results: [], columns: [] });
                }
            });
        });
    }
    static IsJson(str) {
        try {
            var o = JSON.parse(str);
            if (o && typeof o === "object") {
                return o;
            }
        }
        catch (e) { }
        return false;
    }
}
exports.default = database;
//# sourceMappingURL=database.js.map