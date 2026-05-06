import express from "express"
import { create, getById,getALL,update,destroy } from "../controllers/jadwal.controller.js"

const router = express.Router()
router.post('/create',create)
router.post('/getById',getById)
router.post('/getALL',getALL)
router.post('/update',update)
router.post('/delate',destroy)




export default router