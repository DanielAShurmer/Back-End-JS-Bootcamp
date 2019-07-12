let express = require("express");
let app = express();

app.use(function(req,res,next){
    console.log("This is some middleware for every page.")
    next();
});

app.use("/home",function(req,res,next){
    console.log("This is some middleware for the Homepage.")
    next();
});

app.get("/home",function(req,res){
    res.send("One");
});

app.post("/home",function(req,res){
    res.send("Two");
});

app.put("/home",function(req,res){
    res.send("Three");
});

app.get("/add/:numone/:numtwo",function(req,res){
    res.send("Result: " + (parseInt(req.params.numone) + parseInt(req.params.numtwo)));
});

app.route("/rerouter")
    .get(function(req,res){
        res.send("GET Method Called")
    })

    .post(function(req,res){
        res.send("POST Method Called")
    })

app.listen(8080);