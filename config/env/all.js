'use strict';

module.exports = {
	app: {
		title: 'Pigmeo',
		description: 'test video upload and store size',
		keywords: 'video'
	},
	port: process.env.PORT || 3000,
	sessionSecret: 'PIGMEO',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular/angular-messages.js',
				'public/lib/angular/angular-route.js'
			]
		},
		css: [
			'public/**/css/*.css'
		],
		js: [
			'public/**/js/*.js'
		]
	}

};