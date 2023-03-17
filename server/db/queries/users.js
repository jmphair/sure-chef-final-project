// db/queries/users.js

const db = require('../../configs/db.config');

const getAllUsers = () => {
  return db.query("SELECT * FROM users;").then(data => {
    return data.rows;
  })
    .catch((error) => console.log(error));

};

const getUserById = id => {
  return db.query("SELECT * FROM users WHERE id = $1;", [id]).then(data => {
    return data.rows;
  })
    .catch((error) => console.log(error));
};

const getUserByEmail = (email) => {
  return db
    .query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then((user) => {
      return user.rows;
    })
    .catch((error) => console.log(error));
};

const addUser = (username, email, password) => {
  return db
    .query(
      `
  INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3)
  RETURNING *
  `,
      [username, email, password]
    )
    .then((user) => {
      return user.rows[0];
    })
    .catch((error) => console.log(error));
};



module.exports = { getAllUsers, getUserById, getUserByEmail, addUser };
