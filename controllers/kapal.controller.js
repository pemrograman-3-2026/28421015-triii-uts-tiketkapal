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

export const getALLKapal = async (req, res) => {
    const data = await prisma.kapal.findMany()

    res.json(data)
}


export const getKapalById = async (req, res) => {

    const id_kapal = req.params.id

    const data = await prisma.kapal.findUnique({
        where : {
            id_kapal : Number(id_kapal)
        }
    })

res.json(data)

}

export const updateKapal = async (req, res) => {
    const id_kapal = Number(req.params.id)

    await prisma.id_kapal.update({
        where: {
            id_kapal : id_kapal
        },
        data: req.body
    })

    res.json({
        message: 'Data was updated successfully'
    })
}


export const deleteKapal = async (req, res) => {
    const id_kapal = Number(req.params.id)

    await prisma.kapal.delete({
        where:{
           id_kapal : id_kapal
        }
    })

    res.json({
        message: 'data was deleted'
    })
}

