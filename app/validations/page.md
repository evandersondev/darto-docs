# Validations

You can use outher validation package but we recommend to use a simple package, 🧩 [Zard](https://pub.dev/packages/zard) is a schema validation and transformation library for Dart, inspired by the popular Zod library for JavaScript. With Zard, you can define schemas to validate and transform data easily and intuitively.

<br />

### Zard

```dart
import 'package:zard/zard.dart';

final userSchema = z.map({
    'name': z.string().min(3).nullable(),
    'age': z.int().min(1).nullable(),
});

final user = {
    'name': 'John Doe',
    'age': 30,
};

final userData = schema.parse(user); // {name: John Doe, age: 30}
```

<br />

### Zard + Darto

```dart
import 'package:darto/darto.dart';
import 'package:zard/zard.dart';

void main() {
  final app = Darto();

  app.post('/users', (Request req, Response res) async {
    final schema = z.map({
        'name': z.string().min(3).nullable(),
        'age': z.int().min(1).nullable(),
    });

    try {
        final data = await schema.parseAsync(req.body);

        return res.json(data);
    } catch (e) {
        return res.status(406).send(schema.getErrors());
    }
  });

  app.listen(3000, () {
    print('Server is running!');
  });
}
```

<br />

### (Extra Package) Zard Darto Middleware

Validation middleware for Darto using Zard. Inspired by the zod-express-middleware package from the Node.js ecosystem, bringing a similar validation experience to Dart/Flutter servers. Look a package called [zard-darto-middleware](https://pub.dev/packages/zard_darto_middleware) for more information.

```dart
app.post(
  '/users',
  validateRequestBody(z.map({
  'name': z.string().min(3),
  'email': z.string().email(),
  'age': z.int().min(18),
})),
  (Request req, Response res) {
    final body = req.$body; // Acccess validated body

    return res.json({'data': body});
  },
);
```
