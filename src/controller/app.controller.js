//Import Modules
const appService = require("../services/app.service");

//=================================== VARIABLES/CONSTANTS

////////// USER //////////

async function getAllUsers(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb());
}

async function getOneUserById(req, res, next) {
  res.status(200).send(await appService.getOneUserFromDb(req.params.id));
}

async function saveOneUser(req, res, next) {
  res.status(200).send(await appService.saveOneUserInDb(req.body));
}

async function updateOneUserById(req, res, next) {
  res
    .status(200)
    .send(await appService.updateOneUserById(req.params.id, req.body));
}

async function deleteOneUserById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.deleteOneUserById(req.params.id)
    );
}

module.exports = {
  getAllUsers,
  getOneUserById,
  saveOneUser,
  updateOneUserById,
  deleteOneUserById,
};
