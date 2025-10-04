# Наследование

**Определение:** Наследование — это механизм объектно-ориентированного программирования, который позволяет создавать новые классы на основе существующих, наследуя их свойства и методы. Новый класс может расширять или переопределять функциональность родительского класса.

**Основные принципы:**
- **Переиспользование кода** — избежание дублирования
- **Иерархия классов** — создание структуры "родитель-потомок"
- **Расширение функциональности** — добавление новых возможностей
- **Переопределение методов** — изменение поведения наследника

**Синтаксис в JavaScript:**
```javascript
// Базовый класс
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} издает звук`;
  }
}

// Наследующий класс
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Вызов конструктора родителя
    this.breed = breed;
  }

  // Переопределение метода
  speak() {
    return `${this.name} лает`;
  }

  // Новый метод
  fetch() {
    return `${this.name} приносит мяч`;
  }
}
```

**Синтаксис в TypeScript:**
```typescript
// Базовый класс
abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public speak(): string {
    return `${this.name} издает звук`;
  }
}

// Наследующий класс
class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  public speak(): string {
    return `${this.name} лает`;
  }

  public fetch(): string {
    return `${this.name} приносит мяч`;
  }
}
```

**Применение в Page Object Pattern:**
```typescript
// Базовый класс для всех страниц
abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async waitForLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  public abstract getTitle(): Promise<string>;
}

// Конкретная страница
class LoginPage extends BasePage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page); // Вызов конструктора родителя
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  public async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.waitForLoad(); // Использование метода родителя
  }

  public async getTitle(): Promise<string> {
    return await this.page.title();
  }
}
```

**Преимущества наследования:**
- Уменьшение дублирования кода
- Создание логической иерархии
- Легкость в поддержке и расширении
- Полиморфизм — использование объектов разных классов через общий интерфейс

**Когда использовать:**
- Когда есть общая функциональность между классами
- Когда нужно создать иерархию объектов
- Когда требуется полиморфизм
- В Page Object Pattern для общих методов страниц

