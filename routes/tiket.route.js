import express, { Router } from "express"
import { create, deleteTiket, getALLTiket, getTiketById, updateTiket } from "../controllers/tiket.controller.js"
import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random())
    cb(null, file.fieldname + '-' + uniqueSuffix + ext)
  }
})

const upload = multer({ storage: storage })

const router = Router()
router.post('/create', upload.single('image'), create)
router.get('/get-ALL', getALLTiket)
router.get('/get/:id', getTiketById)
router.put('/update/:id',upload.single('image'), updateTiket)
router.delete('/delete/:id', deleteTiket)

export default router