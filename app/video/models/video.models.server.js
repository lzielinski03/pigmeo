'use strict';

var mongoose = require('mongoose');

var mongooseSchema = mongoose.model('Video', {
	titulo : {type : String, trim : true},
	fecha : {type : Date, default : Date.now}
})

/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gridSchema = new Schema({}, { strict: false });

var Grid = mongoose.model("Video", gridSchema, "fs.files" );

Grid.find({}, function (err, gridfiles) {

	if (err) throw err;
	console.log(gridfiles);

});
*/

