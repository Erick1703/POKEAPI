import { Router } from "express";
import { login, register , logout, profile} from "../controller/authController.js";
import {authRequired} from "../middleware/validateToken.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
const router = Router();


router.post('/register', validateSchema(registerSchema),register)

router.post('/login', validateSchema(loginSchema),login )

router.post('/logout', logout)

router.get('/profile',authRequired, profile)

export default router;  