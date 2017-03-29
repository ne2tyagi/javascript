"use strict";

var app = require("angular").module('MyApp');

app.service('MyService', require("./myservice"));
app.factory('MyFactory', require('./myfactory'));
app.provider('MyProvider', require('./myprovider'));
