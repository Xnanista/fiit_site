angular.module("fiitSite", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/odbory/bakalar", {
                templateUrl: "../partials/odbory_bakalar.html"
            })
            .when("/odbory/inzinier", {
                templateUrl: "../partials/odbory_inzinier.html"
            })
            .when("/odbory/doktorand", {
                templateUrl: "../partials/odbory_doktorand.html"
            })
            .when("/prijatie/podmienky", {
                templateUrl: "../partials/prijatie_podmienky.html"
            })
            .when("/prijatie/prihlaska", {
                templateUrl: "../partials/prijatie_prihlaska.html"
            })
            .when("/ubytovanieastrava", {
                templateUrl: "../partials/ubytovanie_strava.html"
            })
            .when("/financie", {
                templateUrl: "../partials/financie.html"
            })
            .when("/vyskum", {
                templateUrl: "../partials/vyskum.html"
            })
    })
    .controller('MainCtrl', function ($scope, $rootScope, $location) {
        $scope.location = $location.path();
        $rootScope.$on('$routeChangeSuccess', function() {
            $scope.location = $location.path();
        });
    });