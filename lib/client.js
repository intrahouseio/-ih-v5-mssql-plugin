/**
 * mssql client
 */

const sql = require('mssql')
 
 module.exports = {
   pool: {},
 
   async createPoolToDatabase(dbopt) {
    this.pool = await sql.connect(dbopt)
   },
 
   async run(sql, values) {
     return new Promise((resolve, reject) => {
       this.pool.query(sql, [values], (err, res) => {
         if (!err) {
           resolve(res);
         } else reject(err);
       });
     });
   },
 
   async query(sql) {
    let result1 = await this.pool.request().query(sql);
     return result1;
   },
 
 };
 
