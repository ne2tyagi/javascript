"use strict";

module.exports = function(){
	var title = "No Title";
	this.setTitle = function(newTitle){
		title = newTitle;
	}
	this.$get = function(){
		return {
			message: function(){
				return "Message from provider. " + title;
			}
		};
	}
}
