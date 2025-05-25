# Static Files

### Serving Static Files

To serve static files, you can use the `static` method. This allows you to serve files like HTML, CSS, JavaScript, images, and more from a specified directory. Here's an example:

```dart
void main() {
  final app = Darto();

  // Serve static files from the "public" folder
  app.static('public');

  app.listen(3000);
}
```

In this example, any files placed in the `public` directory can be accessed through the browser. For instance, if you have a file `index.html` in the `public` directory, you can access it via `http://localhost:3000/public/index.html`.

<br />

## Examples

### Sending Files as Response

You can also send files as a response to specific routes using the `sendFile` method. Here's an example:

```dart
void main() {
  final app = Darto();

  app.get('/download', (Request req, Response res) {
    res.sendFile('public/file.txt');
  });

  app.listen(3000);
}
```

In this example, when a GET request is made to `/download`, the server will respond by sending the `file.txt` file located in the `public` directory.

<br />

### Serving an Image

```dart
void main() {
  final app = Darto();

  app.get('/image', (Request req, Response res) {
    res.sendFile('public/image.png');
  });

  app.listen(3000);
}
```
