(function () {
    'use strict';

    angular.module('angular-environment', []).provider('environment', function () {
        var _vars = {};

        this.put = function (key, value) {
            _vars[key] = value;
            return this;
        };

        this.get = function (key) {
            return _vars[key];
        };

        this.$get = function () {
            return _vars;
        };
    });
})();
