# Middleware

Darto supports different types of middleware to handle various tasks throughout the request-response lifecycle.

## Global Middleware

Global middlewares are applied to all incoming requests. You can register a global middleware using the `use` method.

```dart
void main() {
  final app = Darto();

  // Global middleware to log incoming requests
  app.use((Request req, Response res, Next next) {
    print('📝 Request: ${req.method} ${req.originalUrl}');
    next();
  });

  app.listen(3000, () {
    print('🔹 Server is running at http://localhost:3000');
  });
}
```

## Route-Specific Middleware

Route-specific middlewares are applied to specific routes. You can pass a middleware as an optional parameter when defining a route.

```dart
void main() {
  final app = Darto();

  // Middleware specific to a route
  app.use('/task/:id', (Request req, Response res, Next next) {
    print('Request Type: ${req.method}');
    next();
  });

  app.get('/task/:id', (Request req, Response res) {
    final id = req.params['id'];
    res.send({'task': id});
  });

  // Create a middleware function
  logMiddleware(Request req, Response res, Next next) {
    print('Request Type: ${req.method}');
    next();
  };

  // Example route with middleware
  app.get('/user/:id', logMiddleware, (Request req, Response res) {
    final id = req.params['id'];
    res.send({'user': id});
  });

  app.listen(3000, () {
    print('🔹 Server is running at http://localhost:3000');
  });
}
```

## Error Handling Middleware

Error-handling middleware is defined by adding an extra parameter to the middleware function to capture errors. Here's an example:

```dart
void main() {
  final app = Darto();

  app.use((Err err, Request req, Response res, Next next) {
    print('Error: $err');
    res.status(500).send('Internal Server Error');
  });

  app.get('/error', (Request req, Response res) {
    throw Exception('Test Error');
  });

  app.listen(3000, () {
    print('🔹 Server is running at http://localhost:3000');
  });
}
```

<br />
<br />

> **Note**: You can define a variable like a middleware and then use it in the route.

```dart
// Create a middleware function
  Middleware logMiddleware = (Request req, Response res, Next next) {
    print('Request Type: ${req.method}');
    next();
  };
```
