//Imports
const dbConfig = require("../configs/app.config");
const mongoose = require('mongoose');

//Mongoose connection
const uri = dbConfig.settings.mongoInstanceUri;
const databaseName = dbConfig.settings.databaseName;
mongoose.connect(uri, {dbName: databaseName})
.then( () => {
  console.log(`Connection with Mongo Atlas ${uri} at DB ${databaseName}` );
});

async function getAllFromDb(collection) {
  try {
    const result = await collection.find();
    console.log(result);

    return result;
  } catch (err) {
    console.error(
      "Operation: getOneFromDb ",
      `An error was encountered: ${err}`
    );
  }
}

async function getOneFromDb(collection, filterQuery) {
  try {
    const query = filterQuery;
    const result = await collection.findOne(query);

    return result;
  } catch (err) {
    console.error(
      "Operation: getOneFromDb ",
      `An error was encountered: ${err}`
    );
  }
}

async function saveOneInDb(newDocument) {
  try {
    const result = await newDocument.save();

    return result;
  } catch (err) {
    console.error(
      "Operation: createOneInDb ",
      `An error was encountered: ${err}`
    );
  }
}

async function deleteOneFromDb(collection, filterQuery) {
  try {
    const query = filterQuery;
    const result = await collection.deleteOne(query);

    return result;
  } catch (err) {
    console.error(
      "Operation: deleteOneFromDb ",
      `An error was encountered: ${err}`
    );
  }
}

module.exports = {
  getAllFromDb,
  getOneFromDb,
  saveOneInDb,
  deleteOneFromDb,
};
