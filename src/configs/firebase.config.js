const { initializeApp } = require('firebase-admin/app');

var admin = require("firebase-admin");

const serviceAccount = require("./app.config");

const serviceAccountKey = JSON.parse(serviceAccount.firebaseSettings.serviceAccountKey);

if (!admin.apps.length) { // Only initialize if not already initialized
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey)
  });
}

module.exports = {
  admin,
}