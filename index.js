#!/usr/bin/env node

var leapjs      = require('leapjs');

var controller  = new leapjs.Controller();

controller.on('connect', function(data) {
	console.log(data);
  console.log("Successfully connected.");
});

controller.on('streamingStarted', function(data) {
	console.log(data);
  console.log("A Leap device has been connected.");
});

controller.on('streamingStopped', function(data) {
	console.log(data);
  console.log("A Leap device has been disconnected.");
});

controller.connect();