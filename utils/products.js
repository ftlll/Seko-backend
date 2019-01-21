var mysql =require('mysql')

var config = require("./../config/dbConfig");

var db = config.database;

var connection = mysql.createConnection({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
});

connection.connect(err => {
    if(err){
        return err;
    }
});

function getWallpaper(sample, name){
    return new Promise((resolve, reject)=>{
       const queryString = 'SELECT * FROM product WHERE sample = ? AND name = ?';
       connection.query(queryString,[sample, name],(err, result) =>{
          if(err){
              reject();
          }else{
              resolve(result);
          }
        });
    });
}

module.exports = getWallpaper;