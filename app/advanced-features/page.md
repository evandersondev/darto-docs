# Advanced Features

Darto provides several advanced features to help you build robust applications. Here are some of the key features:

</br>

### File Upload

Darto provides support for handling file uploads. Here's an example of how to handle file uploads:

```dart
void main() {
  final app = Darto();
  final upload = Upload(join(Directory.current.path, 'uploads'));

  // Route to handle single file upload
  app.post('/upload', upload.single('file'), (Request req, Response res) {
    if (req.file != null) {
      return res.json(req.file);
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({'error': 'No file uploaded'});
    }
  });

  app.listen(3000);
}
```

<br />

### Send Email

Darto provides support for sending emails using external email services. Here's an example using the `mailer` package:

```dart
import 'package:darto/darto.dart';
import 'package:mailer/mailer.dart';
import 'package:mailer/smtp_server.dart';

void main() {
  final app = Darto();
  final mailer = DartoMailer();

  // Create a transporter instance
  final transporter = mailer.createTransport(
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    ssl: false,
    auth: {
      'username': 'your-username',
      'password': 'your-password',
    },
  );

  app.post('/send-email', (Request req, Response res) async {
    final success = await transporter.sendMail(
      from: 'your-email@gmail.com',
      to: 'destination@exemplo.com',
      subject: 'Test email by Gmail',
      html: '''
        <h1>Welcome to Darto Mailer!</h1>
        <p>This email was sended by Darto Mailer.</p>
      ''',
    );

    if (success) {
      return res.json({'message': 'Email sent with sucesso!'});
    } else {
      return res.status(500).json({'error': 'Failure to sent email'});
    }
  });

  app.listen(3000);
}
```

<br />

### File Download

Darto allows you to handle file downloads easily. Here's an example:

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

### WebSocket

Darto integrates with WebSockets to facilitate real-time communication in your applications. With WebSocket support, you can easily create interactive features like live chats, notifications, or interactive dashboards. The framework provides a simple API to handle WebSocket events:

```dart
import 'package:darto/darto.dart';

void main() {
  final app = Darto();

  // Initialize WebSocket server
  final ws = WebsocketServer();
  app.useWebSocket(ws);

  // Handle new WebSocket connections
  server.on('connection', (socket) {
    // Send event for client connected
    socket.emit('welcomeMessage', 'Echo: $message');

    // Send event for all clients connected
    socket.broadcast.emit('welcomeMessage', 'Echo: $message');

    // Listening custom events
    socket.on('receivedMessage' (data) {
      socket.broadcast.emit('sendMessage', data)
    });
  });


  // Start the HTTP and WebSocket servers
  app.listen(3000, () {
    print('HTTP server running on http://localhost:3000');
  });
}
```

<br />

### Custom headers

```dart
import 'package:darto/darto.dart';

void main() {
  final app = Darto();

  app.get('/users', (Request req, Response res) {
    // Set a custom header
    res.set('X-Custom-Header', 'CustomValue');

    return res.send();
  });
}
```

<br />

### Timeout

```dart
import 'package:darto/darto.dart';

void main() {
  final app = Darto();

  app.timeout(5000);

  app.use((Err err, Request req, Response res, NextFunction next) {
    if (!res.finished) {
      res.status(SERVICE_UNAVAILABLE).json({
        'error': 'Request timed out or internal error occurred.',
      });
    }
  });

  app.get('/delay', (Request req, Response res) {
    Future.delayed(Duration(milliseconds: 6000), () {
      if (!req.timedOut) {
        res.json({'message': 'Delayed response'});
      }
    });
  });
}
```
