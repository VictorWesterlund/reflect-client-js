import { Method } from "./Method.js";

// Export Method as importable directly from the Reflect.js ESM
export { Method };

// Connect to a Reflect API instance over HTTP
export default class Client {
	private url: string;
	private headers: object = {};

	constructor(url: string, key: string|null = null) {
		this.url = url;

		// Use API key with requests if defined
		if (key) {
			this.setApiKey(key);
		}
	}

	// Set API key to use for all requests
	private setApiKey(key: string): void {
		this.headers["Authorization"] = `Bearer ${key}`;
	}

	// Get fully qualified URL to endpoint
	private getEndpoint(endpoint: string): string {
		return this.url + endpoint;
	}

	// Call a Reflect API endpoint with method and optional payload
	public async call(endpoint: string, method: Method, payload: any = null): Promise<Response> {
		const options: object = {
			method: Method[method],
			headers: this.headers
		}

		// JSON stringify and append body to request if provided and is not a GET request
		if (payload && method !== Method.GET) {
			options["body"] = JSON.stringify(payload);
		}

		// Fetch and return Response object
		return await fetch(this.getEndpoint(endpoint), options);
	}
}