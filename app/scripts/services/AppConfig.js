'use strict';

angular.module('napPlayAdminApp')
	.constant('AppConfig', {
		hash: '#', //toggle html5 url mode, # is off, '' is on 
		lang: 'en',
		prefferdLang: 'en',
		langs: ['en', 'munsaladialekt'],

		/*
			DEBUG Styling
		*/
		debugHeading: 'font-weight: bold; padding: 2px 5px; line-height: 2em;'

	});
