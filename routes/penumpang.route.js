import express, { Router } from "express"
import { create, deletePenumpang, getALLPenumpang, getPenumpangById, updatePenumpang,} from "../controllers/penumpang.controller.js"

const router = Router()
router.post('/create', create)
router.get('/get-ALL', getALLPenumpang)
router.get('/get/:id', getPenumpangById)
router.put('/update/:id', updatePenumpang)
router.delete('/delete/:id', deletePenumpang)



export default router