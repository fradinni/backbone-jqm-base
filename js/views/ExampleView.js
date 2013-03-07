window.ExampleView = Backbone.View.extend({

	bindings: {
		
	},

	dsBindings: {
		"#groupList": function(view){ return groupCollection; }
	},

	initialize: function() {
		this.template = _.template(this.getTemplate("example"));
	},

	render: function() {
		if(!this.model) {
			$(this.el).html(this.template());
		} else {
			$(this.el).html(this.template(this.model.toJSON()));
		}
		this.bindDataSources();	// Bind datasources to view
		return this.bindModel();
	}
});