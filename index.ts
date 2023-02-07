
// Import modules
import express from 'express';
import cors from 'cors';
import router from './src/routes/app.router'
import dotenv from 'dotenv';

dotenv.config();
// Create an Express app instance
const app = express();

// Import settings
const port = process.env.PORT || 8000;

// Import Middleware
const corsOptions = {
origin: ["https://", "http://localhost:8000"],
methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
preflightContinue: false,
optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);


//Starting Message
app.listen(port, () => {
console.log(`Server has started at port ${port}`)
});