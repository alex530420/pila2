/* eslint-disable prettier/prettier */
// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import userController from './user.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/user/login'
router.get(['/login'], userController.login);

// GET '/user/logout'
router.get(['/logout'], userController.logout);

// GET '/user/registrar'
router.get(['/registrar'], userController.registrar);

// Exporto este tramo de ruta
export default router;