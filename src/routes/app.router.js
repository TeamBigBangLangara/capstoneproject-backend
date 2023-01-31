//Import modules
const express = require("express");
const router = express.Router()
const appController = require("../controller/app.controller")


////////// USER ROUTES //////////

router.get('/user/all', appController.getAllUsers);
router.get('/user/:id', appController.getOneUserById);
router.post('/user', appController.saveOneUser);
router.patch('/user/:id', appController.updateOneUserById);
router.delete('/user/:id', appController.deleteOneUserById);

////////// RATING ROUTES //////////

router.get('/rating/all', appController.getAllRatings);
router.get('/rating/:id', appController.getOneRatingById);
router.post('/rating', appController.saveOneRating);
router.patch('/rating/:id', appController.updateOneRatingById);
router.delete('/rating/:id', appController.deleteOneRatingById);

////////// BOOKMARK ROUTES //////////

router.get('/bookmark/all', appController.getAllBookmarks);
router.get('/bookmark/:id', appController.getOneBookmarkById);
router.post('/bookmark', appController.saveOneBookmark);
router.patch('/bookmark/:id', appController.updateOneBookmarkById);
router.delete('/bookmark/:id', appController.deleteOneBookmarkById);

////////// USER PROFILE ROUTES //////////

router.get('/UserProfile/all', appController.getAllUserProfile);
router.get('/UserProfile/:id', appController.getOneUserProfileById);
router.post('/UserProfile', appController.saveOneUserProfile);
router.patch('/UserProfile/:id', appController.updateOneUserProfileById);
router.delete('/UserProfile/:id', appController.deleteOneUserProfileById);

module.exports = router;