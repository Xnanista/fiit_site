angular.module("fiitSite", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .otherwise({
                templateUrl: "../partials/default.html",
                title: 'Blúdny holanďan'
            })
            .when("/odbory", {
                templateUrl: "../partials/odbory.html",
                title: 'Prehľad odborov'
            })
            .when("/odbory/bakalar", {
                templateUrl: "../partials/odbory_odbory_bakalar_home.html",
                title: 'Bakalárske odbory'
            })
            .when("/odbory/bakalar/informatika", {
                templateUrl: "../partials/odbory_bakalar_informatika.html",
                title: 'Bakalár - Informatika'
            })
            .when("/odbory/bakalar/informacna_bezpecnost", {
                templateUrl: "../partials/odbory_bakalar_informacnabezpecnost.html",
                title: 'Bakalár - Informačná bezpečnosť'
            })
            .when("/odbory/bakalar/internetove_technologie", {
                templateUrl: "../partials/odbory_bakalar_internetovetechnologie.html",
                title: 'Bakalár - Internetove technológie'
            })
            .when("/odbory/inzinier", {
                templateUrl: "../partials/odbory_inzinier_home.html",
                title: 'Inžinier'
            })
            .when("/odbory/doktorand", {
                templateUrl: "../partials/odbory_doktorand_home.html",
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
                templateUrl: "../partials/prijatie_sutaze.html",
                title: 'Súťaže'
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
        $rootScope.$on('$routeChangeStart', function (event, current, previous) {
            if (previous && previous.hasOwnProperty('$$route')) {
                $scope.lastRoute = '#!' + previous.$$route.originalPath;
            }
        });

        $scope.vyhladaj = function () {
            var input = document.getElementById('search');
            if (input.value.length > 0) {
                var options = document.getElementById("obsah").options;
                for (i = 0; i < options.length; i++) {
                    if (options[i].value.toUpperCase().indexOf(input.value.toUpperCase()) !== -1) {
                        $location.path(options[i].id);
                    }
                }
            }
        };
    });

