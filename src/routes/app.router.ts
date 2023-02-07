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

export default router;