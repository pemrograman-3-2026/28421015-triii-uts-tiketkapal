import express, { Router } from "express"
import { create, updateJadwal, deleteJadwal, getJadwalById, getALLJadwal } from "../controllers/jadwal.controller.js"

const router = Router()
router.post('/create', create)
router.get('/get-ALL', getALLJadwal)
router.get('/get/:id', getJadwalById)
router.put('/update/:id', updateJadwal)
router.delete('/delete/:id', deleteJadwal)


export default router