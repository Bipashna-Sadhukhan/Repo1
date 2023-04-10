const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello, My name is Bipashna Sadhukhan and I am a student of MCKV Institute of Engineering')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
