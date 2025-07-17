# Response Methods

Darto provides several methods to control the response sent to the client. Here are the available methods:

<br />

### `send`

Sends a response with the specified data.

```dart
void main() {
  final app = Darto();

  app.get('/send', (Request req, Response res) {
    res.send('Hello, World!');
  });

  app.listen(3000);
}
```

<br />

### `json`

Sends a JSON response with the specified data.

```dart
void main() {
  final app = Darto();

  app.get('/json', (Request req, Response res) {
    res.json({'message': 'Hello, World!'});
  });

  app.listen(3000);
}
```

<br />

### `end`

Ends the response and sends it to the client.

```dart
void main() {
  final app = Darto();

  app.get('/end', (Request req, Response res) {
    res.end('Goodbye, World!');
  });

  app.listen(3000);
}
```

<br />

### `status`

Sets the HTTP status code for the response.

```dart
void main() {
  final app = Darto();

  app.get('/status', (Request req, Response res) {
    res.status(200).send('OK');
  });

  app.listen(3000);
}
```

<br />

### `redirect`

Redirects the client to a new URL.

```dart
void main() {
  final app = Darto();

  app.get('/redirect', (Request req, Response res) {
    res.redirect('https://example.com');
  });

  app.listen(3000);
}
```

<br />

### `download`

Initiates a file download by specifying the file path and optional options.

```dart
void main() {
  final app = Darto();

  app.get('/download', (Request req, Response res) {
    res.download('path/to/file.txt', {'filename': 'custom-filename.txt'});
  });

  app.listen(3000);
}
```

<br />

### `sendFile`

Sends a file as a response.

```dart
void main() {
  final app = Darto();

  app.get('/sendfile', (Request req, Response res) {
    res.sendFile('path/to/file.txt');
  });

  app.listen(3000);
}
```

<br />

### `error`

Sends an error response with the specified error message.

```dart
void main() {
  final app = Darto();

  app.get('/error', (Request req, Response res) {
    res.error('An error occurred.');
  });

  app.listen(3000);
}
```

<br />

### `cookie`

Sets a cookie in the response.

```dart
void main() {
  final app = Darto();

  app.get('/setcookie', (Request req, Response res) {
    res.cookie('cookieName', 'cookieValue');
    res.send('Cookie set');
  });

  app.listen(3000);
}
```

<br />

### `clearCookie`

Clears a cookie from the response.

```dart
void main() {
  final app = Darto();

  app.get('/clearcookie', (Request req, Response res) {
    res.clearCookie('cookieName');
    res.send('Cookie cleared');
  });

  app.listen(3000);
}
```

<br />

### `render`

Renders a template with the specified data and sends it as a response.

```dart
void main() {
  final app = Darto();

  // Set the directory and view engine as shown in template engine documentation
  // ...

  app.get('/render', (Request req, Response res) {
    res.render('template', {'data': 'Hello, World!'});
  });

  app.listen(3000);
}
```

<br />

### `set`

You can use this method to set a header customization or change a header type

```dart
void main() {
  final app = Darto();

  app.get('/html', (Request req, Response res) {
    res.set('Content-Type', 'text/html');
    res.send('<h1>Hello custom header</h1>');
  });

  app.listen(3000);
}
```

<br />

### `type`

Sets the Content-Type header based on a known MIME type or file extension.
This method is a shorthand for set('Content-Type', value) and automatically maps file extensions like 'json', 'html', 'png' to their corresponding MIME types.

```dart
void main() {
  final app = Darto();

  app.get('/html', (Request req, Response res) {
    res.type('html').send('<h1>Hello HTML</h1>');
  });

  app.get('/json', (Request req, Response res) {
    res.type('json').send('{"message":"Hello JSON"}');
  });

  app.listen(3000);
}
```

<br />

### `pipe`

Pipes a stream (such as a file or another request) directly into the response.
This is useful for streaming large files, proxies, or data chunks without loading them entirely into memory.

```dart
import 'dart:io';

void main() {
  final app = Darto();

  app.get('/video', (Request req, Response res) {
    final fileStream = File('video.mp4').openRead();
    res.set('Content-Type', 'video/mp4');
    res.pipe(fileStream);
  });

  app.listen(3000);
}
```

<br />

### `notFound`

New method: res.notFound() - Sends a 404 response.

```dart
import 'dart:io';

void main() {
  final app = Darto();

  app.get('/hello', (Request req, Response res) {
    return res.notFound();
  });

  app.listen(3000);
}
```

<br />

### `text`

Sends a plain text response.

```dart
import 'dart:io';

void main() {
  final app = Darto();

  app.get('/hello', (Request req, Response res) {
    return res.text('Hello, World!');
  });

  app.listen(3000);
}
```

<br />

### `html`

Sends a plain text/html response.

```dart
import 'dart:io';

void main() {
  final app = Darto();

  app.get('/hello', (Request req, Response res) {
    return res.html('<h1>Hello, World!</h1>');
  });

  app.listen(3000);
}
```

<br />

### `setRender`

Set a global template for render method.

```dart
import 'dart:io';

void main() {
  final app = Darto();

  app.engine('mustache', join(Directory.current.path, 'lib', 'pages'));

  app.use((Request req, Response res, NextFunction next) {
    res.setRender((content) {
      return res.html('''
        <html>
          <head>
            <title>My layout</title>
          </head>
          <body>
            <h1>My Template Layout</h1>
            $content
          </body>
        </html>
        ''');
    });

    next();
  });

  app.get('/', (Request req, Response res) {
    res.render('index', {
      'title': 'Welcome',
      'header': 'Hello',
      'message': 'This is a sample mustache template rendered with Darto.',
    });
  });

  app.listen(3000);
}
```

<br />

### `Gzip Compression`

Darto supports optional Gzip compression for responses like `sendFile()` and `json()` when the client supports it (`Accept-Encoding: gzip`).
If gzip is enabled, Darto will compress the response on the fly to improve performance over the network — especially for large files or JSON data.
You can enable or disable gzip at the framework or response level (depending on your config system).

```dart
void main() {
  final app = Darto(gzip: true); // enables gzip globally

  app.get('/data', (Request req, Response res) {
    res.json({'message': 'This response may be gzipped'});
  });

  app.get('/file', (Request req, Response res) {
    res.sendFile('static/large.txt'); // will be sent with gzip if supported
  });

  app.listen(3000);
}
```

By default, Darto will:

- Check if the client supports gzip via the Accept-Encoding header.
- Compress responses only if gzip is enabled in the framework config.
- Skip gzip for already compressed files (e.g., .zip, .gz, .png).
