//Import Modules
const dbService = require("../integration/db.integration");
import User, { IUser } from "../models/User";

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

  //update

  async function deleteOneUserInDb(reqParam: any) {
    const filterQuery = { _id: reqParam };
    const response = dbService.deleteOneFromDb(User, filterQuery);
  
    return response;
  }

  module.exports = {
    getAllUsersFromDb,
    getOneUserFromDb,
    saveOneUserInDb,
    deleteOneUserInDb
  }