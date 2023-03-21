// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');


/* GET users listing. */
router.get('/', (req, res) => {
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({users: data});
  })
});

/* PUT users listing. */
router.post('/', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;

  users.addUser(id, name, email)
    .then(data => {
      if (!data) {
        console.log(`Welcome, ${name}!`)
      }
    })
    .catch(e => console.log(e));
});

module.exports = router;