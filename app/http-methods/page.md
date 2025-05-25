# HTTP Methods

Darto supports various HTTP methods to handle different types of requests. Here are the supported methods and examples of how to use them:

<br />

### `GET`

The GET method is used to retrieve data from the server.

```dart
void main() {
  final app = Darto();

  app.get('/', (Request req, Response res) {
    res.send('This is a GET request');
  });

  app.listen(3000);
}
```

<br />

### `POST`

The POST method is used to send data to the server.

```dart
void main() {
  final app = Darto();

  app.post('/', (Request req, Response res) async {
    final data = await req.body;

    res.send('Received data: $data');
  });

  app.listen(3000);
}
```

<br />

### `PUT`

The PUT method is used to update existing data on the server.

```dart
void main() {
  final app = Darto();

  app.put('/update/:id', (Request req, Response res) async {
    final id = req.params['id'];
    final data = await req.body;

    res.send('Updated data with ID $id: $data');
  });

  app.listen(3000);
}
```

<br />

### `DELETE`

The DELETE method is used to delete data from the server.

```dart
void main() {
  final app = Darto();

  app.delete('/delete/:id', (Request req, Response res) {
    final id = req.params['id'];

    res.send('Deleted data with ID $id');
  });

  app.listen(3000);
}
```

<br />

### `PATCH`

The PATCH method is used to apply partial modifications to data on the server.

```dart
void main() {
  final app = Darto();

  app.patch('/modify/:id', (Request req, Response res) async {
    final id = req.params['id'];
    final data = await req.body;

    res.send('Modified data with ID $id: $data');
  });

  app.listen(3000);
}
```

<br />

### `OPTIONS`

The OPTIONS method is used to describe the communication options for the target resource.

```dart
void main() {
  final app = Darto();

  app.options('/options', (Request req, Response res) {
    res.set('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    res.send('Allowed methods: GET, POST, PUT, DELETE, OPTIONS');
  });

  app.listen(3000);
}
```

<br />

### `HEAD`

The HEAD method is used to retrieve the headers for a specific resource.

```dart
void main() {
  final app = Darto();

  app.head('/headers', (Request req, Response res) {
    res.set('Custom-Header', 'HeaderValue');
    res.end();
  });

  app.listen(3000);
}
```
