# angular-environment
> Environment variables for AngularJS

`angular-environment` provides `environmentProvider` and `environment`.

* Use `environmentProvider` within config blocks to put and get environment variables.
* Use `environment` within controllers and services to get environment variables.

## Installation

```javascript
/**
 * Create an environment module somewhere: generated at build-time or generated at run-time by the server.
 */
angular.module('demo-app-environment', ['angular-environment'])
    .config(['environmentProvider', function (environmentProvider) {
        environmentProvider.put('foo', 'bar');
        environmentProvider.put('aaa', '111');
    }]);

/**
 * Include the environment module in your app module
 */
angular.module('angular-environment-demo-app', ['angular-environment', 'demo-app-environment'])
    .config(['$routeProvider', 'environmentProvider', function ($routeProvider, environmentProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        // Use env vars within config blocks
        console.log(environmentProvider.get('foo'));
    }]);
```

## Usage

```javascript
angular.module('angular-environment-demo-app').controller('MainCtrl', ['$scope', 'environment', function ($scope, environment) {
    $scope.show = true;

    $scope.environment = environment;
}]);
```

### API

See https://github.com/AresProjectManagement/angular-environment/blob/master/test/spec/angular-environment-spec.js

### Sample App

See https://github.com/AresProjectManagement/angular-environment/tree/master/app.

## Contributing

### Prerequisites

The project requires [Bower](http://bower.io), [Grunt](http://gruntjs.com), and [PhantomJS](http://phantomjs.org).  Once you have installed them, you can build, test, and run the project.

### Build & Test

To build and run tests, run either...

```bash
$ make install
```

or

```bash
$ npm install
$ bower install
$ grunt build
```

### Demo & Develop

To run a live demo or do some hackery, run...

```bash
$ grunt server
```
