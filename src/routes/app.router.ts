//Import modules

import * as express from 'express';
const router = express.Router();
const appController = require("../controller/app.controller");

////////// USER ROUTES //////////

router.get('/user/all', appController.getAllUsers);
router.get('/user/:id', appController.getOneUserById);
//CHECK THE POST METHOD
router.post('/user', appController.saveOneUser);
// router.patch('/user/:id', appController.updateOneUserById);
router.delete('/user/:id', appController.deleteOneUserById);

////////// RATING ROUTES //////////

router.get('/rating/all', appController.getAllRatings);
router.get('/rating/:id', appController.getOneRatingById);
// CHECK POST METHOD
router.post('/rating', appController.saveOneRating);
// router.patch('/rating/:id', appController.updateOneRatingById);
router.delete('/rating/:id', appController.deleteOneRatingById);

////////// BOOKMARK ROUTES //////////

router.get('/bookmark/all', appController.getAllBookmarks);
router.get('/bookmark/:id', appController.getOneBookmarkById);
router.post('/bookmark', appController.saveOneBookmark);
router.delete('/bookmark/:id', appController.deleteOneBookmarkById);

export default router;



