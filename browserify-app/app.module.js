"use strict";

var app = require("angular").module("MyApp",[]);
require('./services');
require('./controllers');

app.config(function(MyProviderProvider){
	MyProviderProvider.setTitle("NewTitleFromConfigBlock");
});
