// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'holacode',
  password: 'Holacode',
  database: 'inkPlace',
};

const connection = mysql.createConnection(config);

//Example mysql query using Promises
const getStyles = cb => {
  return new Promise ((resolve, reject) => {
    connection.query("SELECT * FROM styles", (err, results) => {
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
  return new Promise ((resolve, reject) => {
    connection.query("INSERT INTO users (email,name) VAlUES (?,?)  ", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    })
  });
};


const getApp = cb => {
  return new Promise ((resolve, reject) => {
    connection.query("INSERT INTO appointments (size, bodypart, apptDate) VAlUES(?,?)", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    })
  });
};



module.exports = {
getStyles,
imagesByStyle ,
getUser,
getApp
};
