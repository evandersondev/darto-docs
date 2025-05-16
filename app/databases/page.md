# Databases

You can use Darto with any driver available on pub.dev, but we recommend two packages that make it easier to connect to a database.

## Dartonic

If you want data persistence, you can use the 🍷[Dartonic](https://pub.dev/packages/dartonic) package. It is a simple Query Builder for Dart inspired by Drizzle to work with databases like MySQL, PostgreSQL, SQLite.

### Dartonic Example:

```dart

final usersTable = sqliteTable('users', {
  'id': integer().primaryKey(autoIncrement: true),
  'name': text().notNull(),
  'email': text().notNull().unique(),
  'password': text().notNull(),
});

final dartonic = Dartonic("sqlite:database/database.db", schemas: [usersTable]);
final db = await dartonic.sync();

final users = await db.select().from('users');

```

## Boing Data - Data Persistent API (DPA)

🏓[Boing Data DPA](https://pub.dev/packages/boing_data_dpa) is a Dart/Flutter package inspired by Spring Data JPA, offering simplified data persistence using annotations. It supports SQLite, PostgreSQL, and MySQL databases.

> This package use generated code, so you need to run `dart run build_runner build` to generate the code.

### Boing Data DPA Example:

```dart

@Entity()
@Table(name: "users")
@Data()
class User {
  @Id()
  @GeneratedValue(strategy: GenerationType.UUID)
  late String? id;

  late String name;

  @Column(unique: true)
  late String email;

  late String password;
}

abstract class UserRepository extends DpaRepository<User, String> {}

final repository = UserRepositoryImpl();
List<User> users = await repository.findAll();

```
