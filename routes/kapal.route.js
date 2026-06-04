import express, { Router } from "express"
import { create, getALLKapal, getKapalById, updateKapal, deleteKapal } from "../controllers/kapal.controller.js"

const router = Router()
router.post('/create', create)
router.get('/get-ALL', getALLKapal)
router.get('/get/:id', getKapalById)
router.put('/update/:id', updateKapal)
router.delete('/delete/:id', deleteKapal)



export default router