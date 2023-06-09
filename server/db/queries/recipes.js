const db = require('../../configs/db.config');

const getAllRecipesByUser = (id) => {
  return db.query("SELECT * FROM recipes WHERE user_id = $1", [id]).then(data => {
    return data.rows;
  })
    .catch((error) => console.log(error));

};

const updateRecipeSaveState = (id, saved) => {
  return db.query('UPDATE recipes SET saved = $2 WHERE id = $1 RETURNING *;', [id, saved])
    .then(res => {
      return res.rows[0];
    })
    .catch(err => console.log(err));
};

const addRecipe = (name, ingredients, instructions, servings, prep_time, cook_time, total_time, saved, user_id) => {
  console.log('yes we made it this far')
  return db
    .query(
      `
  INSERT INTO recipes (name, ingredients, instructions, servings, prep_time, cook_time, total_time, saved, user_id)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  RETURNING *;
  `,
      [name, ingredients, instructions, servings, prep_time, cook_time, total_time, saved, user_id]
    )
    .then((user) => {
      return user.rows[0];
    })
    .catch((error) => console.log(error));
};

const updateRecipeNote = (note, id) => {
  return db.query('UPDATE recipes SET note = $1 WHERE id = $2 RETURNING *;', [note, id])
    .then(res => {
      console.log(res.rows)
      return res.rows[0];
    })
    .catch(err => console.log(err));
};

const saveRecipe = (saved, id) => {
  return db.query('UPDATE recipes SET saved = $1 WHERE id = $2 RETURNING *;', [saved, id])
    .then(res => {
      console.log(res.rows)
      return res.rows[0];
    })
    .catch(err => console.log(err));
};

const removeRecipe = (id) => {
  return db
    .query(
      `
      DELETE FROM recipes WHERE id = $1;
      `, 
        [id]
    )
    .then(res => {
      return res.rows[0];
    })
    .catch((error) => console.log(error));
}

module.exports = { getAllRecipesByUser, updateRecipeSaveState, addRecipe, updateRecipeNote, removeRecipe, saveRecipe };

