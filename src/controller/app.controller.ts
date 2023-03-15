//Import Modules
const appService = require("../services/app.service");
import {Request, Response, NextFunction } from "express";

//=================================== VARIABLES/CONSTANTS

////////// USER //////////
export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.getAllUsersFromDb());
}

export async function getOneUserById(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.getOneUserFromDb(req.params.id));
}

export async function saveOneUser(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.saveOneUserInDb(req.body));
}

export async function updateOneUserById(req: Request, res: Response, next: NextFunction) {
  res
    .status(200)
    .send(await appService.updateOneUserInDb(req.params.id, req.body));
}

export async function deleteOneUserById(req: Request, res: Response, next: NextFunction) {
  res
    .status(200)
    .send( await appService.deleteOneUserInDb(req.params.id));
}

////////// RATING //////////

export async function getAllRatings(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.getAllRatingsFromDb());
}

export async function getOneRatingById(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.getOneRatingFromDb(req.params.id));
}

export async function saveOneRating(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.saveOneRatingInDb(req.body));
}

export async function updateOneRatingById(req: Request, res: Response, next: NextFunction) {
  res
    .status(200)
    .send(await appService.updateOneRatingInDb(req.params.id, req.body));
}

export async function deleteOneRatingById(req: Request, res: Response, next: NextFunction) {
  res
    .status(200)
    .send(await appService.deleteOneRatingInDb(req.params.id));
}

////////// BOOKMARK //////////

export async function getAllBookmarks(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.getAllBookmarksFromDb());
}

export async function getOneBookmarkById(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.getOneBookmarkFromDb(req.params.id));
}

export async function saveOneBookmark(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.saveOneBookmarkInDb(req.body));
}

export async function deleteOneBookmarkById(req: Request, res: Response, next: NextFunction) {
  res
    .status(200).send(await appService.deleteOneBookmarkInDb(req.params.id));
}

export async function getAllBookmarksByUserId(req: Request, res: Response, next: NextFunction) {
  
  res.status(200).send(await appService.getAllBookmarksByUserIdFromDb(req.params.user_id));
}

////////// USER PROFILE //////////

export async function getAllUserProfile(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.getAllUserProfileFromDb());
}

export async function getOneUserProfileById(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.getOneUserProfileFromDb(req.params.id));
}

export async function saveOneUserProfile(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.saveOneUserProfileInDb(req.body));
}

export async function deleteOneUserProfileById(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.deleteOneUserProfileInDb(req.params.id));
}
