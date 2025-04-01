# Advanced Features

Darto provides several advanced features to help you build robust applications. Here are some of the key features:

## Middleware Composition

Darto allows you to compose multiple middleware functions to handle requests in a flexible and modular way.

```dart
void main() {
  final app = Darto();

  // Middleware to log requests
  app.use((Request req, Response res, Next next) {
    print('Request: ${req.method} ${req.originalUrl}');
    next();
  });

  // Middleware to handle errors
  app.use((err, Request req, Response res, Next next) {
    print('Error: $err');
    res.status(500).send('Internal Server Error');
  });

  app.get('/', (Request req, Response res) {
    res.send('Hello, World!');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## Custom Error Handling

You can define custom error-handling middleware to catch and handle errors throughout your application.

```dart
void main() {
  final app = Darto();

  // Custom error-handling middleware
  app.use((err, Request req, Response res, Next next) {
    print('Error: $err');
    res.status(500).json({'error': 'Something went wrong!'});
  });

  app.get('/error', (Request req, Response res) {
    throw Exception('Test Error');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## Sub-Routers

You can use sub-routers to organize your routes into separate modules, making your code more modular and maintainable.

```dart
import 'package:darto/darto.dart';

Router userRouter() {
  final router = Router();

  router.get('/', (req, res) {
    res.send('User Home Page');
  });

  router.get('/:id', (req, res) {
    final id = req.params['id'];
    res.send('User ID: $id');
  });

  return router;
}

void main() {
  final app = Darto();

  // Use the sub-router for user routes
  app.use('/users', userRouter());

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## File Uploads

Darto provides support for handling file uploads. Here's an example of how to handle file uploads:

```dart
void main() {
  final app = Darto();
  final upload = Upload(join(Directory.current.path, 'uploads'));

  // Route to handle single file upload
  app.post('/upload', upload.single('file'), (Request req, Response res) {
    if (req.file != null) {
      res.json(req.file);
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({'error': 'No file uploaded'});
    }
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## Static File Serving

You can serve static files using the `static` method. This is useful for serving assets like images, CSS, and JavaScript files.

```dart
void main() {
  final app = Darto();

  // Serve static files from the "public" folder
  app.static('public');

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## Template Rendering

Darto supports server-side rendering using a template engine. You can configure the engine to render templates with dynamic data.

```dart
import 'dart:io';
import 'package:path/path.dart';
import 'package:darto/darto.dart';

void main() {
  final app = Darto();

  // Set the directory where your template files are located
  app.set('views', join(Directory.current.path, 'lib', 'pages'));
  // Specify the view engine extension (e.g., "mustache")
  app.set('view engine', 'mustache');

  app.get('/', (Request req, Response res) {
    res.render('index', {
      'title': 'Welcome to Server Side Rendering',
      'header': 'Hello from Darto!',
      'message': 'This demonstrates how to configure a template engine in Darto using Mustache.'
    });
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## Sending Emails

Darto provides support for sending emails using external email services. Here's an example using the `mailer` package:

```dart
import 'package:darto/darto.dart';
import 'package:mailer/mailer.dart';
import 'package:mailer/smtp_server.dart';

void main() {
  final app = Darto();

  app.post('/send-email', (Request req, Response res) async {
    final smtpServer = gmail('your_email@gmail.com', 'your_password');
    final message = Message()
      ..from = Address('your_email@gmail.com', 'Your Name')
      ..recipients.add('recipient@example.com')
      ..subject = 'Test Email from Darto'
      ..text = 'Hello, this is a test email sent from Darto!';

    try {
      final sendReport = await send(message, smtpServer);
      res.json({'status': 'Email sent', 'report': sendReport.toString()});
    } catch (e) {
      res.status(500).json({'error': e.toString()});
    }
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```

## File Downloads

Darto allows you to handle file downloads easily. Here's an example:

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

---

Made by evandersondev with ❤️ for Dart/Flutter developers! 🎯
