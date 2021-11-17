var mongoose=require('mongoose');

var productDB = new mongoose.Schema({
	category:String,
	catid:Number,
	product:String,
	prid:Number,
	id:Number
});

module.exports = mongoose.model(
	'material', productDB, 'material');
