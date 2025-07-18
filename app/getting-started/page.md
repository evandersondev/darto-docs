# Getting Started

<br />

### Installation 📦

To install Darto, run the following command:

```bash
dart pub add darto
```

or

Add the package to your `pubspec.yaml` file:

```yaml
dependencies:
  darto: ^0.0.27
```

Then, run the following command:

```bash
flutter pub get
```

<br />

### Basic Usage 🚀

Here is a basic example of how to use Darto to create a simple web application:

```dart
import 'package:darto/darto.dart';

void main() {
  final app = Darto();

  // Example route
  app.get('/ping', (Request req, Response res) {
    res.send('pong');
  });

  app.listen(3000);

  // You can add a callback function
  /*
  app.listen(3000, () {
    print('Server is running!');
  });
  */
}
```
