var AppRouter = Backbone.Router.extend({
	routes: {
		"": "home"
	},

	initialize: function() {
		this.firstPage = true;
	},

	home: function() {
		this.changePage(new HomeView());
	},

	changePage: function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition = 'slide';
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }
});

$(document).ready(function() {	
	var app = new AppRouter();
	Backbone.history.start();
});