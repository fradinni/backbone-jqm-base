///////////////////////////////////////////////////////////////////////////////
//
//
//
//
///////////////////////////////////////////////////////////////////////////////

(function(_, Backbone) {

	// Extend Backbone View prototype
	_.extend(Backbone.View.prototype, {
		getTemplate: function(name, callback) {},
		loadTemplate: function(name, callback) {}
	});

	Backbone.Templates = {
		config: {
			"path": "tpl/"
		},
		templates: {},
		loadTemplates: function(names) {

		},
		loadTemplate: function(name) {

		},
		getTemplate: function(name) {

		}
	}

})(window._, window.Backbone);