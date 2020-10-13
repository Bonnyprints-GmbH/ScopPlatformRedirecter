import './page/scop-platform-redirect-list';
import './page/scop-platform-redirect-details';
import './page/scop-platform-redirect-create';
import deDE from './snippet/de-DE';
import enGB from './snippet/en-GB';

Shopware.Module.register('scop-platform-redirect', {
	type: 'plugin',
	name: 'scop-platform-redirect',
	title: 'scopplatformredirecter.general.title',
	description: 'XXX',
	color: '#2288FF',
	icon: 'small-arrow-large-double-right',
	routes: {
		list: {
			component: 'scop-platform-redirect-list',
			path: 'list'
		},
		details: {
			component: 'scop-platform-redirect-details',
			path: 'details'
		},
		create: {
			component: 'scop-platform-redirect-create',
			path: 'create'
		}
	},
	navigation: [{
		label: 'scopplatformredirecter.general.mainMenuItem',
		color: '#2288FF',
		path: 'scop.platform.redirect.list',
		icon: 'small-arrow-large-double-right',
		position: 100
	}],
	snippets: {
		'de-DE': deDE,
		'en-GB': enGB
	}
}
);