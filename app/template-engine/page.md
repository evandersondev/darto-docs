# Template Engine

Darto supports server-side rendering using a template engine. By default, it integrates with the Mustache template engine. You can configure the engine globally in your application as shown below:

## Configuration

First, set the directory where your template files are located and specify the view engine extension:

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

  app.listen(3000, () {
    print('HTTP server running on http://localhost:3000');
  });
}
```

## Rendering Templates

To render a template, use the `render` method. Here's an example:

```dart
void main() {
  final app = Darto();

  // Set the directory and view engine as shown above

  // Define a route to render a template (without the extension)
  app.get('/', (Request req, Response res) {
    res.render('index', {
      'title': 'Welcome to Server Side Rendering',
      'header': 'Hello from Darto!',
      'message': 'This demonstrates how to configure a template engine in Darto using Mustache.'
    });
  });

  app.listen(3000, () {
    print('HTTP server running on http://localhost:3000');
  });
}
```

Create your template file at `lib/pages/index.mustache`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>{{title}}</title>
  </head>
  <body>
    <h1>{{header}}</h1>
    <p>{{message}}</p>
  </body>
</html>
```

## Example

Here's a complete example that demonstrates how to set up and use the Mustache template engine in a Darto application:

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

  // Define a route to render a template (without the extension)
  app.get('/', (Request req, Response res) {
    res.render('index', {
      'title': 'Welcome to Server Side Rendering',
      'header': 'Hello from Darto!',
      'message': 'This demonstrates how to configure a template engine in Darto using Mustache.'
    });
  });

  app.listen(3000, () {
    print('HTTP server running on http://localhost:3000');
  });
}
```

And the `lib/pages/index.mustache` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>{{title}}</title>
  </head>
  <body>
    <h1>{{header}}</h1>
    <p>{{message}}</p>
  </body>
</html>
```

---
