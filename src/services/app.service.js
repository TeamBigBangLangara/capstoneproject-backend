//Import Modules
const dbService = require("../integration/db.integration");

//Import Models
const User = require("../models/User");
const Rating = require("../models/Rating");
const Bookmarks = require("../models/Bookmarks");
const UserProfile = require("../models/UserProfile");

//=================================== GLOBAL VARIABLES/CONSTANTS

//=================================== MODEL BUILDING FUNCTIONS

function buildUserModelToSave(informationObject) {
  const buildUserModelToSave = new User({
    firstName: informationObject.firstName,
    email: informationObject.email,
  });

  return buildUserModelToSave;
}

function buildRatingModelToSave(informationObject) {
  const buildRatingModelToSave = new Rating({
    user_id: informationObject.user_id,
	  category: informationObject.category,
    rate : informationObject.rate,
    event_id : informationObject.event_id,
  });

  return buildRatingModelToSave;
}

function buildBookmarkModelToSave(informationObject) {
  const buildBookmarkModelToSave = new Bookmarks({
    user_id: informationObject.user_id,
    event_id : informationObject.event_id,
  });

  return buildBookmarkModelToSave;
}

function buildUserProfileModelToSave(informationObject) {
  const buildUserProfileModelToSave = new UserProfile({
    address: informationObject.address,
    profile_photo: informationObject.profile_photo,
    geoLocation_Latitude: informationObject.geoLocation_Latitude,
    geoLocation_Longitude: informationObject.geoLocation_Longitude,
    business_type: informationObject.business_type,
    notification_setting: informationObject.notification_setting,
    user_id: informationObject.user_id,
  });

  return buildUserProfileModelToSave;
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
//this is not working ----
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

////////// RATING //////////
async function getAllRatingsFromDb() {
  const response = dbService.getAllFromDb(Rating);
  return response;
}

async function getOneRatingFromDb(reqParam) {
  const filterQuery = { _id: reqParam };
  const response = dbService.getOneFromDb(Rating, filterQuery);

  return response;
}

async function saveOneRatingInDb(requestBody) {
  const response = dbService.saveOneInDb(buildRatingModelToSave(requestBody));

  return response;
}
//this is not working ----
async function updateOneRatingInDb(reqParam, requestBody) {
  const filterQuery = { _id: reqParam };
  const toUpdateRating = dbService.getOneFromDb(Rating, filterQuery);
  toUpdateRating.rate = requestBody.rate;

  const response = dbService.saveOneInDb(toUpdateRating);
  return response;
}

async function deleteOneRatingInDb(reqParam) {
  const filterQuery = { _id: reqParam };
  const response = dbService.deleteOneFromDb(Rating, filterQuery);

  return response;
}

////////// Bookmarks //////////
async function getAllBookmarksFromDb() {
  const response = dbService.getAllFromDb(Bookmarks);
  return response;
}

async function getOneBookmarkFromDb(reqParam) {
  const filterQuery = { _id: reqParam };
  const response = dbService.getOneFromDb(Bookmarks, filterQuery);

  return response;
}

async function saveOneBookmarkInDb(requestBody) {
  const response = dbService.saveOneInDb(buildBookmarkModelToSave(requestBody));

  return response;
}
//this is not working ----
async function updateOneBookmarkInDb(reqParam, requestBody) {
  const filterQuery = { _id: reqParam };
  const toUpdateBookmark = dbService.getOneFromDb(Bookmarks, filterQuery);
  toUpdateBookmark.user_id = requestBody.user_id;
  toUpdateBookmark.event_id = requestBody.event_id;

  const response = dbService.saveOneInDb(toUpdateBookmark);
  return response;
}

async function deleteOneBookmarkInDb(reqParam) {
  const filterQuery = { _id: reqParam };
  const response = dbService.deleteOneFromDb(Bookmarks, filterQuery);

  return response;
}

////////// UserProfile //////////
async function getAllUserProfileFromDb() {
  const response = dbService.getAllFromDb(UserProfile);
  return response;
}

async function getOneUserProfileFromDb(reqParam) {
  const filterQuery = { _id: reqParam };
  const response = dbService.getOneFromDb(UserProfile, filterQuery);

  return response;
}

async function saveOneUserProfileInDb(requestBody) {
  const response = dbService.saveOneInDb(buildUserProfileModelToSave(requestBody));

  return response;
}
//this is not working ----
async function updateOneUserProfileInDb(reqParam, requestBody) {
  const filterQuery = { _id: reqParam };
  const toUpdateUserProfile = dbService.getOneFromDb(UserProfile, filterQuery);
  toUpdateUserProfile.address =  requestBody.address;
  toUpdateUserProfile.geoLocation_Latitude = requestBody.geoLocation_Latitude;
  toUpdateUserProfile.geoLocation_Longitude = requestBody.geoLocation_Longitude;
  toUpdateUserProfile.profile_photo = requestBody.profile_photo;
  toUpdateUserProfile.business_type = requestBody.business_type;
  toUpdateUserProfile.notification_setting = requestBody.notification_setting;
  toUpdateUserProfile.user_id = requestBody.user_id;
    
  const response = dbService.saveOneInDb(toUpdateUserProfile);
  return response;
}

async function deleteOneUserProfileInDb(reqParam) {
  const filterQuery = { _id: reqParam };
  const response = dbService.deleteOneFromDb(UserProfile, filterQuery);

  return response;
}

module.exports = {
  getAllUsersFromDb,
  getOneUserFromDb,
  saveOneUserInDb,
  updateOneUserInDb,
  deleteOneUserInDb,
  getAllRatingsFromDb,
  getOneRatingFromDb,
  saveOneRatingInDb,
  updateOneRatingInDb,
  deleteOneRatingInDb,
  getAllBookmarksFromDb,
  getOneBookmarkFromDb,
  saveOneBookmarkInDb,
  updateOneBookmarkInDb,
  deleteOneBookmarkInDb,
  getAllUserProfileFromDb,
  getOneUserProfileFromDb,
  saveOneUserProfileInDb,
  updateOneUserProfileInDb,
  deleteOneUserProfileInDb,
};
