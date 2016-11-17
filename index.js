var express = require("express"),
    app = express();
    
app.use("/", express.static(__dirname+"/public"));
app.use("/", express.static(__dirname+"/public/images"));

app.set("port", process.env.PORT || 3000);
app.set("views",__dirname+"/views")
app.set("view engine", "jade")

app.get("/", function(req,res) {
    res.render("pages/index")
})

app.listen(app.get("port"), function(){
    console.log("app is running on "+ app.get("port"))
})