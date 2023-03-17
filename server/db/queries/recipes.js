const db = require('../../configs/db.config');

const getSavedRecipesByUser = (id) => {
  return db.query("SELECT * FROM recipes WHERE user_id = $1 AND saved = true", [id]).then(data => {
    return data.rows;
  })
    .catch((error) => console.log(error));

};

module.exports = { getSavedRecipesByUser };