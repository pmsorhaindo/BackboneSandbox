// view/project/list.js

define([
	// aliases for paths that were configured in the bootstrap main.js
	'jquery',
	'underscore',
	'backbone',
	//using require's text plugin
	'text!templates/project/list.html'
], function ($, _, Backbone, projectListTemplate) {
    // Single project view definiton
	var ProjectListView = Backbone.View.extend({
		el: $('#container'),
		render: function() {

			var data = {};
			var compiledTemplate = _.template(projectListTemplate, data);
			// append compiled template to the view's "el"
			this.$el.append(compiledTemplate);
		}
	});
	
	return ProjectListView;
});