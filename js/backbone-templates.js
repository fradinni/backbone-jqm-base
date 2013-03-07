///////////////////////////////////////////////////////////////////////////////
//
//
//
//
///////////////////////////////////////////////////////////////////////////////

(function(_, Backbone) {

	// Extend Backbone View prototype
	_.extend(Backbone.View.prototype, {
		getTemplate: function(name) {
			return Backbone.Templates.getTemplate(name);
		}
	});

	// Add Bacbone Templates object
	Backbone.Templates = {
		config: {
			"path": "tpl/",
			"defaultExtension": "html"
		},

		templates: {},

		loadTemplates: function(names, callback) {
			if(names.length > 0) {
				for(var index in names) {
					this.loadTemplate(names[index]);
				}
			} else {
				console.error("No templates specified...");
			}
			callback();
		},

		loadTemplate: function(name, callback) {
			var self = this;
			$.get(self.config["path"] + name + self.config["defaultExtension"], function(data) {
				self.templates[name] = data;
			});
			callback();
		},

		getTemplate: function(name) {
			if(!templates[name]) {
				loadTemplate(name);
			}
			return this.templates[name];
		}
	}

})(window._, window.Backbone);