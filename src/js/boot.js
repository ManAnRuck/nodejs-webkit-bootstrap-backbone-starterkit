requirejs.config({
	paths: {
		Bootstrap: 'libs/bootstrap',
		jQuery: 'libs/jquery',
		Underscore: 'libs/underscore',
		Backbone: 'libs/backbone',
		text: 'libs/text',
		templates: '../templates'
	},

	shim: {
		'Bootstrap' : ['jQuery'],
		'Backbone': ['Underscore', 'jQuery', 'Bootstrap'],
		'Spraper': ['Backbone']
	}
});

requirejs(['NodejsBootstrapRequirejsStarterkit'], function(NodejsBootstrapRequirejsStarterkit) {
	NodejsBootstrapRequirejsStarterkit.initialize();
});