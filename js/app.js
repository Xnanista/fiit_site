angular.module("fiitSite", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/odbory", {
                templateUrl: "../partials/odbory.html",
                title: 'Prehľad odborov'
            })
            .when("/odbory/bakalar", {
                templateUrl: "../partials/odbory_bakalar.html",
                title: 'Bakalárske odbory'
            })
            .when("/odbory/bakalar/informatika", {
                templateUrl: "../partials/odbory_bakalar_informatika.html",
                title: 'Bakalár - Informatika'
            })
            .when("/odbory/bakalar/infomacna_bezpecnost", {
                templateUrl: "../partials/odbory_bakalar_informacnabezpecnost.html",
                title: 'Bakalár - Informačná bezpečnosť'
            })
            .when("/odbory/bakalar/internetove_technologie", {
                templateUrl: "../partials/odbory_bakalar_internetovetechnologie.html",
                title: 'Bakalár - Internetove technológie'
            })
            .when("/odbory/inzinier", {
                templateUrl: "../partials/odbory_inzinier.html",
                title: 'Inžinier'
            })
            .when("/odbory/doktorand", {
                templateUrl: "../partials/odbory_doktorand.html",
                title: 'Doktorand'
            })
            .when("/odbory/vyskumna_orientacia", {
                templateUrl: "../partials/odbory_vyskumnaorientacia.html",
                title: 'Výskumná orientácia'
            })
            .when("/prijatie/podmienky", {
                templateUrl: "../partials/prijatie_podmienky.html",
                title: 'Podmienky prijatia'
            })
            .when("/prijatie/podmienky/sutaze", {
                templateUrl: "../partials/prijatie_sutaze.html"
            })
            .when("/prijatie/prihlaska", {
                templateUrl: "../partials/prijatie_prihlaska.html",
                title: 'Prihláška'
            })
            .when("/ubytovanieastrava", {
                templateUrl: "../partials/ubytovanie_strava.html",
                title: 'Ubytovanie a strava'
            })
            .when("/financie", {
                templateUrl: "../partials/financie.html",
                title: 'Financovanie'
            })
            .when("/dianie", {
                templateUrl: "../partials/dianie.html",
                title: 'Dianie na fakulte'
            });
        $locationProvider.hashPrefix('!');
    })
    .controller('MainCtrl', function ($scope, $rootScope, $location) {
        $scope.location = $location.path();
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $scope.location = $location.path();
            if (current.hasOwnProperty('$$route')) {
                $scope.title = current.$$route.title;
            }
        });
    });

