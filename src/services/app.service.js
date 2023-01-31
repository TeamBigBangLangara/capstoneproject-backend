//Import Modules
const dbService = require("../integration/db.integration");

//Import Models
const User = require("../models/User");

//=================================== GLOBAL VARIABLES/CONSTANTS

//=================================== MODEL BUILDING FUNCTIONS

function buildUserModelToSave(informationObject) {
  const buildUserModelToSave = new User({
    firstName: informationObject.firstName,
    email: informationObject.email,
  });

  return buildUserModelToSave;
}

//=================================== API OPERATIONS

////////// USER //////////
async function getAllUsersFromDb() {
  const response = dbService.getAllFromDb(User);
  return response;
}

async function getOneUserFromDb(reqParam) {
  const filterQuery = { _id: reqParam };
  const response = dbService.getOneFromDb(User, filterQuery);

  return response;
}

async function saveOneUserInDb(requestBody) {
  const response = dbService.saveOneInDb(buildUserModelToSave(requestBody));

  return response;
}

async function updateOneUserInDb(reqParam, requestBody) {
  const filterQuery = { _id: reqParam };
  const toUpdateUser = dbService.getOneFromDb(User, filterQuery);
  toUpdateUser.firstName = requestBody.firstName;
  toUpdateUser.email = requestBody.email;

  const response = dbService.saveOneInDb(toUpdateUser);

  return response;
}

async function deleteOneUserInDb(reqParam) {
  const filterQuery = { _id: reqParam };
  const response = dbService.deleteOneFromDb(User, filterQuery);

  return response;
}

module.exports = {
  getAllUsersFromDb,
  getOneUserFromDb,
  saveOneUserInDb,
  updateOneUserInDb,
  deleteOneUserInDb,
};
