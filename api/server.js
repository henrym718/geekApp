import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorLog, errorHandler } from "./middleware/errors/errorHandler.js";

//Inicialization
const app = express();
dotenv.config();

//Other imports
import mongoConnect from "./config/dataBases/mongoConnect.js";
import authRoutes from "./features/auth/infraestructure/input_adapters/authRoutes.js"
import userRoutes from "./features/user/infraestructure/input_adapters/userRoutes.js"
import imagesRoutes from "./features/images/infraestructure/input_adapters/imageRoutes.js"
import productRoutes from "./features/product/infraestructure/input_adapters/productRoutes.js"


/** esta es la que vale */
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', req.headers.origin); // Reemplaza con el origen de tu aplicación React
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next();
// });

/**Middleware */
app.use(express.json());
app.use(cookieParser());

//Index routes
app.use(authRoutes)
app.use(userRoutes)
app.use(imagesRoutes)
app.use(productRoutes)

//ErrorHandler
app.use(errorLog);
app.use(errorHandler);

//Running server
var server = app.listen(process.env.PORT || 3000, () => {
  mongoConnect();
  console.log("express server listening on port " + server.address().port);
});