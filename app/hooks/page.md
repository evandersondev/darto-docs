# Hooks

Hooks are registered with the app.addHook method seguing the hook name and the function to be executed.

<br />

### `onRequest`

The onRequest hook is executed before the request is processed. After validation.

```dart
app.addHook.onRequest((req) {
  print("onRequest: ${req.method} ${req.path}");
});
```

<br />

### `onResponse`

The onResponse hook is executed when the response is sent to the client.

```dart
app.addHook.onResponse((req, res) {
    print("onResponse: response sent for ${req.method} ${req.path}");
});
```

<br />

### `preHandler`

The preHandler hook is executed before the main handler route, but after validation.

```dart
app.addHook.preHandler((req, res) async {
    print("preHandler: processing request before handler");
});
```

<br />

### `onError`

The onError is useful if you need to some custom error logging.

```dart
app.addHook.onError((error, req, res) {
    print("onError: error occurred ${error.toString()} on ${req.path}");
});
```

<br />

### `onNotFound`

The onNotFound hook is executed when a route is not found.

```dart
app.addHook.onNotFound((Request req, Response res) {
    res.redirect('/404');
});

app.get('/404', (Request req, Response res) {
    res.status(NOT_FOUND).json({'404': 'Route not found (Auto Redirect)'});
});
```
