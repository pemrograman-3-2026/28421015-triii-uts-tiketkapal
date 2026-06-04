import express, { Router } from "express"
import { create, getALLPemesanan, getPemesananById, updatePemesanan, deletePemesanan } from "../controllers/pemesanan.controller.js"

const router = Router()
router.post('/create', create)
router.get('/get-ALL', getALLPemesanan)
router.get('/get/:id', getPemesananById)
router.put('/update/:id', updatePemesanan)
router.delete('/delete/:id', deletePemesanan)

export default router