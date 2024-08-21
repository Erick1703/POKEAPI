import { Router } from "express";
import { addRegion, deleteRegion, getRegionById, getRegions, updateRegion } from "../controller/regionController.js";
const router = Router();

router.get('/regions',getRegions )
router.get('/regions/:id',getRegionById)
router.post('/create-region' ,addRegion)
router.delete('/regions/:id', deleteRegion)
router.put('/regions/:id', updateRegion)


export default router;