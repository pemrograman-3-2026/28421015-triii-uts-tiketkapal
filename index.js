import express from 'express'
import PenumpangRoute from './routes/penumpang.route.js'
import KapalRoute from './routes/kapal.route.js'
import jadwalRoute from './routes/jadwal.route.js'
import PemesananRoute from './routes/pemesanan.route.js'
import TiketRoute from './routes/tiket.route.js'
import UserRoute from './routes/user.route.js'
import path from 'path'
import cors from 'cors'

const app = express()
app.use(express.json())

const imagePath = express.static(path.join(process.cwd(), 'uploads'))
app.use('/image', imagePath)
app.use(cors())

app.get('/', (req, res) => {
    res.send("Helloworld!")
})

app.use('/penumpang', PenumpangRoute)
app.use('/kapal', KapalRoute)
app.use('/jadwal', jadwalRoute)
app.use('/pemesanan', PemesananRoute)
app.use('/tiket', TiketRoute)
app.use('/user', UserRoute)

app.listen(3000, () => {
    console.log('server started')
})