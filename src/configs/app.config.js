require("dotenv").config();

const settings = {
  databaseName: process.env.TEST_DB,
  mongoInstanceUri: process.env.MONGO_URL,
};

const firebaseSettings = {
  serviceAccountKey: process.env.FIREBASE_SERVICE_ACCOUNT,
};

module.exports = {
  settings,
  firebaseSettings,
};
