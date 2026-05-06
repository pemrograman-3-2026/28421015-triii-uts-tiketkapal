import {prisma} from "../lib/prisma.js"

export const create = async (req,res) => {
    const body = req.body

    await prisma.penumpang.create({
        data : {
            username : body.username,
            email : body.email,
            no_hp : body.no_hp

        }
    }

    )


    return res.json ({
        message : "penumpang berhasil terdaftar"
    })

}

export const getById = async (req,res) => {
    const id =req.body.id
    const penumpang = await prisma.penumpang.findUnique({
        where : {
            id: Number(id)
        },
        include: {
            pemesanan:true
        }
    })
    if (!penumpang){
        return res.status(400).json({
            message : "data tidak ditemukan"
        })
    }
     return res.json({
        message : "berhasil mengambil data",
        data : penumpang
    })
}

export const getALL =  async (req,res) => {
    const penumpang = await prisma.penumpang.findMany({
        include: {
            pemesanan:true
        }
    })

     return res.json({
        message : "berhasil mengambil semua data",
        data : penumpang
    })
}

export const update = async (req,res) => {
    try {
        const { id, username, no_hp, email } = req.body

        const updatePenumpang = await prisma.penumpang.update({
            where: {
                id: Number(id)
            },
            data: {
                username: username,
                no_hp: no_hp,
                email: email
            }, 
            include: {
                pemesanan:true
            }
        })

       return res.json({
            message: "data berhasil diperbarui",
            data: updatePenumpang
        })

    } catch (error) {
        
       return res.status(400).json({
            message: "data gagal diperbarui, id tidak ditemukan "
        })
    }
}

export const destroy = async (req, res) => {
    try {
        const { id } = req.body

        await prisma.penumpang.delete({
            where: {
                id: Number(id)
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