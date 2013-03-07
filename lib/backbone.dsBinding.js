///////////////////////////////////////////////////////////////////////////////
//
// Written by Nicolas FRADIN
// Date: 2013/03/07
//
///////////////////////////////////////////////////////////////////////////////

(function(_, Backbone) {

	_.extend(Backbone.View.prototype, {

		bindDataSources: function(bindings) {
			console.log("Bind datasources...");
			var self = this;
			// Bindings can be defined three different ways. It can be
            // defined on the view as an object or function under the key
            // 'bindings', or as an object passed to bindModel.
            bindings = bindings || _.result(this, 'dsBindings');

            // Skip if no bindings can be found or if the view has no model.
            if (!bindings || !this.model)
                return;

            // Create the private bindings map if it doesn't exist.
            this._dsBindings = this._dsBindings || {};

            // Iterate on each binding
            _.each(bindings, function(attribute, binding) {
				var DOMElement = $(binding);
            	var DataSource =  typeof(attribute) == "function" ? attribute(this) : attribute

            	$(binding).on('change', function() {
            		console.log("DOMElement '"+binding+"' has changed...");
            	})

            	DataSource.bind("add remove update reset", function() {
            		console.log("DataSource has changed...");
            	});
            }, this);
		}

	});

})(window._, window.Backbone);