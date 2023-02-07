//Import Modules
const appService = require("../services/app.service");
import {Request, Response, NextFunction } from "express";


export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.getAllUsersFromDb());
}

export async function getOneUserById(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.getOneUserFromDb(req.params.id));
}

export async function saveOneUser(req: Request, res: Response, next: NextFunction) {
  res.status(200).send(await appService.saveOneUserInDb(req.body));
}

export async function deleteOneUserById(req: Request, res: Response, next: NextFunction) {
  res
    .status(200)
    .send(
      await appService.deleteOneUserInDb(req.params.id)
    );
}
