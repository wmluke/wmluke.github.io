/**! 
 * angular-environment v0.1.1
 * Copyright (c) 2013 Ares Project Management LLC <code@prismondemand.com>
 */
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
