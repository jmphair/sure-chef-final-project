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

const addUser = (id, name, email) => {
  return db
    .query(
      `
  INSERT INTO users (id, name, email)
  VALUES ($1, $2, $3)
  RETURNING *
  `,
      [id, name, email]
    )
    .then((user) => {
      return user.rows[0];
    })
    .catch((error) => {
      if (error.code !== '23505') {
      console.log(error)
      }
    });
};



module.exports = { getAllUsers, getUserById, getUserByEmail, addUser };
