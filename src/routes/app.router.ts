//Import modules

import * as express from 'express';
const router = express.Router();
const appController = require("../controller/app.controller");

////////// USER ROUTES //////////

router.get('/user/all', appController.getAllUsers);
router.get('/user/:id', appController.getOneUserById);
router.post('/user', appController.saveOneUser);
router.delete('/user/:id', appController.deleteOneUserById);

////////// RATING ROUTES //////////

router.get('/rating/all', appController.getAllRatings);
router.get('/rating/user/:user_id', appController.getAllRatingsByUserId);
router.get('/rating/:id', appController.getOneRatingById);
router.post('/rating', appController.saveOneRating);
router.delete('/rating/:id', appController.deleteOneRatingById);

////////// BOOKMARK ROUTES //////////

router.get('/bookmark/all', appController.getAllBookmarks);
router.get('/bookmark/user/:user_id', appController.getAllBookmarksByUserId);
router.get('/bookmark/:id', appController.getOneBookmarkById);
router.post('/bookmark', appController.saveOneBookmark);
router.delete('/bookmark/:id', appController.deleteOneBookmarkById);

////////// USER PROFILE ROUTES //////////

router.get('/userProfile/all', appController.getAllUserProfile);
router.get('/userProfile/:id', appController.getOneUserProfileById);
router.post('/userProfile', appController.saveOneUserProfile);
router.delete('/userProfile/:id', appController.deleteOneUserProfileById);

export default router;



