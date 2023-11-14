const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const dbConnect = require('./config/db_connect')
const cors = require('cors')
dotenv.config({path:"config.env"})
const app = express()
const chambresRoute = require('./routes/chambreRoute')
const reservaionRoute = require('./routes/reservationRoute')

const ApiError = require('./utils/ApiError')
const globaleErrors = require('./middelwares/errosMiddel')


if(process.env.NODE_ENV === "dev"){
    app.use(morgan('dev'))
}


app.use(cors("*"))
app.use(express.json())

// connect db
dbConnect();


// mount routes

app.use('/api/v1/chambres' ,chambresRoute )
app.use('/api/v1/reservation' ,reservaionRoute )

// Error handling middleware

app.all('*' , (req , res , next) => {
   next(new ApiError(`can't find this route ${req.originalUrl} ` ,404 ))
})

app.use(globaleErrors)

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on("unhandledRejection" , (err) => {
    console.error(`unhandledRejection Errros , ${err.name} | ${err.message} `)
  server.close(()=> {
    console.log('server off')
    process.exit(1)
  })
})