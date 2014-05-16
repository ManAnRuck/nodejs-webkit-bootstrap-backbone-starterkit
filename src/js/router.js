
define(['views/home'],
  function(homeView) {
    var NodejsBootstrapRequirejsStarterkitRouter = Backbone.Router.extend({
      currentView: null,

      routes: {
        "": "home"
      },

      changeView: function(view) {
        if (null != this.currentView) {
          this.currentView.undelegateEvents();
        }
        this.currentView = view;
        this.currentView.render();
      },

      home: function() {
        
        
        this.changeView(new homeView());
      }
    });

    return new NodejsBootstrapRequirejsStarterkitRouter();
  });