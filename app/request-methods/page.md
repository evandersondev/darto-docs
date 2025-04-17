# Request Methods

The Request class provides a rich interface for accessing and manipulating information from the HTTP request received in Darto. All available properties and methods are listed below:

## `uri`

- Type: `Uri`
- Description: Returns the complete URI object of the request.

## `method`

- Type: `String`
- Description: Returns the HTTP method of the request (e.g. GET, POST, etc.).

## `query`

- Type: `Map<String, String>`
- Description: Returns the query parameters of the URL as a map.

## `params`

- Type: `Map<String, String>`
- Description: Dynamic parameters defined in the routes (e.g. /users/:id).

# `body`

- Type: `Future<dynamic>`
- Description: Returns the body of the request already processed. Supports:
- `application/json`: returns a Map or List.
- `application/x-www-form-urlencoded`: returns a Map.
- `text/plain or others`: returns a String.

## `cookies`

- Type: `Map<String, String>`
- Description: Returns the request cookies as a map.

## `headers`

- Type: `DartoHeader`
- Description: Interface for reading the request headers.

## `baseUrl`

- Type: `String`
- Description: Returns the base path of the application. (Currently returns `/` by default).

## `host`

- Type: `String`
- Description: Request host, extracted from the `Host` header.

## `hostname`

- Type: `String`
- Description: Only the hostname, without the port (e.g. `localhost`).

## `originalUrl`

- Type: `String`
- Description: Original full URL of the request.

## `path`

- Type: `String`
- Description: Path of the request (e.g. `/api/users`).

## `ip`

- Type: `String`
- Description: Remote IP of the request.

## `ips`

- Type: `List<String>`
- Description: List of IPs extracted from the `x-forwarded-for` header, or just the remote IP if there is no proxy.

## `protocol`

- Type: `String`
- Description: Protocol used in the request (`http` or `https`).

## `file`

- Type: `Map<String, dynamic>?`
- Description: Information about uploaded files (used in multipart/form-data uploads).

## `timeout`

- Type: `int?`
- Description: Timeout in milliseconds defined by middlewares.

## `timedOut`

- Type: `bool`
- Description: Defines whether the request was terminated by timeout.

## `context`

- Type: `Map<String, dynamic>`
- Description: Context shared between middlewares and routes. Similar to `res.locals`.

## `session`

- Type: `Map<String, dynamic>`
- Description: Persistent session per request. Can be used by authentication middlewares or temporary storage.

## `onResponseFinished`

- Type: `void Function()?`
- Description: Callback executed when the response is finished.

🔧 Methods

## `cast<T>()`

- Returns: Stream<List<int>>
- Description: Converts the request to a stream with a specific type. Useful for raw data manipulation or streaming.
