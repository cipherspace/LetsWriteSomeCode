System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var App;
    return {
        setters:[],
        execute: function() {
            App = (function () {
                function App() {
                    this.message = 'Welcome to Aurelia!';
                }
                return App;
            }());
            exports_1("App", App);
        }
    }
});
