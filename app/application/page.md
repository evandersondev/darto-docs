# Application

Application is the main class of the Darto framework. It is responsible for creating the server and listening for requests. It also provides methods for defining routes, middleware, and handling errors.

### `listen`

- `app.listen(int port, [Function? callback])`

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    app.listen(3000, () {
        print('🔹 Server is running at http://localhost:3000');
    });
}

```

### `use`

- `app.use(Middleware middleware)`or`use(String path, Middleware middleware`

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    app.use((Request req, Response res, Next next) {
        print('📝 Request: ${req.method} ${req.originalUrl}')
        next();
    });
}
```

### `method`

- `app.get(String path, Handler handler)`
- `app.post(String path, Handler handler)`,
- `app.put(String path, Handler handler)`
- `app.delete(String path, Handler handler)`
- `app.patch(String path, Handler handler)`
- `app.head(String path, Handler handler)`
- `app.options(String path, Handler handler)`
- `app.trace(String path, Handler handler)`

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    app.get('/', (Request req, Response res) {
        res.send('Hello World!');
    });
}
```

### `set`

- `app.set(String key, dynamic value)`

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    app.set('views', join(Directory.current.path, 'lib', 'pages'));
    app.set('view engine', 'mustache');
}
```

### `param`

- `app.param(String name)` | defines a parameter middleware. You can access the parameter value and capture it in the route handler all times the route is matched.

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    app.param('id', (req, res, next, id) {
        print('Custom param middleware for id: $id from app');
        next();
    });

    app.get('/user/:id', (req, res) {
        final id = req.params['id'];

        res.send('User ID: $id');
    });
}
```

### `route`

- `app.route(String path)` and chain route handlers

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    app.route('/user')
        .get((req, res, next) {
            res.send('GET /user');
        }).post((req, res, next) {
            res.send('POST /user');
        });
}
```

### `static`

- `app.static(String path)` | This method is used to define a static path for serving static files.

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    app.static('public');
}
```

### `timeout`

- `app.timeout(int ms)` | This method is used to define a timeout for a request.

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    app.timeout(5000);
}
```

### `useCors`

- `app.useCors()` | This method is used to define a cors for a request.

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    app.useCors(
        origin: '*',
        methods: 'GET, POST, PUT, DELETE, OPTIONS',
        headers: 'Content-Type',
    );
}
```

### `log`

- `app.log.info(String message)` | This method is used to log a message.

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    // info, error, warn, debug, access
    app.log.info('Hello World!');
}
```

### `engine`

- `app.engine(String engine, String path)` | This method is used to define a template engine.

```dart
import 'package:darto/darto.dart';

void main() {
    final app = Darto();

    app.engine('mustache', join(Directory.current.path, 'lib', 'pages'));
}
```

<br />

### `all`

The ALL method is used to handle all HTTP methods.

```dart
void main() {
  final app = Darto();

  app.all('/all', (req, res) {
    // You can access with  all methods [GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD]
    res.json({'message': 'This route should handle all HTTP methods'});
  });

  app.listen(3000);
}
```

<br />

### `param`

The PARAM method is used to define custom parameters for routes. You can capture and use custom parameters for all routes to receive the same param name.

```dart
void main() {
  final app = Darto();

  app.param('id', (req, res, next, id) {
    print('Custom param middleware for id: $id from app');
    next();
  });

  app.listen(3000);
}
```

### `useCors`

To enable CORS (Cross-Origin Resource Sharing), you can use `useCors` helper. Here's an example:

```dart
void main() {
  final app = Darto();

  app.useCors(
    origin: [
        'https://example.com',
        'https://another-domain.org'
      ]
    );

  // Allow specific methods and headers
  app.useCors(
    methods: ['GET', 'POST'],
    headers: ['Content-Type', 'Authorization'],
  );
}
```

### `baseURL`

Set a base URL for all routes.

```dart
void main() {
    final app = Darto().basePath('/api/v1');

    // Access: http://localhost:3000/api/v1/messages
    app.get('/messages', (Request req, Response res) {
        res.json({'message': 'This is a GET request'});
    });
}
```
