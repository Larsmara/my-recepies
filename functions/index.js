const functions = require("firebase-functions");
const express = require("express");
const { db } = require("./util/admin");
const FBAuth = require("./util/FBAuth");

/* User routes */
const {
  login,
  signup,
  addUserDetails,
  getUserDetails,
  uploadImage,
  getAuthenticatedUserInfo,
} = require("./routes/user");
/* Recipe routes */
const {
  createRecipe,
  deleteRecipe,
  getRecipe,
  getUsersRecipes,
  removeFavorite,
  setFavorite,
} = require("./routes/recipe");

const app = express();

// User routes
app.post("/login", login);
app.post("/signup", signup);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUserInfo);
app.get("/user/:username", getUserDetails);
// Recipe routes
app.post("/recipe", FBAuth, createRecipe);
app.delete("/recipe/:recipeId", FBAuth, deleteRecipe);
app.get("/recipes", FBAuth, getUsersRecipes);
app.get("/recipes/:recipeId/favorite", FBAuth, setFavorite);
app.get("/recipes/:recipeId/unfavorite", FBAuth, removeFavorite);
/* Might not need this next route */
app.get("/recipe/:recipeId", FBAuth, getRecipe);

// https://baseurl.com/api
exports.api = functions.region("europe-west1").https.onRequest(app);

exports.onUserImageChange = functions
  .region("europe-west1")
  .firestore.document("/users/{userId}")
  .onUpdate((change) => {
    if (change.before.data().profileImg !== change.after.data().profileImg) {
      const batch = db.batch();

      return db
        .collection("recipe")
        .where("username", "==", change.before.data().username)
        .get()
        .then((data) => {
          data.forEach((doc) => {
            const scream = db.doc(`/recipe/${doc.id}`);
            batch.update(scream, { profileImg: change.after.data().profileImg });
          });
          return batch.commit();
        });
    } else {
      return true;
    }
  });
