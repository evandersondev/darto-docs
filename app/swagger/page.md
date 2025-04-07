# Swagger UI Darto

The [Swagger UI Darto](https://pub.dev/packages/swagger_ui_darto) is a plugin developed exclusively for the Darto framework. It allows you to easily integrate a beautiful Swagger UI into your Darto application, making it simple to visualize your API documentation. This plugin is intended for use with Darto only.

### Example Usage

```dart
import 'dart:io';
import 'package:darto/darto.dart';
import 'package:path/path.dart';
import 'package:swagger_ui_darto/swagger_ui_darto.dart';

void main() {
  final app = Darto();

  // Swagger UI options configuration is optional 🌟
  final options = SwaggerUiOptions(
    title: 'My API Documentation',
    deepLink: true,
    syntaxHighlightTheme: 'monokai',
    persistAuthorization: true,
  );

  // Define the absolute path to the swagger.json file
  final swaggerJsonPath = join(Directory.current.path, 'swagger.json');

  // Mount the Swagger UI router on "/docs"
  // This will set up:
  //   - GET /docs -> Swagger UI HTML page
  //   - GET /docs/swagger.json -> Swagger JSON document
  app.use('/docs', SwaggerUi.serve(swaggerJsonPath, options: options));

  // Your API routes
  // ...

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
    print('Swagger UI available at http://localhost:3000/docs');
  });
}
```
