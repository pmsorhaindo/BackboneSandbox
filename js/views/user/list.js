// view/user/list.js

define([
    "jquery",
    "underscore",
    "Backbone",
    "text!templates/user/list.html"
], function($, _, Backbone, userListTemplate){
    // Single user view definition
    var UserListView = Backbone.View.extend({
        el:$('#container'),
        render: function(){
            var data = {};
            // Compile page using underscore.js templating.
            var compiledTemplate = _.template(userListTemplate,data);
            this.$el.append(compiledTemplate);
        }
    }
        
    
}) 