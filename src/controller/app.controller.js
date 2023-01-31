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

////////// RATING //////////

async function getAllRatings(req, res, next) {
  res.status(200).send(await appService.getAllRatingsFromDb());
}

async function getOneRatingById(req, res, next) {
  res.status(200).send(await appService.getOneRatingFromDb(req.params.id));
}

async function saveOneRating(req, res, next) {
  res.status(200).send(await appService.saveOneRatingInDb(req.body));
}

async function updateOneRatingById(req, res, next) {
  res
    .status(200)
    .send(await appService.updateOneRatingById(req.params.id, req.body));
}

async function deleteOneRatingById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.deleteOneRatingById(req.params.id)
    );
}

////////// BOOKMARK //////////

async function getAllBookmarks(req, res, next) {
  res.status(200).send(await appService.getAllBookmarksFromDb());
}

async function getOneBookmarkById(req, res, next) {
  res.status(200).send(await appService.getOneBookmarkFromDb(req.params.id));
}

async function saveOneBookmark(req, res, next) {
  res.status(200).send(await appService.saveOneBookmarkInDb(req.body));
}

async function updateOneBookmarkById(req, res, next) {
  res
    .status(200)
    .send(await appService.updateOneBookmarkById(req.params.id, req.body));
}

async function deleteOneBookmarkById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.deleteOneBookmarkById(req.params.id)
    );
}

////////// USER PROFILE //////////

async function getAllUserProfile(req, res, next) {
  res.status(200).send(await appService.getAllUserProfileFromDb());
}

async function getOneUserProfileById(req, res, next) {
  res.status(200).send(await appService.getOneUserProfileFromDb(req.params.id));
}

async function saveOneUserProfile(req, res, next) {
  res.status(200).send(await appService.saveOneUserProfileInDb(req.body));
}

async function updateOneUserProfileById(req, res, next) {
  res
    .status(200)
    .send(await appService.updateOneUserProfileById(req.params.id, req.body));
}

async function deleteOneUserProfileById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.deleteOneUserProfileById(req.params.id)
    );
}

module.exports = {
  getAllUsers,
  getOneUserById,
  saveOneUser,
  updateOneUserById,
  deleteOneUserById,
  getAllRatings,
  getOneRatingById,
  saveOneRating,
  updateOneRatingById,
  deleteOneRatingById,
  getAllBookmarks,
  getOneBookmarkById,
  saveOneBookmark,
  updateOneBookmarkById,
  deleteOneBookmarkById,
  getAllUserProfile,
  getOneUserProfileById,
  saveOneUserProfile,
  updateOneUserProfileById,
  deleteOneUserProfileById,
};
