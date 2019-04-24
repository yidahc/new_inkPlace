// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode',
  database: 'inkPlace',
};

const connection = mysql.createConnection(config);

//Example mysql query using Promises
const getStyles = cb => {
  connection.query("SELECT style FROM styles",
    (err, results,fields) => {
      if(err){
        throw err;
      }else{
        cb(results)
      }
    });
};

const getInfoByStyle = cb => {
  return new Promise ((resolve, reject) => {
    connection.query("SELECT info FROM styles", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    })
  });
};


const imagesByStyle = cb => {
  return new Promise ((resolve, reject) => {
    connection.query("SELECT url FROM images", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    })
  });
};

const getUser = cb => {
  connection.query("INSERT INTO users (email,name) VAlUES ? ",
    (err, results,fields) => {
      if(err){
        throw err;
      }else{
        cb(results)
      }
    });
};

const getApp = cb => {
  connection.query("INSERT INTO appointments (size, bodypart, apptDate) VAlUES ? ",
    (err, results,fields) => {
      if(err){
        throw err;
      }else{
        cb(results)
      }
    });
};

module.exports = {
getStyles,
getInfoByStyle,
imagesByStyle ,
getUser,
getApp
};
