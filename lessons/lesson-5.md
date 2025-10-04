---
layout: default
title: Занятие 5
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 5

## 📚 Полезные источники

### 📖 **Теоретические материалы**
- **[learn.javascript.ru - Классы](https://learn.javascript.ru/classes)** — подробное руководство по классам в JavaScript
- **[Хабр - Знакомство с ООП на примере JavaScript](https://habr.com/ru/companies/ruvds/articles/665290/)** — практическое введение в ООП с примерами

### 🔧 **TypeScript документация**
- **[scriptdev.ru - Модификаторы доступа](https://scriptdev.ru/guide/023/)** — подробное руководство по модификаторам доступа в TypeScript
- **[scriptdev.ru - Интерфейсы](https://scriptdev.ru/guide/021/)** — руководство по интерфейсам и абстрактным классам в TypeScript

---

## Тема 1: Объектно-ориентированное программирование (ООП) в JavaScript

**Вопросы для обсуждения:**
- Что такое **[класс]({{ site.baseurl }}/lessons/glossary/lesson-5/classes.md)** в JavaScript?
- Как работают **[конструкторы]({{ site.baseurl }}/lessons/glossary/lesson-5/constructors.md)** и **[методы]({{ site.baseurl }}/lessons/glossary/lesson-5/methods.md)**?
- Какие принципы ООП существуют и как их применить?
- В чем разница между **[наследованием]({{ site.baseurl }}/lessons/glossary/lesson-5/inheritance.md)** и **[композицией]({{ site.baseurl }}/lessons/glossary/lesson-5/composition.md)**?

### Основы ООП — четыре принципа

**1. Инкапсуляция** — объединение данных и методов в одном объекте
**2. Наследование** — переиспользование кода через создание иерархии классов
**3. Полиморфизм** — один интерфейс, разные реализации
**4. Абстракция** — упрощение сложных систем

### Классы в JavaScript — синтаксис и особенности

**Базовый синтаксис:**
```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Привет, меня зовут ${this.name}`;
  }
}

const user = new User('Иван', 'ivan@example.com');
console.log(user.greet()); // "Привет, меня зовут Иван"
```

**Наследование в JavaScript:**
```javascript
class Admin extends User {
  constructor(name, email, permissions) {
    super(name, email);
    this.permissions = permissions;
  }

  greet() {
    return `${super.greet()} и я администратор`;
  }
}
```

**Приватные поля (ES2022):**
```javascript
class BankAccount {
  #balance; // Приватное поле
  #accountNumber;

  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}
```

### Применение ООП в Page Object Pattern

**Базовый класс для страниц:**
```javascript
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async takeScreenshot() {
    return await this.page.screenshot();
  }
}

// Конкретная страница
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.waitForLoad();
  }
}
```

---

## Тема 2: ООП в TypeScript — расширенные возможности

**Вопросы для обсуждения:**
- Какие преимущества дает TypeScript для ООП?
- Как использовать **[модификаторы доступа]({{ site.baseurl }}/lessons/glossary/lesson-5/access-modifiers.md)** в TypeScript?
- Что такое интерфейсы и абстрактные классы?
- Как TypeScript помогает в создании более надежного кода?

### Преимущества TypeScript для ООП

**1. Строгая типизация** — предотвращение ошибок на этапе компиляции
**2. Модификаторы доступа** — контроль видимости свойств и методов
**3. Интерфейсы** — контракты для классов
**4. Абстрактные классы** — принудительная реализация методов
**5. Generics** — переиспользуемые типы

### Модификаторы доступа в TypeScript

> 📚 **Документация:** [Модификаторы доступа в TypeScript](https://scriptdev.ru/guide/023/)

**Типы модификаторов:**
- `public` — доступен везде (по умолчанию)
- `private` — доступен только внутри класса
- `protected` — доступен в классе и его наследниках
- `readonly` — только для чтения

**Пример использования:**
```typescript
class BankAccount {
  private balance: number;
  public readonly accountNumber: string;
  protected owner: string;

  constructor(accountNumber: string, owner: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public getBalance(): number {
    return this.balance;
  }

  protected validateAmount(amount: number): boolean {
    return amount > 0;
  }
}
```

### Интерфейсы и абстрактные классы

> 📚 **Документация:** [Интерфейсы в TypeScript](https://scriptdev.ru/guide/021/) | [Абстрактные классы в TypeScript](https://scriptdev.ru/guide/021/)

**Интерфейсы — контракты для классов:**
```typescript
interface Drawable {
  draw(): void;
  getArea(): number;
}

class Circle implements Drawable {
  constructor(private radius: number) {}

  draw(): void {
    console.log(`Рисуем круг радиусом ${this.radius}`);
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

**Абстрактные классы:**
```typescript
abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Абстрактный метод - должен быть реализован в наследниках
  abstract makeSound(): string;

  // Обычный метод
  introduce(): string {
    return `Меня зовут ${this.name}`;
  }
}

class Dog extends Animal {
  makeSound(): string {
    return `${this.name} лает: Гав-гав!`;
  }
}

// Использование с разными типами
const userRepo = new Repository<User>();
const productRepo = new Repository<Product>();
```

### Page Object Pattern с TypeScript

**Типизированный Page Object:**
```typescript
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

class LoginPage extends BasePage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  public async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.waitForLoad();
  }

  public async getTitle(): Promise<string> {
    return await this.page.title();
  }
}
```

### Преимущества TypeScript для тестирования

**1. Автодополнение** — IDE подсказывает доступные методы и свойства
**2. Проверка типов** — ошибки обнаруживаются на этапе компиляции
**3. Рефакторинг** — безопасное переименование и изменение структуры
**4. Документация** — типы служат документацией к коду
**5. Отладка** — более точные сообщения об ошибках

---

## Практика: Live Coding

**Решайте задачи в папке:** [Live Coding задачи урока 5](./live-coding/lesson-5/live-coding-lesson-5.md)

