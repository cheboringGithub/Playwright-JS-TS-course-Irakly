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
```

### Generics в классах

**Переиспользуемые типы:**
```typescript
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    return this.items[id];
  }

  getAll(): T[] {
    return [...this.items];
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

## Тема 3: Практическое применение ООП в тестах

**Вопросы для обсуждения:**
- Как применить **[инкапсуляцию]({{ site.baseurl }}/lessons/glossary/lesson-5/encapsulation.md)** в Page Object Pattern?
- Когда использовать **[наследование]({{ site.baseurl }}/lessons/glossary/lesson-5/inheritance.md)** vs **[композицию]({{ site.baseurl }}/lessons/glossary/lesson-5/composition.md)**?
- Как реализовать **[полиморфизм]({{ site.baseurl }}/lessons/glossary/lesson-5/polymorphism.md)** в тестах?
- Какие паттерны ООП полезны для автоматизации?

### Композиция vs Наследование в тестах

**Композиция — предпочтительный подход:**
```typescript
// Компоненты страницы
class HeaderComponent {
  private page: Page;
  private logo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('.logo');
  }

  public async clickLogo(): Promise<void> {
    await this.logo.click();
  }
}

class NavigationComponent {
  private page: Page;
  private menuItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuItems = page.locator('.nav-item');
  }

  public async clickMenuItem(itemName: string): Promise<void> {
    await this.menuItems.filter({ hasText: itemName }).click();
  }
}

// Главная страница с композицией
class HomePage {
  private page: Page;
  private header: HeaderComponent;
  private navigation: NavigationComponent;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);
    this.navigation = new NavigationComponent(page);
  }

  public async navigateToHome(): Promise<void> {
    await this.header.clickLogo();
  }

  public async navigateToSection(section: string): Promise<void> {
    await this.navigation.clickMenuItem(section);
  }
}
```

**Наследование — для общих функций:**
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

  public async takeScreenshot(): Promise<Buffer> {
    return await this.page.screenshot();
  }

  public abstract getTitle(): Promise<string>;
}

// Конкретные страницы
class LoginPage extends BasePage {
  private usernameInput: Locator;
  private passwordInput: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
  }

  public async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.waitForLoad();
  }

  public async getTitle(): Promise<string> {
    return await this.page.title();
  }
}
```

### Полиморфизм в тестах

**Один интерфейс — разные реализации:**
```typescript
// Интерфейс для всех форм
interface FormComponent {
  fill(value: string): Promise<void>;
  clear(): Promise<void>;
  getValue(): Promise<string>;
}

// Реализации для разных типов полей
class TextInput implements FormComponent {
  constructor(private locator: Locator) {}

  public async fill(value: string): Promise<void> {
    await this.locator.fill(value);
  }

  public async clear(): Promise<void> {
    await this.locator.clear();
  }

  public async getValue(): Promise<string> {
    return await this.locator.inputValue();
  }
}

class SelectDropdown implements FormComponent {
  constructor(private locator: Locator) {}

  public async fill(value: string): Promise<void> {
    await this.locator.selectOption(value);
  }

  public async clear(): Promise<void> {
    await this.locator.selectOption('');
  }

  public async getValue(): Promise<string> {
    return await this.locator.inputValue();
  }
}

// Полиморфное использование
async function fillForm(components: FormComponent[], values: string[]): Promise<void> {
  for (let i = 0; i < components.length; i++) {
    await components[i].fill(values[i]); // Разные реализации
  }
}
```


---

## Практика: Live Coding

**Решайте задачи в папке:** [Live Coding задачи урока 5](./live-coding/lesson-5/live-coding-lesson-5.md)

