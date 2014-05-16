define(['text!templates/home.html'],
    function(homeTemplate) {
        var homeView = Backbone.View.extend({
            el: $('#content'),

            render: function() {
                this.$el.html(homeTemplate);
            }
        });
        return homeView;
    });