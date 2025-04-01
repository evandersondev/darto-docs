# Getting Started

## Installation 📦

Para instalar o Darto, execute o seguinte comando:

```bash
dart pub add darto
```

ou

Adicione o pacote ao seu arquivo `pubspec.yaml`:

```yaml
dependencies:
  darto: ^0.0.15
```

Em seguida, execute o seguinte comando:

```bash
flutter pub get
```

## Basic Usage 🚀

Aqui está um exemplo básico de como usar o Darto para criar uma aplicação web simples:

```dart
import 'package:darto/darto.dart';

void main() {
  final app = Darto();

  // Exemplo de rota
  app.get('/ping', (Request req, Response res) {
    res.send('pong');
  });

  app.listen(3000, () {
    print('Server running on http://localhost:3000');
  });
}
```
