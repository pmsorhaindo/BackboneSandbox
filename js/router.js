// router.js

define([
	'jquery',
	'underscore',
	'backbone',
	'views/projects/list',
	'views/users/list'
], function($, _, Backbone, ProjectListView, UserListView){
	var AppRouter = Backbone.Router.extend({
		routes:{
            'projects': 'showProjects',
			'users': 'showUsers',

			// Default
			'*actions':'defaultAction'
		}
	});

	var initialize = function(){
        var app_router = new AppRouter;
		
		app_router.on('route:showProjects',function(){
			// Call render on the module we loaded via the dependency array 'views/projects/list'
            console.log('Route: projects');
			var projectListView = new ProjectListView();
			projectListView.render();
		});

		//As abover call render on our loaded module 'views/users/list'
		app_router.on('route:showUsers',function(){
            console.log('Route: users');
			var userListView = new UserListView();
			userListView.render();
		});
        
		app_router.on('route:defaultAction', function(actions) {
			// No matching route - print URL
			console.log('No route:',actions);
		});
        
		Backbone.history.start();
	};
	return {
		initialize: initialize
	};
});