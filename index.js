
// Import modules
const express = require('express');
const app = express();
const cors = require("cors");
const routes = require("./src/routes/app.router")

//Import settings
const port = process.env.PORT || 8000;

//Import Middleware
const corsOptions = {
	origin: ["https://tiein.ca", "http://localhost:8000"],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204,
  };
app.use(cors(corsOptions));
app.use(express.json())
app.use("/", routes);

//Starting Message
app.listen(port, () => {
	console.log(`Server has started at port ${port}`)
})