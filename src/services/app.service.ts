//Import Modules
const dbService = require("../integration/db.integration");
import User, { IUser } from "../models/User";
import Rating, { IRating } from "../models/Rating";
import Bookmarks, { IBookmarks } from "../models/Bookmarks";

//=================================== GLOBAL VARIABLES/CONSTANTS

//=================================== MODEL BUILDING FUNCTIONS

function buildUserModelToSave(informationObject: any) {
  const buildUserModelToSave = new (User as any)({
    userName: informationObject.userName,
    email: informationObject.email,
    UID: informationObject.UID
  });

  return buildUserModelToSave;
}

function buildRatingModelToSave(informationObject: any) {
  const buildRatingModelToSave = new (Rating as any)({
    user_id: informationObject.user_id,
	  category: informationObject.category,
    rate : informationObject.rate,
    event_id : informationObject.event_id,
  });

  return buildRatingModelToSave;
}

function buildBookmarkModelToSave(informationObject: any) {
  const buildBookmarkModelToSave = new (Bookmarks as any)({
    user_id: informationObject.user_id,
    event_id : informationObject.event_id,
  });

  return buildBookmarkModelToSave;
}

//=================================== API OPERATIONS

////////// USER //////////

async function getAllUsersFromDb(): Promise<IUser[]> {
  const response = await dbService.getAllFromDb(User);
  return response;
}

async function getOneUserFromDb(reqParam: any) {
  const filterQuery = { _id: reqParam };
  const response = await dbService.getOneFromDb(User, filterQuery);
  
  return response;
  }

  async function saveOneUserInDb(requestBody: any) {
    const response = dbService.saveOneInDb(buildUserModelToSave(requestBody));
  
    return response;
  }

  //this update is not working ----
  async function updateOneUserInDb(reqParam: string, requestBody: { firstName: string, email: string }): Promise<any> {
    const filterQuery = { _id: reqParam };
    const toUpdateUser = await dbService.getOneFromDb(User, filterQuery);
    toUpdateUser.firstName = requestBody.firstName;
    toUpdateUser.email = requestBody.email;
  
    const response = await dbService.saveOneInDb(toUpdateUser);
    return response;
  }

  async function deleteOneUserInDb(reqParam: any) {
    const filterQuery = { _id: reqParam };
    const response = dbService.deleteOneFromDb(User, filterQuery);
  
    return response;
  }

  ////////// RATING //////////
async function getAllRatingsFromDb(): Promise<IRating[]>  {
  const response = dbService.getAllFromDb(Rating);
  return response;
}

async function getOneRatingFromDb(reqParam: any) {
  const filterQuery = { _id: reqParam };
  const response = dbService.getOneFromDb(Rating, filterQuery);

  return response;
}

async function saveOneRatingInDb(requestBody: any) {
  const response = dbService.saveOneInDb(buildRatingModelToSave(requestBody));

  return response;
}
//this is not working ----
async function updateOneRatingInDb(reqParam: string, requestBody: { rate: number }): Promise<any> {
  const filterQuery = { _id: reqParam };
  const toUpdateRating = await dbService.getOneFromDb(Rating, filterQuery);
  toUpdateRating.rate = requestBody.rate;

  const response = await dbService.saveOneInDb(toUpdateRating);
  return response;
}

async function deleteOneRatingInDb(reqParam: any) {
  const filterQuery = { _id: reqParam };
  const response = dbService.deleteOneFromDb(Rating, filterQuery);

  return response;
}

////////// Bookmarks //////////
async function getAllBookmarksFromDb() {
  const response = dbService.getAllFromDb(Bookmarks);
  return response;
}

async function getOneBookmarkFromDb(reqParam: any) {
  const filterQuery = { _id: reqParam };
  const response = dbService.getOneFromDb(Bookmarks, filterQuery);

  return response;
}

async function saveOneBookmarkInDb(requestBody: any) {
  const response = dbService.saveOneInDb(buildBookmarkModelToSave(requestBody));

  return response;
}

async function deleteOneBookmarkInDb(reqParam: any) {
  const filterQuery = { _id: reqParam };
  const response = dbService.deleteOneFromDb(Bookmarks, filterQuery);

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
    deleteOneBookmarkInDb
  }