angular.module("fiitSite", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "sites/home.html"
            })
            .when("/pk", {
                templateUrl: "sites/intro.html"
            })
    });