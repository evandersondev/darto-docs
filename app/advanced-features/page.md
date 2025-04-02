# Advanced Features

Darto provides several advanced features to help you build robust applications. Here are some of the key features:

## File Uploads

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

