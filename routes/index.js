var express = require("express");
var router = express.Router();

router.get('/', homepage);

function homepage(req, res){
	res.render("index");
}

router.get("/convert", convert);

function convert(req, res){
	var dollars = req.query.dollaramount;
	var convertTo = req.query.tocurrency;
	
	console.log("query was: convert " + dollars + " to " + convertTo);
	
	var conversions = { "Pounds" : 1.6, "Euro" : 1.1 };
	
	var conversionRate = conversions[convertTo];
	
	var convertedVal = conversionRate * dollars;
	
	res.render("result", {dollars:dollars, currency:convertTo, converted:convertedVal} );
}

module.exports = router;