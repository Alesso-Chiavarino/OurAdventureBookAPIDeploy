import express from 'express'
import apiRoutes from './routes/app.routes.js'
import fileUpload from 'express-fileupload'
import cors from 'cors'
// import { dirname, resolve } from 'path'
// import { fileURLToPath } from 'url'

const app = express()

// const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload',
}))
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Hello World')
})

// app.use(express.static(resolve(__dirname, '../../client/build')));

export default app;