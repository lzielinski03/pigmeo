 'use strict';

 var chalk = require('chalk');
var mongoose = require('mongoose');
var util = require('util');

var _ = require('lodash');
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs = new Grid(mongoose.connection.db);


exports.create = function(req, res) { 

  var part = req.files.filefield;
  var writeStream = gfs.createWriteStream({
    filename: part.name,
    mode: 'w',
    content_type:part.mimetype
  });

  writeStream.on('close', function() {
    console.log('closed');
  });

  writeStream.write(part.data);
  writeStream.end();
 res.send({message: 'Success'});
};

exports.update = function(req, res) {

};

exports.delete = function(req, res) {
  
}

exports.list = function(req, res) {
  console.log('list files: ');
  gfs.files.find().toArray( function (err, files) {
/*
    files.forEach(function(value) {
       var readstream = gfs.createReadStream({
        filename : value.filename
      });
       console.log('here!');
      readstream.on('data', function(data){
        log.message(data);
      });

      readstream.on('end', function() {
        log.message('end'); 
        res.end();         
      });

      //console.log(value);
    });

    */
   

    if (err)
      throw err;
    res.json(files);
  })

};

exports.read = function(req, res) {
console.log('here');
  gfs.files.find({ filename: req.params.filename }).toArray(function (err, files) {

    if(files.length===0){
      return res.status(400).send({
        message: 'File not found 404'
      });
    }

    res.writeHead(200, {'Content-Type': files[0].contentType});

    var readstream = gfs.createReadStream({
      filename: files[0].filename
    });
 
    readstream.on('data', function(data) {
      res.write(data);
    });
    
    readstream.on('end', function() {
      res.end();        
    });
 
    readstream.on('error', function (err) {
      console.log('An error occurred!', err);
      throw err;
    });
  });
};