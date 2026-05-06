import {prisma} from "../lib/prisma.js"

export const create = async (req,res) => {
    const body = req.body

    await prisma.tiket.create({
        data : {
            id_pemesanan : body.id_pemesanan,
            no_kursi: body.no_kursi
             }
    }

    )


    return res.json ({
        message : "Tiket Berhasil disimpan"
    })

}


export const getById = async (req,res) => {
    const id_tiket =req.body.id_tiket
    const tiket = await prisma.tiket.findUnique({
        where : {
            id_tiket: Number(id_tiket)
        },
        include: {
            pemesanan:true
        }
    })
    if (!tiket){
        return res.status(400).json({
            message : "data tidak ditemukan"
        })
    }
     return res.json({
        message : "berhasil mengambil data",
        data : tiket
    })
}

export const getALL =  async (req,res) => {
    const tiket = await prisma.tiket.findMany({
        include: {
            pemesanan:true
        }
    })

     return res.json({
        message : "berhasil mengambil semua data",
        data : tiket
    })
}

export const update = async (req,res) => {
    try {
        const { id_tiket, id_pemesanan, no_kursi } = req.body

        const updateTiket = await prisma.tiket.update({
            where: {
                id_tiket: Number(id_tiket)
            },
            data: {
                id_pemesanan : id_pemesanan,
                no_kursi : no_kursi
            }, 
            include: {
                pemesanan:true
            }
        })

       return res.json({
            message: "data berhasil diperbarui",
            data: updateTiket
        })

    } catch (error) {
        
       return res.status(400).json({
            message: "data gagal diperbarui, id tidak ditemukan "
        })
    }
}

export const destroy = async (req, res) => {
    try {
        const { id_tiket } = req.body

        await prisma.tiket.delete({
            where: {
                id_tiket: Number(id_tiket)
            }
        })

        return res.json({
            message: "Data kamar berhasil dihapus"
        })
    } catch (error) {
        return res.status(400).json({
            message: "Gagal menghapus, ID tidak ditemukan"
        })
    }
}