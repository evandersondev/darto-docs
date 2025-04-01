# Response Methods

Darto provides several methods to control the response sent to the client. Here are the available methods:

## `send`

Sends a response with the specified data.

```dart
void main() {
  final app = Darto();

  app.get('/send', (Request req, Response res) {
    res.send('Hello, World!');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## `json`

Sends a JSON response with the specified data.

```dart
void main() {
  final app = Darto();

  app.get('/json', (Request req, Response res) {
    res.json({'message': 'Hello, World!'});
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## `end`

Ends the response and sends it to the client.

```dart
void main() {
  final app = Darto();

  app.get('/end', (Request req, Response res) {
    res.end('Goodbye, World!');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## `status`

Sets the HTTP status code for the response.

```dart
void main() {
  final app = Darto();

  app.get('/status', (Request req, Response res) {
    res.status(200).send('OK');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## `redirect`

Redirects the client to a new URL.

```dart
void main() {
  final app = Darto();

  app.get('/redirect', (Request req, Response res) {
    res.redirect('https://example.com');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## `download`

Initiates a file download by specifying the file path and optional options.

```dart
void main() {
  final app = Darto();

  app.get('/download', (Request req, Response res) {
    res.download('path/to/file.txt', {'filename': 'custom-filename.txt'});
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## `sendFile`

Sends a file as a response.

```dart
void main() {
  final app = Darto();

  app.get('/sendfile', (Request req, Response res) {
    res.sendFile('path/to/file.txt');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## `error`

Sends an error response with the specified error message.

```dart
void main() {
  final app = Darto();

  app.get('/error', (Request req, Response res) {
    res.error('An error occurred.');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## `cookie`

Sets a cookie in the response.

```dart
void main() {
  final app = Darto();

  app.get('/setcookie', (Request req, Response res) {
    res.cookie('cookieName', 'cookieValue');
    res.send('Cookie set');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## `clearCookie`

Clears a cookie from the response.

```dart
void main() {
  final app = Darto();

  app.get('/clearcookie', (Request req, Response res) {
    res.clearCookie('cookieName');
    res.send('Cookie cleared');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## `render`

Renders a template with the specified data and sends it as a response.

```dart
void main() {
  final app = Darto();

  // Set the directory and view engine as shown in template engine documentation

  app.get('/render', (Request req, Response res) {
    res.render('template', {'data': 'Hello, World!'});
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

---
