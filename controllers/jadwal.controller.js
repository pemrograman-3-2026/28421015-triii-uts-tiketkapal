import {prisma} from "../lib/prisma.js"

export const create = async (req,res) => {
    const body = req.body

    await prisma.jadwal.create({
        data : {
            id_kapal : Number (body.id_kapal),
            asal : body.asal,
            tujuan : body.tujuan,
            jam_berangkat : body.jam_berangkat,
            harga : body.harga
             }
    }

    )


    return res.json ({
        message : "jadwal berhasil ditambahkan"
    })

}

export const getALLJadwal = async (req, res) => {
    const data = await prisma.jadwal.findMany()

    res.json(data)
}


export const getJadwalById = async (req, res) => {

    const id_jadwal = req.params.id

    const data = await prisma.jadwal.findUnique({
        where : {
            id_jadwal : Number(id_jadwal)
        }
    })

res.json(data)

}

export const updateJadwal = async (req, res) => {
    const id_jadwal = Number(req.params.id)

    await prisma.jadwal.update({
        where: {
            id_jadwal : id_jadwal
        },
        data: req.body
    })

    res.json({
        message: 'Data was updated successfully'
    })
}


export const deleteJadwal = async (req, res) => {
    const id_jadwal = Number(req.params.id)

    await prisma.jadwal.delete({
        where:{
           id_jadwal: id_jadwal
        }
    })

    res.json({
        message: 'data was deleted'
    })
}

