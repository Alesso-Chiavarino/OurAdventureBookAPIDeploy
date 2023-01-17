import express from 'express'
import apiRoutes from './routes/app.routes.js'
import fileUpload from 'express-fileupload'
import cors from 'cors'
// import { dirname, resolve } from 'path'
// import { fileURLToPath } from 'url'

const app = express()

// const __dirname = dirname(fileURLToPath(import.meta.url));

// app.use(cors());

const allowCors = (fn) => async (req, res) => {

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    // another option
    // res.setHeader('Access-Control-Allow-Origin', req.header.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    return await fn(req, res)
  }
  
  const handler = (req, res) => {
    const d = new Date()
    res.end(d.toString())
  }

app.use((res, req, next) => {
    allowCors(handler)
    next()
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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