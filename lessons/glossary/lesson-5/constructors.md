# Конструкторы

**Определение:** Конструктор — это специальный метод класса, который вызывается при создании нового экземпляра объекта. Конструктор инициализирует объект и устанавливает начальные значения его свойств.

**Основные особенности:**
- Вызывается автоматически при создании объекта с помощью `new`
- Может принимать параметры для инициализации свойств
- Может выполнять дополнительную логику при создании объекта
- В JavaScript может быть только один конструктор в классе

**Синтаксис в JavaScript:**
```javascript
class User {
  constructor(name, email, age = 18) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.createdAt = new Date();
  }
}

// Создание объекта с вызовом конструктора
const user = new User('Иван', 'ivan@example.com', 25);
```

**Синтаксис в TypeScript:**
```typescript
class User {
  private name: string;
  private email: string;
  private age: number;
  private createdAt: Date;

  constructor(name: string, email: string, age: number = 18) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.createdAt = new Date();
  }
}
```

**Применение в Page Object Pattern:**
```typescript
class LoginPage {
  private page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }
}
```

**Лучшие практики:**
- Используйте конструктор для инициализации обязательных свойств
- Применяйте значения по умолчанию для необязательных параметров
- Выполняйте валидацию входных данных
- Инициализируйте все необходимые локаторы в Page Object классах

