# Routing

<br />

### Route Parameters and Query Parameters 📝

You can define routes with dynamic parameters and query parameters to create flexible and powerful APIs. Here are some examples:

<br />

### Route Parameters

```dart
void main() {
  final app = Darto();

  // Example route with parameters
  app.get('/user/:id', (Request req, Response res) {
    final id = req.param['id'];

    res.send('User ID: $id');
  });

  app.listen(3000);
}
```

<br />

### Optional Parameters

```dart
void main() {
  final app = Darto();

  // Example optional params
  app.get('/author/:name?', (Request req, Response res) {
    final id = req.param['name'] ?? 'Unknown';

    res.send('User ID: $id');
  });

  app.listen(3000);
}
```

<br />

### All parameters in order of definition

```dart
void main() {
  final app = Darto();

  // Example optional params
  app.get('/author/:name?/post/:id', (Request req, Response res) {
    // You can destructure the parameters in order of definition
    final [name, id] = req.params();

    // When you use optional params before required params, you must pass a default value in url
    // http://localhost:3000/author/John/post/123
    // http://localhost:3000/author/null/post/123
    res.send('Hello, $name -  $id!');
  });

  app.listen(3000);
}
```

<br />

### Wildcard Parameters

```dart
void main() {
  final app = Darto();

  app.get('/author/*', (Request req, Response res) {
    // You can access all routes with wildcard if start with /author/
    // if necessary you can add a extra logic to check if the route is valid
    res.send('Hello World!');
  });

  app.listen(3000);
}
```

<br />

### Query Parameters

```dart
void main() {
  final app = Darto();

  // Example route with query parameters
  // http://localhost:3000/search?name=John&age=30
  app.get('/search', (Request req, Response res) {
    final name = req.query['name'];
    final age = req.query['age'];

    res.send('Name: $name, Age: $age');
  });

  app.listen(3000);
}
```

<br />

### Returning Implicit Responses

In Darto, you can return implicit responses directly from the route handler. Here's an example:

```dart
void main() {
  final app = Darto();

  app.get('/hello', (Request req, Response res) {
    return 'Hello, World!';
  });

  app.listen(3000);
}
```

<br />

### Using the Router Class

The `Router` class allows you to create modular route handlers. This can help you organize your routes better. Here's an example:

```dart
import 'package:darto/darto.dart';

Router appRouter() {
  final router = Router();

  router.get('/', (req, res) {
    res.send('Dashboard Page');
  });

  router.get('/profile', (req, res) {
    throw Exception('Error in profile route');
  });

  router.get('/events/:id/attendees', (Request req, Response res) {
    return res.send('Attendees for event ${req.param['id']}');
  });

  return router;
}

void main() {
  final app = Darto();

  // Use the router
  app.use(appRouter());

  // If you want you can add a prefix in router
  app.use('/app', appRouter());

  app.listen(3000);
}
```

In this example, the `appRouter` function creates a new `Router` instance and defines several routes. The router is then used in the main application with `app.use('/app', appRouter())`.

<br />

### Route to Redirect to an External Site

```dart
void main() {
  final app = Darto();

  app.get('/go', (Request req, Response res) {
    res.redirect('http://example.com');
  });

  app.listen(3000);
}
```

<br />

### Route to Get the Request Body

```dart
void main() {
  final app = Darto();

  app.post('/file', (Request req, Response res) async {
    final body = await req.body;

    res.send(body);
  });

  app.listen(3000);
}
```

### Routes in chained

Inspired by new version of express.js, you can chain routes. define route path, then define methods with their handlers. Syntax must be like this: `router.route(path).get(handler);`

> **Note:** Type handler must be `Function(Request req, Response res, Next next)`

```dart
router
      .route('/new')
      .all((req, res, next) {
        req.log.debug('middleware for all methods');
        next();
      })
      .get((req, res, next) {
        res.send('New route');
      })
      .post((req, res, next) {
        next(Exception('Not implemented'));
      })
      .put((req, res, next) {
        next(Exception('Not implemented'));
      });
```

<br />

### Routes with a function receiving the instance of the Darto class or Router class.

```dart
void routesWithDarto(Darto app) {
  app.get('/hello1', (req, res) {
    res.send('With Darto');
  });
}

void routesWithRouter(Router router) {
  router.get('/hello2', (req, res) {
    res.send('With Router');
  });
}

void main() {
  final app = Darto();

  app.use(routesWithDarto);
  app.use('/api', routesWithRouter);
}
```
