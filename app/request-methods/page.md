# Request Methods

The Request class provides a rich interface for accessing and manipulating information from the HTTP request received in Darto. All available properties and methods are listed below:

<br />

### `uri`

- Type: `Uri`
- Description: Returns the complete URI object of the request.

<br />

### `method`

- Type: `String`
- Description: Returns the HTTP method of the request (e.g. GET, POST, etc.).

<br />

### `query`

- Type: `Map<String, String>`
- Description: Returns the query parameters of the URL as a map.

<br />

### `params`

- Type: `Map<String, String>`
- Description: Dynamic parameters defined in the routes (e.g. /users/:id).

<br />

### `body`

- Type: `Future<dynamic>`
- Description: Returns the body of the request already processed. Supports:
- `application/json`: returns a Map or List.
- `application/x-www-form-urlencoded`: returns a Map.
- `text/plain or others`: returns a String.

<br />

### `cookies`

- Type: `Map<String, String>`
- Description: Returns the request cookies as a map.

<br />

### `headers`

- Type: `DartoHeader`
- Description: Interface for reading the request headers.

<br />

### `baseUrl`

- Type: `String`
- Description: Returns the base path of the application. (Currently returns `/` by default).

<br />

### `host`

- Type: `String`
- Description: Request host, extracted from the `Host` header.

<br />

### `hostname`

- Type: `String`
- Description: Only the hostname, without the port (e.g. `localhost`).

<br />

### `originalUrl`

- Type: `String`
- Description: Original full URL of the request.

<br />

### `path`

- Type: `String`
- Description: Path of the request (e.g. `/api/users`).

<br />

### `ip`

- Type: `String`
- Description: Remote IP of the request.

<br />

### `ips`

- Type: `List<String>`
- Description: List of IPs extracted from the `x-forwarded-for` header, or just the remote IP if there is no proxy.

<br />

### `protocol`

- Type: `String`
- Description: Protocol used in the request (`http` or `https`).

<br />

### `file`

- Type: `Map<String, dynamic>?`
- Description: Information about uploaded files (used in multipart/form-data uploads).

<br />

### `timeout`

- Type: `int?`
- Description: Timeout in milliseconds defined by middlewares.

<br />

### `timedOut`

- Type: `bool`
- Description: Defines whether the request was terminated by timeout.

<br />

### `context`

- Type: `Map<String, dynamic>`
- Description: Context shared between middlewares and routes. Similar to `res.locals`.

<br />

### `session`

- Type: `Map<String, dynamic>`
- Description: Persistent session per request. Can be used by authentication middlewares or temporary storage.

<br />

### `onResponseFinished`

- Type: `void Function()?`
- Description: Callback executed when the response is finished.

<br />

### `cast<T>()`

- Returns: Stream<List<int>>
- Description: Converts the request to a stream with a specific type. Useful for raw data manipulation or streaming.

<br />

### `bodyParse<T>(T Function(dynamic) parser)`

- Returns: Future<T>
- Description: Converts the request body to a specific type using a parser function.

example:

```dart
app.post('/parsed', (Request req, Response res) async {
    final tweet = await req.bodyParse((body) => Tweet.fromMap(body));

    res.send(tweet.text);
  });
```

<br />

### `blob()`

- Returns: Future<Uint8List>
- Description: Returns the request body as a `Uint8List`.

<br />

### `arrayBuffer()`

- Returns: Future<ByteBuffer>
- Description: Returns the request body as a `ByteBuffer`.

<br />

### `formData()`

- Returns: formData
- Description: Get the form data from the request.
