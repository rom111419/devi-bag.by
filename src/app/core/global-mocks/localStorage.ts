// @ts-ignore
const mock = () => {
	let storage = {};
  return {
    // @ts-ignore
    getItem: key => key in storage ? storage[key] : null,
    // @ts-ignore
    setItem: (key, value) => storage[key] = value || '',
    // @ts-ignore
		removeItem: key => delete storage[key],
    // @ts-ignore
		clear: () => storage = {},
	};
};
Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(window, '__env', {value: {env: {backendUrlProd: 'https://api.mydarwin.com'}}});
Object.defineProperty(window, '__env', {value: {env: {backendUrlDev: 'https://stagingapi.mydarwin.com'}}});
