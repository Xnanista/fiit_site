angular.module("fiitSite", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "sites/intro.html"
            })
            .when("/pk", {
                templateUrl: "sites/prijimacie_konanie.html"
            })
    });