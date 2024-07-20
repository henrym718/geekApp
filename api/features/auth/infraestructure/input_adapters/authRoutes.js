// Importamos el módulo de Express para crear el router
import express from "express";
const router = express.Router();
import { validator } from '../../../../middleware/data/validatorData.js';
import * as data from "./authValidateData.js"

// Importamos el contenedor de Awilix para resolver las dependencias
import { authContainer } from "../../../../config/dependencies/authContainer.js"
//Resolvemos el controlador de autenticación del contenedor
const authController = authContainer.resolve('authController');

// Definimos la ruta de login y asociamos el método del controlador
router.post("/api/auth/logincredentials", validator(data.authDataValidateLogin), (req, res, next) => authController.loginCredentials(req, res, next))
router.post("/api/auth/registercredentials", validator(data.authDataValidateRegister), (req, res, next) => authController.registerCredentials(req, res, next))
router.get("/api/auth/logout", (req, res, next) => authController.logout(req, res, next))
router.get("/api/auth/refreshtoken", (req, res, next) => authController.getNewRefreshToken(req, res, next))
router.post("/api/auth/isauthenticated", (req, res, next) => authController.chekIsAuthenticated(req, res, next))

export default router