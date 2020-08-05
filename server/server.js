const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const getMethod = require("./getMethod")
const postMethod = require("./postMethod")


/***middleware***/
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

// app.get("/users", getMethod)
// app.post("/test", postMethod)

app.listen(3001)

