angular.module("fiitSite", ["ngRoute", 'pascalprecht.translate', 'ngSanitize'])
    .config(function ($routeProvider, $locationProvider, $translateProvider) {
        $routeProvider
            .otherwise({
                templateUrl: "../partials/default.html",
                title: 'Blúdny holanďan'
            })
            .when("/odbory", {
                templateUrl: "../partials/odbory.html",
                title: 'prehlad-odborov'
            })
            .when("/odbory/bakalar", {
                templateUrl: "../partials/odbory_bakalar_home.html",
                title: 'bak-odbory'
            })
            .when("/odbory/bakalar/informatika", {
                templateUrl: "../partials/odbory_bakalar_informatika.html",
                title: 'bak-info'
            })
            .when("/odbory/bakalar/informacna_bezpecnost", {
                templateUrl: "../partials/odbory_bakalar_informacnabezpecnost.html",
                title: 'bak-bez'
            })
            .when("/odbory/bakalar/internetove_technologie", {
                templateUrl: "../partials/odbory_bakalar_internetovetechnologie.html",
                title: 'bak-tech'
            })
            .when("/odbory/inzinier", {
                templateUrl: "../partials/odbory_inzinier_home.html",
                title: 'ing'
            })
            .when("/odbory/doktorand", {
                templateUrl: "../partials/odbory_doktorand_home.html",
                title: 'dok'
            })
            .when("/odbory/vyskumna_orientacia", {
                templateUrl: "../partials/odbory_vyskumnaorientacia.html",
                title: 'vyskum-orient'
            })
            .when("/prijatie/podmienky", {
                templateUrl: "../partials/prijatie_podmienky.html",
                title: 'podm-prij'
            })
            .when("/prijatie/podmienky/en", {
                templateUrl: "../partials/prijatie_podmienky_en.html",
                title: 'podm-prij'
            })
            .when("/prijatie/podmienky/sutaze", {
                templateUrl: "../partials/prijatie_sutaze.html",
                title: 'sutaz'
            })
            .when("/prijatie/podmienky/sutaze/en", {
                templateUrl: "../partials/prijatie_sutaze_en.html",
                title: 'sutaz'
            })
            .when("/prijatie/prihlaska", {
                templateUrl: "../partials/prijatie_prihlaska.html",
                title: 'prihlaska'
            })
            .when("/prijatie/prihlaska/en", {
                templateUrl: "../partials/prijatie_prihlaska_en.html",
                title: 'prihlaska'
            })
            .when("/ubytovanieastrava", {
                templateUrl: "../partials/ubytovanie_strava.html",
                title: 'ubytovanie'
            })
            .when("/financie", {
                templateUrl: "../partials/financie.html",
                title: 'financ'
            })
            .when("/dianie", {
                templateUrl: "../partials/dianie.html",
                title: 'dianie'
            });
        $locationProvider.hashPrefix('!');

        //translation
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        $translateProvider.useStaticFilesLoader({
            prefix: '../languages/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('sk');


    })
    .controller('MainCtrl', function ($scope, $rootScope, $location, $translate, $route, aktiveLink) {
        $scope.akt_lang = "SK";
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.hasOwnProperty('$$route')) {
                $scope.title = current.$$route.title;
            }
            $scope.akt = aktiveLink.activePage($location.path());
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

        $rootScope.$on('$translateChangeEnd', function (event, args) {
            var loc = $location.path();
            if ($scope.akt_lang === "SK") {
                if (args.language === "en" && ((loc + "/en") in $route.routes)) {
                    $scope.akt_lang = args.language.toUpperCase();
                    $location.path(loc + "/en");
                    return;
                } else {
                    $scope.akt_lang = args.language.toUpperCase();
                    return;
                }
            }
            if ($scope.akt_lang === "EN") {
                if (args.language === "sk" && (loc.indexOf("/en") !== -1)) {
                    $scope.akt_lang = args.language.toUpperCase();
                    $location.path(loc.slice(0, -2));
                } else {
                    $scope.akt_lang = args.language.toUpperCase();
                }
            }
        });

        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    }).service('aktiveLink', function () {
    var studies_routes = [
        '/',
        '/odbory',
        '/odbory/bakalar',
        '/odbory/inzinier',
        '/odbory/doktorand',
        '/odbory/vyskumna_orientacia',
        '/financie'
    ];

    var chcem_routes = [
        '/prijatie/podmienky',
        '/prijatie/podmienky/en',
        '/prijatie/prihlaska',
        '/prijatie/prihlaska/en',
        '/prijatie/podmienky/sutaze',
        '/prijatie/podmienky/sutaze/en'

    ];

    var zivot_routes = [
        '/ubytovanieastrava',
        '/ubytovanieastrava/en',
        '/dianie',
        '/dianie/en'
    ];

    this.activePage = function (path) {
        if (studies_routes.indexOf(path) > -1) {
            return 1;
        }

        if (chcem_routes.indexOf(path) > -1) {
            return 2;
        }

        if (zivot_routes.indexOf(path) > -1) {
            return 3;
        }
    }
});

