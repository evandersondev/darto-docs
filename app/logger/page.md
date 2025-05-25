# Logger

Darto provides a built-in logger that can be used to log messages to the console. To use the `log` helper to access methods, `info`, `warn`, `debug`, `access`, and `error`.

<br />

### Default Logger

Active logger by default to see the logs. like this:

```shell
[17:22:30.275] (INFO): Server listening at 0.0.0.0:8080
```

```dart
void main() {
    final app = Darto(logger: true);

    app.listen(3000);
}
```

<br />

### Custom Logger

```dart
final app = Darto();

app.log.info("Hello World");
```

```shell
[17:22:30.275] (INFO): Hello World
```

<br />

### Request and Response

The `log` helper can be used to log request and response information.

```dart
app.get('/', (Request req, Response res) {
    req.log.debug("Request received");
    res.send("Hello World");
}
```

```shell
[17:22:30.275] (DEBUG): Request received
```
