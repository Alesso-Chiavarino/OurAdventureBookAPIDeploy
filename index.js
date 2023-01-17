import { PORT } from './src/config.js'
import app from './src/app.js'
import { connectDb } from './src/db.js'

connectDb();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));