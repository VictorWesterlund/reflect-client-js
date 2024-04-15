import { Method } from "./Method.js";

export { Method };

// Connect to a Reflect API instance over HTTP
export default class Client {
	private url: URL;
	private headers: Headers;

	protected key: string|null;
	protected base_url: string;
	protected body: object|null = null;

	constructor(url: string, key: string|null = null) {
		this.key = key;
		// Append tailing slash if omitted from URL string
		this.base_url = url.substring(url.length - 1) === "/" ? url : url + "/";
	}

	// Call a Reflect API endpoint with method and optional payload
	private async http_call(method: Method): Promise<Response> {
		if (this.key) {
			this.headers.append("Authorization", `Bearer ${this.key}`);
		}

		const options = {
			method: method,
			headers: this.headers,
			body: null
		};

		
		// Send request body as JSON if set
		if (this.body) {
			options.body = JSON.stringify(this.body);
			this.headers.append("Content-Type", "application/json");
		}

		return await fetch(new Request(this.url, options));
	}

	// ----

	// Set URLSearchParams from object key value pairs
	public params(params: object): ThisType<this> {
		for (const [key, value] of Object.entries(params)) {
			this.url.searchParams.set(key, value);
		}

		return this;
	}

	public call(endpoint: string): ThisType<this> {
		// Create a new URL object using base_url for new request
		this.url = new URL(this.base_url);
		this.url.pathname = endpoint;

		// Reset request properties
		this.headers = new Headers();
		this.body =  null;

		return this;
	}

	// ----

	public async get(): Promise<Response> {
		return await this.http_call(Method.GET);
	}

	public async patch(payload: object|null = null): Promise<Response> {
		this.body = payload;
		return await this.http_call(Method.PATCH);
	}

	public async put(payload: object|null = null): Promise<Response> {
		this.body = payload;
		return await this.http_call(Method.PUT);
	}

	public async post(payload: object|null = null): Promise<Response> {
		this.body = payload;
		return await this.http_call(Method.POST);
	}

	public async delete(payload: object|null = null): Promise<Response> {
		this.body = payload;
		return await this.http_call(Method.DELETE);
	}

	public async options(): Promise<Response> {
		return await this.http_call(Method.OPTIONS);
	}
}