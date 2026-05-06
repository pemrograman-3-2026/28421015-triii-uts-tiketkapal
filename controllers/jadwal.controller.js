import {prisma} from "../lib/prisma.js"

export const create = async (req,res) => {
    const body = req.body

    await prisma.jadwal.create({
        data : {
            id_kapal : body.id_kapal,
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

export const getById = async (req,res) => {
    const id_jadwal =req.body.id_jadwal
    const jadwal = await prisma.jadwal.findUnique({
        where : {
            id_jadwal: Number(id_jadwal)
        },
        include: {
            pemesanan:true
        }
    })
    if (!jadwal){
        return res.status(400).json({
            message : "data tidak ditemukan"
        })
    }
     return res.json({
        message : "berhasil mengambil data",
        data : jadwal
    })
}

export const getALL =  async (req,res) => {
    const jadwal = await prisma.jadwal.findMany({
        include: {
            pemesanan:true
        }
    })

     return res.json({
        message : "berhasil mengambil semua data",
        data : jadwal
    })
}

export const update = async (req,res) => {
    try {
        const { id_jadwal, id_kapal, asal, tujuan,  jam_berangkat, harga } = req.body

        const updateJadwal = await prisma.jadwal.update({
            where: {
                id_jadwal: Number(id_jadwal)
            },
            data: {
                id_kapal:id_kapal,
                asal:asal,
                tujuan:tujuan,
                jam_berangkat:jam_berangkat,
                harga:harga

            }, 
            include: {
                pemesanan:true
            }
        })

       return res.json({
            message: "data berhasil diperbarui",
            data: updateJadwal
        })

    } catch (error) {
        
       return res.status(400).json({
            message: "data gagal diperbarui, id tidak ditemukan "
        })
    }
}

export const destroy = async (req, res) => {
    try {
        const { id_jadwal } = req.body

        await prisma.jadwal.delete({
            where: {
                id_jadwal: Number(id_jadwal)
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