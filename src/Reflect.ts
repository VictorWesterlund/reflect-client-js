import { Method } from "./Method.js";

// Export Method as importable directly from the Reflect.js ESM
export { Method };

// Connect to a Reflect API instance over HTTP
export default class Client {
	private url: string;
	private headers: object = {};

	constructor(url: string, key: string|null = null) {
		// Append tailing slash if omitted from URL string
		this.url = url.substring(url.length - 1) === "/" ? url : url + "/";

		// Use API key with requests if defined
		if (key) {
			this.setApiKey(key);
		}
	}

	// Set request header
	private setHeader(name, value): void {
		return this.headers[name] = value;
	}

	// Set API key to use for all requests
	private setApiKey(key: string): void {
		return this.setHeader("Authorization", `Bearer ${key}`);
	}

	// Get fully qualified URL to endpoint
	private getEndpoint(endpoint: string): string {
		// Remove leading slash if provided for pathname. It's already set on the domain name
		endpoint = endpoint.substring(0, 1) !== "/" ? endpoint : endpoint.substring(1, endpoint.length);
		
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
			this.setHeader("Content-Type", "application/json");
			options["body"] = JSON.stringify(payload);
		}

		// Fetch and return Response object
		return await fetch(this.getEndpoint(endpoint), options);
	}
}