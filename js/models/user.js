// models/user.js

define([
    'underscore',
    'backbone'
], function(_, Backbone){
    // User Model definition
    var UserModel = Backbone.Model.extend({
        // Mikey as default user.
        defaults: {
        name: "Mikey"
        }
    });
    return UserModel;
});