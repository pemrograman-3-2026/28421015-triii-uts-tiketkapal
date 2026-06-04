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

export const getALLPenumpang = async (req, res) => {
    const data = await prisma.penumpang.findMany()

    res.json(data)
}


export const getPenumpangById = async (req, res) => {

    const id = req.params.id

    const data = await prisma.penumpang.findUnique({
        where : {
            id: Number(id)
        }
    })

res.json(data)

}

export const updatePenumpang = async (req, res) => {
    const id = Number(req.params.id)

    await prisma.penumpang.update({
        where: {
            id: id
        },
        data: req.body
    })

    res.json({
        message: 'Data was updated successfully'
    })
}


export const deletePenumpang = async (req, res) => {
    const id = Number(req.params.id)

    await prisma.penumpang.delete({
        where:{
           id: id
        }
    })

    res.json({
        message: 'data was deleted'
    })
}

