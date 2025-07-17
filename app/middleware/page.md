# Middleware

Darto supports different types of middleware to handle various tasks throughout the request-response lifecycle.

<br />

### Global Middleware

Global middlewares are applied to all incoming requests. You can register a global middleware using the `use` method.

> **Note:** NextFunction type can be receive a Exception parameter optional like this:<br/>`void Function([Exception error])`.

```dart
void main() {
  final app = Darto();

  // Global middleware to log incoming requests
  app.use((Request req, Response res, NextFunction next) {
    print('📝 Request: ${req.method} ${req.originalUrl}');
    next();
  });

  app.listen(3000, () {
    print('🔹 Server is running at http://localhost:3000');
  });
}
```

<br />

### Route-Specific Middleware

Route-specific middlewares are applied to specific routes. You can pass a middleware as an optional parameter when defining a route.

```dart
void main() {
  final app = Darto();

  // Middleware specific to a route
  app.use('/task/:id', (Request req, Response res, NextFunction next) {
    print('Request Type: ${req.method}');
    next();
  });

  app.get('/task/:id', (Request req, Response res) {
    final id = req.params['id'];
    res.send({'task': id});
  });

  // Create a middleware function
  logMiddleware(Request req, Response res, NextFunction next) {
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

<br />

### Middleware for router context

Middleware can be applied to a router context, allowing you to apply middleware to all routes within that router. Here's an example:

```dart
Router blogRouter() {
  final router = Router();

  // Can be accessed without authentication
  router.get('/public', (Request req, Response res) {
    res.send('Public Blog');
  });

  // Apply authentication middleware to all routes above this line
  app.use(authMiddleware);

  // Can be only accessed with authentication
  router.get('/', (Request req, Response res) {
    res.send('Blog Homepage');
  });

  router.get('/:id', (Request req, Response res) {
    final id = req.params['id'];

    res.send({'blog': id});
  });
}
```

<br />

### Error Handling Middleware

Error-handling middleware is defined by adding an extra parameter to the middleware function to capture errors. Here's an example:

```dart
void main() {
  final app = Darto();

  app.use((Err err, Request req, Response res, NextFunction next) {
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

> **Note**: You can define a variable like a middleware and then use it in the route.

```dart
// Create a middleware function
  Middleware logMiddleware = (Request req, Response res, NextFunction next) {
    print('Request Type: ${req.method}');
    next();
  };
```

or typed with a `Hanlder` type to define a return type.

```dart
Handler loggerMiddleware(Request req, Response res, NextFunction next) {
  req.log.info('Request received');
  next();
}
```
