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
router.put('/', (req, res) => {
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

/* GET user login */
router.get("/login", (req, res) => {
  console.log('test')
  users.getUserById(16)
    .then(data => {
      console.log(data);
      res.json({id: data})
    })
});

/* GET logout */
router.get("/logout", (req, res) => {
  users.getUserById(null)
  .then(data => {
    console.log('hi', data);
  })
});



/* GET signup */
// router.post("/signup", (req, res) => {
//   users.addUser.then(data => {
//     console.log('hi', data);
//     res.json({id: data})
//   })
// });

module.exports = router;