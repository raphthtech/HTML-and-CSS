const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const dataFile = path.join(__dirname, "data.json");

//support POSTing data with URL encoded
app.use(express.urlencoded({ extended: true }));

app.get("/poll", async(req, res) => {
    let data = JSON.parse(await fs.readFile(dataFile, "utf-8"));

    console.log(data);

    res.end();
    //res.send('Hello!');
});

app.listen(3000, ()=>console.log('Our server is running!'))
