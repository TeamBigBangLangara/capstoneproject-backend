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

module.exports = router;