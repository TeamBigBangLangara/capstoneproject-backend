//Import modules

import * as express from 'express';
const router = express.Router();
const appController = require("../controller/app.controller");
import { authenticateJWT } from "../middleware/validateJWT";

////////// USER ROUTES //////////

router.get('/user/all', authenticateJWT, appController.getAllUsers);
router.get('/user/:id', authenticateJWT, appController.getOneUserById);
router.post('/user', authenticateJWT, appController.saveOneUser);
router.delete('/user/:id', authenticateJWT, appController.deleteOneUserById);

////////// RATING ROUTES //////////

router.get('/rating/all', authenticateJWT, appController.getAllRatings);
router.get('/rating/user/:user_id', authenticateJWT, appController.getAllRatingsByUserId);
router.get('/rating/:id', authenticateJWT, appController.getOneRatingById);
router.post('/rating', authenticateJWT, appController.saveOneRating);
router.delete('/rating/:id', authenticateJWT, appController.deleteOneRatingById);

////////// BOOKMARK ROUTES //////////

router.get('/bookmark/all', authenticateJWT, appController.getAllBookmarks);
router.get('/bookmark/user/:user_id', authenticateJWT, appController.getAllBookmarksByUserId);
router.get('/bookmark/:id', authenticateJWT, appController.getOneBookmarkById);
router.post('/bookmark', authenticateJWT, appController.saveOneBookmark);
router.delete('/bookmark/:id', authenticateJWT, appController.deleteOneBookmarkById);

////////// USER PROFILE ROUTES //////////

router.get('/userProfile/all', authenticateJWT, appController.getAllUserProfile);
router.get('/userProfile/:id', authenticateJWT, appController.getOneUserProfileById);
router.post('/userProfile', authenticateJWT, appController.saveOneUserProfile);
router.delete('/userProfile/:id', authenticateJWT, appController.deleteOneUserProfileById);

export default router;



