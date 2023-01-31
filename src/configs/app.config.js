require("dotenv").config();

const settings = {
  databaseName: process.env.TEST_DB,
  mongoInstanceUri: process.env.MONGO_URL,
};

module.exports = {
  settings
};
