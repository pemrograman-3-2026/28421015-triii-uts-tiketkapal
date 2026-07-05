import {prisma} from "../lib/prisma.js"

export const create = async (req,res) => {
    const body = req.body

    await prisma.pemesanan.create({
        data : {
            id_penumpang : Number(body.id_penumpang),
            id_jadwal : Number(body.id_jadwal),
            jumlah_tiket : Number(body.jumlah_tiket),
            total_bayar : body.total_bayar,
            status : body.status
             }
    }

    )


    return res.json ({
        message : "pemesanan berhasil"
    })

}

export const getALLPemesanan = async (req, res) => {
    const data = await prisma.pemesanan.findMany({
        include: {
            penumpang: true,
            jadwal: true
        }
    })

    res.json(data)
}


export const getPemesananById = async (req, res) => {

    const id_pemesanan = req.params.id

    const data = await prisma.pemesanan.findUnique({
        where : {
            id_pemesanan: Number(id_pemesanan)
        }
    })

res.json(data)

}

export const updatePemesanan = async (req, res) => {
    const id_pemesanan = Number(req.params.id)

    await prisma.pemesanan.update({
        where: {
            id_pemesanan: id_pemesanan
        },
        data: req.body
    })

    res.json({
        message: 'Data was updated successfully'
    })
}


export const deletePemesanan = async (req, res) => {
    const id_pemesanan = Number(req.params.id)

    await prisma.pemesanan.delete({
        where:{
           id_pemesanan: id_pemesanan
        }
    })

    res.json({
        message: 'data was deleted'
    })
}

