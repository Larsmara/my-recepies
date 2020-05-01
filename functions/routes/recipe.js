const { db } = require("../util/admin");
const { validateRecipeData } = require("../util/validators");

exports.getUsersRecipes = (req, res) => {
  db.collection("recipes")
    .where("username", "==", req.user.username)
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let recipes = [];
      data.forEach((doc) => {
        recipes.push({
          ...doc.data(),
          recipeId: doc.id,
        });
      });
      return res.json(recipes);
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Something went wrong, please try again", errorCode: error });
    });
};

exports.createRecipe = (req, res) => {
  const newRecipe = {
    name: req.body.name,
    calories: req.body.calories,
    carbs: req.body.carbs,
    protein: req.body.protein,
    fat: req.body.fat,
    description: req.body.description,
    username: req.user.username,
    profileImg: req.user.profileImg,
    createdAt: new Date().toISOString(),
  };

  const { valid, errors } = validateRecipeData(newRecipe);

  if (!valid) return res.status(400).json(errors);

  db.collection("recipes")
    .add(newRecipe)
    .then((doc) => {
      const resRecipe = newRecipe;
      resRecipe.recipeId = doc.id;
      res.json(resRecipe);
    })
    .catch((error) => {
      res.status(500).json({ error: "Something went wrong" });
    });
};

exports.getRecipe = (req, res) => {
  let recipeData = {};

  db.doc(`/recipe/${req.params.recipeId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Recipe not found" });
      } else {
        recipeData.recipeId = doc.id;
        recipeData = doc.data();
        return res.json(recipeData);
      }
    })
    .catch((error) => {
      return res.status(500).json({ error: error.code });
    });
};

exports.deleteRecipe = (req, res) => {
  const document = db.doc(`/recipe/${req.params.recipeId}`);

  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(400).json({ error: "Recipe not found" });
      }
      if (doc.data().username !== req.user.username) {
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "Recipe deleted" });
    })
    .catch((error) => {
      return res.status(500).json({ error: error.code });
    });
};

exports.setFavorite = (req, res) => {
  const favoriteDocument = db.collection("recipes").doc(req.params.recipeId);

  let recipeData;

  favoriteDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        recipeData = doc.data();
        recipeData.favorite = true;
        recipeData.recipeId = doc.id;
        return favoriteDocument.update({ favorite: true });
      } else {
        return res.status(404).json({ error: "Recipe not found" });
      }
    })
    .then(() => {
      return res.json(recipeData);
    })
    .catch((error) => {
      return res.status(500).json({ error: error.code });
    });
};

exports.removeFavorite = (req, res) => {
  const favoriteDocument = db.collection("recipes").doc(req.params.recipeId);

  let recipeData;

  favoriteDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        recipeData = doc.data();
        recipeData.favorite = false;
        recipeData.recipeId = doc.id;
        return favoriteDocument.update({ favorite: false });
      } else {
        return res.status(404).json({ error: "Recipe not found" });
      }
    })
    .then(() => {
      return res.json(recipeData);
    })
    .catch((error) => {
      return res.status(500).json({ error: error.code });
    });
};
