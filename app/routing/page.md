# Routing

## Route Parameters and Query Parameters 📝

You can define routes with dynamic parameters and query parameters to create flexible and powerful APIs. Here are some examples:

### Route Parameters

```dart
void main() {
  final app = Darto();

  // Example route with parameters
  app.get('/user/:id', (Request req, Response res) {
    final id = req.params['id'];

    res.send('User ID: $id');
  });

  app.listen(3000);
}
```

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

## Returning Implicit Responses

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

## Using the Router Class

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
    return res.send('Attendees for event ${req.params['id']}');
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

### Route to Get the Request Body

```dart
void main() {
  final app = Darto();

  app.post('/file', (Request req, Response res) async {
    final body = await req.body; // use jsonDecode to received json

    res.send(body);
  });

  app.listen(3000);
}
```
