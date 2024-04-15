# Reflect API client for JavaScript

Make requests to an API built using the [Reflect API](https://github.com/VictorWesterlund/reflect) framework over HTTP with JavaScript.

---

```js
import { default as Client } from "./reflect-client/Reflect.js";

const api = new Client("https://api.example.com", "myApiKey");

// GET: https://api.example.com/my/endpoint?foo=bar
api.call("my/endpoint").params({foo: bar}).get(); // Returns: Promise<Response>
```

## Supported browsers/environments:
![Chrome-icon](https://user-images.githubusercontent.com/35688133/230028928-dca1467d-8c63-4e69-9524-78e5751eaf24.png)<br>Chrome|![Firefox_logo,_2019 svg](https://user-images.githubusercontent.com/35688133/230029200-624d0126-9640-4b78-9eb5-a2e4be4e51be.png)<br>Firefox|![Safari_browser_logo svg](https://user-images.githubusercontent.com/35688133/230029381-e7162ba1-e9ef-4b34-803f-043b5d16d365.png)<br>Safari|![image](https://github.com/VictorWesterlund/reflect-client-js/assets/35688133/36ac25a9-cc69-415b-b3c8-7f328d80c16d)<br>NodeJS|![deno](https://github.com/VictorWesterlund/reflect-client-js/assets/35688133/beb98cb4-702b-45f1-a496-1aa66ef97130)<br>Deno
--|--|--|--|--
✅ 80+|✅ 75+|✅ 14.1+|✅ 20.7.0+|✅ 1.37.0+

# How to use

1. **Install with npm**

   ```
   npm i reflect-client
   ```
   
2. **Initialize the class**

   ```ts
   import { Client, Method } from "./reflect-client/Reflect.js";

   const api = new Client(base_url: string, api_key: string|null = null);
   ```

   *Example*
   ```js
   const api = new Client("https://api.example.com", "exampleApiKey");
   ```
   
## Make API requests

### Defining an endpoint

Start a new API call by chaining the `call()` method and passing it an endpoint string

```ts
Client.call(endpoint: string): ThisType<this>
```

Example:

```js
api.call("my/endpoint")
```

### (Optional) Search Parameters

Pass an object of keys and values to `params()`, and chain it anywhere before a `get()`, `patch()`, `put()`, `post()`, or `delete()` request to set search parameters for the current request.

```ts
Client.params(params: object): ThisType<this>
```

Example:

```js
// https://api.example.com/my/endpoint?key1=value1&key2=value2
api.call("my/endpoint")
  .params({
    key1: "value1",
    key2: "value2"
  });
```

### `GET` Request

Make a `GET` request by chaining `get()` at the end of a method chain. This method will return a `Response` object.

```ts
Client.get(): Promise<Response>
```

Example:

```js
api.call("my/endpoint").params({foo: "bar"}).get();
```

### `POST` Request

Make a `POST` request by chaining `post()` at the end of a method chain. This method will return a `Response` object.

Pass `post()` a stringifiable object of key, value pairs to be sent as an `application/json`-encoded request body to the endpoint.

```ts
Client.post(payload: object|null = null): Promise<Response>
```

Example:

```js
api.call("my/endpoint").params({foo: "bar"}).post({baz: "qux"});
```

### `PATCH` Request

Make a `PATCH` request by chaining `patch()` at the end of a method chain. This method will return a `Response` object.

Pass `patch()` a stringifiable object of key, value pairs to be sent as an `application/json`-encoded request body to the endpoint.

```ts
Client.patch(payload: object|null = null): Promise<Response>
```

Example:

```js
api.call("my/endpoint").params({foo: "bar"}).patch({baz: "qux"});
```

### `PUT` Request

Make a `PUT` request by chaining `put()` at the end of a method chain. This method will return a `Response` object.

Pass `put()` a stringifiable object of key, value pairs to be sent as an `application/json`-encoded request body to the endpoint.

```ts
Client.put(payload: object|null = null): Promise<Response>
```

Example:

```js
api.call("my/endpoint").params({foo: "bar"}).put({baz: "qux"});
```

### `DELETE` Request

Make a `DELETE` request by chaining `delete()` at the end of a method chain. This method will return a `Response` object.

Pass `delete()` a stringifiable object of key, value pairs to be sent as an `application/json`-encoded request body to the endpoint.

```ts
Client.delete(payload: object|null = null): Promise<Response>
```

Example:

```js
api.call("my/endpoint").params({foo: "bar"}).delete();
```


### `OPTIONS` Request

Make an `OPTIONS` request by chaining `get()` at the end of a method chain. This method will return a `Response` object.

Use this method to query Reflect for available request methods.

```ts
Client.options(): Promise<Response>
```

Example:

```js
api.call("my/endpoint").options();
```

# Development

NodeJS required version: 20.7.0+

TypeScript required version: 5.2.2+
