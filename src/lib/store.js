import { writable, readable } from 'svelte/store';

export const socials = readable({
	twitter: 'https://twitter.com/BTCMapDotOrg',
	discord: 'https://discord.gg/wPqva83uzq',
	github: 'https://github.com/teambtcmap'
});

export const apps = readable({
	fdroid: 'https://f-droid.org/en/packages/org.btcmap/',
	direct: 'https://github.com/teambtcmap/btcmap-android/releases/latest',
	web: '/map',
	play: 'https://play.google.com/store/apps/details?id=org.btcmap.app',
	ios: 'https://apps.apple.com/app/btc-world-map/id6443604345'
});

export const elements = writable([]);
export const mapUpdates = writable(false);
export const elementError = writable('');
export const mapLoading = writable('Loading map...');

export const users = writable([]);
export const userError = writable('');

export const events = writable([]);
export const eventError = writable('');

export const syncStatus = writable();
