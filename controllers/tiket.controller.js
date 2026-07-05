import {prisma} from "../lib/prisma.js"
import { title } from "process"
import { existsSync, unlinkSync } from "fs"

const removeFilesFromStatic = async (filename) => {
   existsSync(`./uploads/${filename}`) && unlinkSync(`./uploads/${filename}`);
}

export const create = async (req,res) => {
    const filename = req.file.filename
    const body = req.body

    await prisma.tiket.create({
        data : {
            id_pemesanan : Number(body.id_pemesanan),
            no_kursi: body.no_kursi,
            image: filename
             }
    }

    )


    return res.json ({
        message : "Tiket Berhasil disimpan"
    })

}


export const getALLTiket = async (req, res) => {
    const data = await prisma.tiket.findMany({
      include: {
         pemesanan: true
      }
    })

    res.json(data)
}


export const getTiketById = async (req, res) => {

    const id_tiket = req.params.id

    const data = await prisma.tiket.findUnique({
        where : {
            id_tiket: Number(id_tiket)
        }
    })

res.json(data)

}

export const updateTiket = async (req, res) => {
   const body = req.body

   const oldImage = await prisma.tiket.findUnique({
      where: {
         id_tiket: Number(req.params.id)
      },
      select: {
         image: true
      }
   })

   let data = {
        id_pemesanan : Number(body.id_pemesanan),
        no_kursi: body.no_kursi
   }

   if (req.file) {
      data = {
         ...data,
         image: req.file.filename
      }
   }

   const updateData = await prisma.tiket.update({
      where: {
         id_tiket: Number(req.params.id)
      },
      data
   })

   if (req.file && updateData) {
      await removeFilesFromStatic(oldImage.image)
   }

   res.json({
      message: 'tiket update succsessfully'
   })
}



export const deleteTiket = async (req, res) => {
    const id_tiket = Number(req.params.id)

    await prisma.tiket.delete({
        where:{
           id_tiket: id_tiket
        }
    })

    res.json({
        message: 'data was deleted'
    })
}

