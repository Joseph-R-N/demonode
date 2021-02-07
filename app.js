const express = require('express');
const teams = process.env.TEAM_NAME||'DevOps Learning';

const app = express();

app.set('view engine', 'ejs');


app.get("/", (req,res)=>{
   
    res.render("pages/index", {
        team: teams
    });
})

app.listen(3000);