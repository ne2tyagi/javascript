"use strict";

module.exports = function(){
	var obj = {};
	obj.message = function(){
		return "Message from factory";
	}
	return obj;
}
