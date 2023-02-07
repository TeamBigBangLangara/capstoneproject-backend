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
    .send(
      await appService.deleteOneUserInDb(req.params.id)
    );
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
    .send(
      await appService.deleteOneRatingInDb(req.params.id)
    );
}
