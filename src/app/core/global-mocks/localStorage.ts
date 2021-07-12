const mock = () => {
	let storage = {};
	return {
		getItem: key => key in storage ? storage[key] : null,
		setItem: (key, value) => storage[key] = value || '',
		removeItem: key => delete storage[key],
		clear: () => storage = {},
	};
};
Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(window, '__env', {value: {env: {backendUrlProd: 'https://api.mydarwin.com'}}});
Object.defineProperty(window, '__env', {value: {env: {backendUrlDev: 'https://stagingapi.mydarwin.com'}}});
