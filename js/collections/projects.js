// projects.js

define([
	// aliases for paths that were configured in the bootstrap main.js
	'underscore',
	'backbone',
    'models/project'
],function(_, Backbone, ProjectModel){
	var ProjectCollection = Backbone.Collection.extend({
		model: ProjectModel
	});

	return ProjectCollection;
});