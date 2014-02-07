'use strict';

/**
 * @ngdoc overview
 * @name index
 * @description
 * NAP Play Admin Tool
 * - github https://github.com/erikportin/napPlayAdmin
 */

/**
 * @ngdoc object
 * @name napPlayAdminApp
 * @function
 * @requires ngCookies
 * @requires ngRoute
 * @description
 * Main app configuration
 *
 */

angular.module('napPlayAdminApp', ['ngCookies', 'ngRoute', 'd3', 'ui.bootstrap', 'pascalprecht.translate'])
	.config(function ($routeProvider, $locationProvider, AppConfig) {
		$locationProvider.html5Mode(!AppConfig.hash);
		console.log(AppConfig.lang)
		/*
        Stats Pages
      */
		$routeProvider.when('/:lang/stats/flurry/app-metrics', {
			templateUrl: 'views/stats/flurry.html',
			controller: 'FlurryAppMetricsPageCtrl'
		})

		.when('/:lang/stats/flurry/event-metrics', {
			templateUrl: 'views/stats/flurry.html',
			controller: 'FlurryEventMetricsPageCtrl'
		})

		/*
        Other pages
      */

		.when('/:lang/user-relationships/:userId', {
			templateUrl: 'views/user-relationships.html',
			controller: 'UserRelationshipsPageCtrl'
		})

		.when('/:lang/notifications', {
			templateUrl: 'views/notifications.html',
			controller: 'NotificationsPageCtrl'
		})

		.otherwise({
			redirectTo: '/' + AppConfig.lang +'/stats/flurry/app-metrics'
		});
	})

/*
    config below fixes this http bug
    http://stackoverflow.com/questions/16661032/http-get-is-not-allowed-by-access-control-allow-origin-but-ajax-is  
  */

.config(function ($httpProvider) {
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
})

/*
    translation
    http://pascalprecht.github.io/angular-translate/docs/en/#/guide
   */
.config(function ($translateProvider, AppConfig) {

	$translateProvider.useStaticFilesLoader({
		prefix: 'i18n/locale-',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage(AppConfig.prefferdLang); //dummy language bundle: munsaladialekt
	//$translateProvider.useLocalStorage(); //currently not working with static file loader
});

/*
    load third party modules
   */

angular.module('d3', []);
