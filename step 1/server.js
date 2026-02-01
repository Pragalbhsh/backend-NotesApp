const express = require('express')
const app = express()
const port = 3000;

//crud - method : create - post , read - get , update - put , delete - delete.
let data = {name:"parth"};

app.get('/', (req, res) => {
    res.send(`
        <body style="background:pink;color:green;">
        <h1>data:</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">dashboard</a>
        </body>
    `);
})

app.get('/dashboard', (req, res)=>{
    res.send(`
        <body style="background:green;color:yellow;">
        <h1>dashboard</h1><a href="/">home</a>
    `);
})


app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})