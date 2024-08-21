import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import { addType, getTypes , getTypeById, deleteType, updateType} from "../controller/typeController.js";

const router = Router();

router.get('/types', getTypes)


router.get('/types/:id', getTypeById)
router.post('/create-types', addType )
router.delete('/types/:id',deleteType)
router.put('/types/:id', updateType)


export default router;