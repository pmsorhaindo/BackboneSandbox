// app.js

define([
	// aliases for paths that were configured in the bootstrap main.js
	'jquery',
	'underscore',
	'backbone',
	'router'
],function($, _, Backbone, Router){
	
	var initialize = function(){
		Router.initialize();
	}
	
	return{
		initialize: initialize
	};
});