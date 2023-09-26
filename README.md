# Reflect API client for JavaScript

Make requests to an API built using the [Reflect API](https://github.com/VictorWesterlund/reflect) framework over HTTP with JavaScript.

---

```js
import { Client, Method } from "./reflect-client/Reflect.js

const api = new Client("<api_url>", "<optional_api_key");
// Make an API request with Client.call() which returns a normal JavaScript Response object
api.call("my/endpoint", Method.GET); // obj<Respone>
```

## Supported browsers/environments:
![Chrome-icon](https://user-images.githubusercontent.com/35688133/230028928-dca1467d-8c63-4e69-9524-78e5751eaf24.png)<br>Chrome|![Firefox_logo,_2019 svg](https://user-images.githubusercontent.com/35688133/230029200-624d0126-9640-4b78-9eb5-a2e4be4e51be.png)<br>Firefox|![Safari_browser_logo svg](https://user-images.githubusercontent.com/35688133/230029381-e7162ba1-e9ef-4b34-803f-043b5d16d365.png)<br>Safari|![image](https://github.com/VictorWesterlund/reflect-client-js/assets/35688133/36ac25a9-cc69-415b-b3c8-7f328d80c16d)<br>NodeJS|![deno](https://github.com/VictorWesterlund/reflect-client-js/assets/35688133/beb98cb4-702b-45f1-a496-1aa66ef97130)<br>Deno
--|--|--|--|--
✅ 80+|✅ 75+|✅ 14.1+|✅ 20.7.0+|✅ 1.37.0+

## How to use

1. **Install with npm**

   ```
   npm i reflect-client
   ```
   
2. **Initialize the class**

   ```js
   import { Client, Method } from "./reflect-client/Reflect.js

   const api = new Client("<api_url>", "<optional_api_key");
   ```
   
3. **Make API request**

   Use the `call()` method to perform a request
   
   ```js
   api.call("my/endpoint", Method.GET);
   ```
   
   Argument index|Type|Required|Description
   --|--|--|--
   0|string|Yes|Fully qualified pathname and query params of the endpoint to call
   1|Method\|string|Yes|A supported [Reflect HTTP method](https://github.com/VictorWesterlund/reflect/wiki/Supported-technologies#http-request-methods) (eg. `Method.GET`) or a string represnetation of a supported method (eg. "GET")
   2|array|No|An optional indexed, associative, or multidimensional array that will be sent as the request body as `Content-Type: application/json`
   
   The `call()` function will return a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object

# Development

NodeJS required version: 20.7.0+

TypeScript required version: 5.2.2+
