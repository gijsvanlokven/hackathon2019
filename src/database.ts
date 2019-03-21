import MySQL, { Pool, FieldInfo } from "mysql";

export default class database {
    private static engine: Pool;
    constructor(user: string, password: string, host: string, standardDB = "Hackathon") {
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
    public static query(query: string): Promise<{ count: number, columns: FieldInfo[], results: any[] }> {
        return new Promise((resolve, reject) => {
            let result: any[] = [];
            database.engine.query(query, (err, results, fields: FieldInfo[]) => {
                if (err)
                    reject(err);
                else {
                    if (results.length) {
                        results.forEach((row: any, index: any) => {
                            let currentRow: { [key: string]: any } = {};
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
                        resolve({ count: results.length as number, columns: fields as any[], results: result });
                    }
                    else resolve({ count: 0, results: [], columns: [] });
                }
            });
        });
    }

    static IsJson(str: string) {
        try {
            var o = JSON.parse(str);
            if (o && typeof o === "object") {
                return o;
            }
        } catch (e) { }

        return false;
    }
}