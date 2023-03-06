//Import Modules
const dbService = require("../integration/db.integration");
import User, { IUser } from "../models/User";
import Rating, { IRating } from "../models/Rating";
import Bookmarks, { IBookmarks } from "../models/Bookmarks";
import UserProfile, { IUserProfile } from "../models/UserProfile";

//=================================== GLOBAL VARIABLES/CONSTANTS

//=================================== MODEL BUILDING FUNCTIONS

function buildUserModelToSave(informationObject: IUser) {
  const buildUserModelToSave = new User({
    user_name: informationObject.user_name,
    email: informationObject.email,
    UID: informationObject.UID
  });

  return buildUserModelToSave;
}

function buildRatingModelToSave(informationObject: IRating) {
  const buildRatingModelToSave = new Rating({
    user_id: informationObject.user_id,
	  category: informationObject.category,
    rate : informationObject.rate,
    event_id : informationObject.event_id,
  });

  return buildRatingModelToSave;
}

function buildBookmarkModelToSave(informationObject: IBookmarks) {
  const buildBookmarkModelToSave = new Bookmarks({
    user_id: informationObject.user_id,
    event_id : informationObject.event_id,
  });

  return buildBookmarkModelToSave;
}

function buildUserProfileModelToSave(informationObject: IUserProfile) {
  const buildUserProfileModelToSave = new UserProfile({
    address: informationObject.address,
    profile_photo: informationObject.profile_photo,
    geoLocation_Latitude: informationObject.geoLocation_Latitude,
    geoLocation_Longitude: informationObject.geoLocation_Longitude,
    business_name: informationObject.business_name,
    notification_setting: informationObject.notification_setting,
    user_id: informationObject.user_id,
    event_customization: informationObject.event_customization,
    radius: informationObject.event_customization.radius,
    crowd_count: informationObject.event_customization.crowd_count,
    my_category: informationObject.event_customization.my_category
  });

  return buildUserProfileModelToSave;
}

//=================================== API OPERATIONS

////////// USER //////////

async function getAllUsersFromDb(): Promise<IUser[]> {
  const response = await dbService.getAllFromDb(User);
  return response;
}

async function getOneUserFromDb(reqParam: IUser) {
  const filterQuery = { _id: reqParam };
  const response = await dbService.getOneFromDb(User, filterQuery);
  
  return response;
  }

  async function saveOneUserInDb(requestBody: IUser) {
    const response = dbService.saveOneInDb(buildUserModelToSave(requestBody));
  
    return response;
  }

  async function deleteOneUserInDb(reqParam: IUser) {
    const filterQuery = { _id: reqParam };
    const response = dbService.deleteOneFromDb(User, filterQuery);
  
    return response;
  }

  ////////// RATING //////////
async function getAllRatingsFromDb(): Promise<IRating[]>  {
  const response = dbService.getAllFromDb(Rating);
  return response;
}

async function getOneRatingFromDb(reqParam: IRating) {
  const filterQuery = { _id: reqParam };
  const response = dbService.getOneFromDb(Rating, filterQuery);

  return response;
}

async function saveOneRatingInDb(requestBody: IRating) {
  const response = dbService.saveOneInDb(buildRatingModelToSave(requestBody));

  return response;
}

async function deleteOneRatingInDb(reqParam: IRating) {
  const filterQuery = { _id: reqParam };
  const response = dbService.deleteOneFromDb(Rating, filterQuery);

  return response;
}

////////// Bookmarks //////////
async function getAllBookmarksFromDb(): Promise<IBookmarks[]>{
  const response = dbService.getAllFromDb(Bookmarks);
  return response;
}

async function getOneBookmarkFromDb(reqParam: IBookmarks) {
  const filterQuery = { _id: reqParam };
  const response = dbService.getOneFromDb(Bookmarks, filterQuery);

  return response;
}

async function saveOneBookmarkInDb(requestBody: IBookmarks) {
  const response = dbService.saveOneInDb(buildBookmarkModelToSave(requestBody));

  return response;
}

async function deleteOneBookmarkInDb(reqParam: IBookmarks) {
  const filterQuery = { _id: reqParam };
  const response = dbService.deleteOneFromDb(Bookmarks, filterQuery);

  return response;
}

////////// UserProfile //////////

async function getAllUserProfileFromDb(): Promise<IUserProfile[]>{
  const response = await dbService.getAllFromDb(UserProfile);
  return response;
}

async function getOneUserProfileFromDb(reqParam: IUserProfile) {
  const filterQuery = { _id: reqParam };
  const response = await dbService.getOneFromDb(UserProfile, filterQuery);

  return response;
}

async function saveOneUserProfileInDb(requestBody: IUserProfile) {
  const response = dbService.saveOneInDb(buildUserProfileModelToSave(requestBody));

  return response;
}

async function deleteOneUserProfileInDb(reqParam: IUserProfile) {
  const filterQuery = { _id: reqParam };
  const response = dbService.deleteOneFromDb(UserProfile, filterQuery);

  return response;
}
  module.exports = {
    getAllUsersFromDb,
    getOneUserFromDb,
    saveOneUserInDb,
    deleteOneUserInDb,
    getAllRatingsFromDb,
    getOneRatingFromDb,
    saveOneRatingInDb,
    deleteOneRatingInDb,
    getAllBookmarksFromDb,
    getOneBookmarkFromDb,
    saveOneBookmarkInDb,
    deleteOneBookmarkInDb,
    getAllUserProfileFromDb,
    getOneUserProfileFromDb,
    saveOneUserProfileInDb,
    deleteOneUserProfileInDb
  }