import {prisma} from "../lib/prisma.js"

export const create = async (req,res) => {
    const body = req.body

    await prisma.kapal.create({
        data : {
            nama_kapal : body.nama_kapal,
            kapasitas : body.kapasitas
             }
    }

    )


    return res.json ({
        message : "kapal berhasil terdaftar"
    })

}

export const getById = async (req,res) => {
    const id_kapal =req.body.id_kapal
    const kapal = await prisma.kapal.findUnique({
        where : {
            id_kapal: Number(id_kapal)
        }
    })
    if (!kapal){
        return res.status(400).json({
            message : "data tidak ditemukan"
        })
    }
     return res.json({
        message : "berhasil mengambil data",
        data : kapal
    })
}

export const getALL =  async (req,res) => {
    const kapal = await prisma.kapal.findMany({
    })

     return res.json({
        message : "berhasil mengambil semua data",
        data : kapal
    })
}

export const update = async (req,res) => {
    try {
        const { id_kapal, nama_kapal, kapasitas } = req.body

        const updateKapal = await prisma.kapal.update({
            where: {
                id_kapal: Number(id_kapal)
            },
            data: {
                nama_kapal: nama_kapal,
                kapasitas: kapasitas
            }
        })

       return res.json({
            message: "data berhasil diperbarui",
            data: updateKapal
        })

    } catch (error) {
        
       return res.status(400).json({
            message: "data gagal diperbarui, id tidak ditemukan "
        })
    }
}

export const destroy = async (req, res) => {
    try {
        const { id_kapal } = req.body

        await prisma.kapal.delete({
            where: {
                id_kapal: Number(id_kapal)
            }
        })

        return res.json({
            message: "Data kapal berhasil dihapus"
        })
    } catch (error) {
        return res.status(400).json({
            message: "Gagal menghapus, ID tidak ditemukan"
        })
    }
}