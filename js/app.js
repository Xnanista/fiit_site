angular.module("fiitSite", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/odbory", {
                templateUrl: "../partials/odbory.html"
            })
            .when("/odbory/bakalar", {
                templateUrl: "../partials/odbory_bakalar.html"
            })
            .when("/odbory/bakalar/informatika", {
                templateUrl: "../partials/odbory_bakalar_informatika.html"
            })
            .when("/odbory/bakalar/infomacna_bezpecnost", {
                templateUrl: "../partials/odbory_bakalar_informacnabezpecnost.html"
            })
            .when("/odbory/bakalar/internetove_technologie", {
                templateUrl: "../partials/odbory_bakalar_internetovetechnologie.html"
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