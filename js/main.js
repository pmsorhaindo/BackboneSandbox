require.config({
    urlArgs: 'cb=' + Math.random(),
	paths:{
		jquery: 'libs/jquery/jquery-1.11.1',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
        specs: '../specs/'
	}
})

require([
	// Loading the module app and passing it to the defition function.
	'app',
], function(App){
	App.initialize();
});