// models/project.js

define([
	// aliases for paths that were configured in the bootstrap main.js
	'underscore',
	'backbone'
],function(_, Backbone){
    // Project model definition
	var ProjectModel = Backbone.Model.extend({
        // Masters project as default
		defaults: {
			name: "Master's Project"
		}
	});
	return ProjectModel;
});