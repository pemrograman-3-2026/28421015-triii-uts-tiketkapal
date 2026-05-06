import {prisma} from "../lib/prisma.js"

export const create = async (req,res) => {
    const body = req.body

    await prisma.pemesanan.create({
        data : {
            id_penumpang : body.id_penumpang,
            id_jadwal : body.id_jadwal,
            jumlah_tiket : body.jumlah_tiket,
            total_bayar : body.total_bayar,
            status : body.status
             }
    }

    )


    return res.json ({
        message : "pemesanan berhasil"
    })

}

export const getById = async (req,res) => {
    const id_pemesanan =req.body.id_pemesanan
    const pemesanan = await prisma.pemesanan.findUnique({
        where : {
            id_pemesanan: Number(id_pemesanan)
        },
        include: {
            penumpang:true,
            jadwal:true,
            tiket:true
        }
    })
    if (!pemesanan){
        return res.status(400).json({
            message : "data tidak ditemukan"
        })
    }
     return res.json({
        message : "berhasil mengambil data",
        data : pemesanan
    })
}

export const getALL =  async (req,res) => {
    const pemesanan = await prisma.pemesanan.findMany({
        include: {
            penumpang:true,
            jadwal:true,
            tiket:true
        }
    })

     return res.json({
        message : "berhasil mengambil semua data",
        data : pemesanan
    })
}

export const update = async (req,res) => {
    try {
        const { id_pemesanan, id_penumpang, id_jadwal, jumlah_tiket, total_bayar, status, } = req.body

        const updatePemesanan = await prisma.pemesanan.update({
            where: {
                id_pemesanan: Number(id_pemesanan)
            },
            data: {
                id_penumpang:id_penumpang,
                id_jadwal:id_jadwal,
                jumlah_tiket:jumlah_tiket,
                total_bayar:total_bayar,
                status:status,
            }, 
            include: {
                penumpang:true,
                jadwal:true,
                tiket:true

            }
        })

       return res.json({
            message: "data berhasil diperbarui",
            data: updatePemesanan
        })

    } catch (error) {
        
       return res.status(400).json({
            message: "data gagal diperbarui, id tidak ditemukan "
        })
    }
}

export const destroy = async (req, res) => {
    try {
        const { id_pemesanan } = req.body

        await prisma.pemesanan.delete({
            where: {
                id_pemesanan: Number(id_pemesanan)
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