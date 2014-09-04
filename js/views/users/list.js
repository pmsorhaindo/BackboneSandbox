// views/users/list.js

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/users',
    'text!templates/user/list.html'
], function ($, _, Backbone, UserCollection, userListTemplate) {
    // Multiple Users view definition
    var UserListView = Backbone.View.extend({
        el: $('#container'),
        initialize : function() {
            this.collection = new UserCollection();
            this.collection.add({ name: "Mikey" });
            
            console.log(this.collection.models);
            
            var data = {
                users: this.collection.models,
                _: _ 
            };
          
            var compiledTemplate = _.template( userListTemplate);
            this.$el.html( compiledTemplate(data) ); 
        }
    });
    return UserListView;
});