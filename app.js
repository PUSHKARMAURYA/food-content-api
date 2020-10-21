var express = require('express');
var app = express();
var path=require("path");
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
var mongoose=require("mongoose");
	
console.log(process.env.password);
var url="mongodb://pushkar:"+process.env.password+"@"+process.env.db+"-shard-00-00.xkgjn.mongodb.net:27017,"+process.env.db+"-shard-00-01.xkgjn.mongodb.net:27017,"+process.env.db+"-shard-00-02.xkgjn.mongodb.net:27017/test?ssl=true&replicaSet=hello-shard-0&authSource=admin&retryWrites=true&w=majority";
var resu;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
	;
  var dbo = db.db("hello");
	resu= dbo.collection("food");
	

});
app.get("/",function(req,res){
	
	res.render("index.ejs");
})

app.get("/api",function(req,res){
	resu.find({}).toArray(function(err,call){
			res.json(call);
	})

})
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
app.get("/api/item/:id",function(req,res){
	 const regex = new RegExp(escapeRegex(req.params.id), 'gi');
	 resu.find({Category:regex}).toArray(function(err, result) {
    if (err) throw err;
 res.json(result);
	  
    
  });
	
})
app.get("/api/desc/:id",function(req,res){
	 const regex = new RegExp(escapeRegex(req.params.id), 'gi');
	 resu.find({Description:regex}).toArray(function(err, result) {
    if (err) throw err;
	
 res.json(result);
	  
    
  });
	
})


var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('App listening on port ' + port + '!');
});
