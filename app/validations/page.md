# Validations

You can use outher validation package but we recommend to use a simple package, 🧩 [Zard](https://pub.dev/packages/zard) is a schema validation and transformation library for Dart, inspired by the popular Zod library for JavaScript. With Zard, you can define schemas to validate and transform data easily and intuitively.

### Zard Example

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
### Zard + Darto Example

```dart
import 'package:darto/darto.dart';
import 'package:zard/zard.dart';

void main() {
  final app = Darto();

  app.post('/users', (Request req, Response res) async {
    final userSchema = z.map({
        'name': z.string().min(3).nullable(),
        'age': z.int().min(1).nullable(),
    });

    try {
        final body = jsonDecode(await req.body);
        final userData = schema.parse(body);
        
        return res.json(userData);
    } catch (e) {
        return res.status(406).send(userSchema.getErrors());
    }
  });

  app.listen(3000, () {
    print('Server is running!');
  });
}
```