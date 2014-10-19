#!/usr/bin/env node

var gpx_path = process.argv[2];

var fs = require('fs');
var GPXstream = require('gpx-stream');
var distance = require('gps-distance');

var points = new GPXstream();
var source = fs.createReadStream(gpx_path);
var path = [];

source.pipe(points);

points.on('readable', function() {
  var point;
  while(point = points.read()) { path.push([point.lat, point.lon]); }
});

points.on('end', function() {
	  console.log('Distance travelled: ' + distance(path) + ' km');
});
