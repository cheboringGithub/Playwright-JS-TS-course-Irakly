# Модификаторы доступа

**Определение:** Модификаторы доступа — это ключевые слова в TypeScript, которые определяют уровень доступности свойств и методов класса. Они контролируют, откуда можно обращаться к элементам класса.

**Типы модификаторов доступа:**

### 1. Public (публичный)
- **Доступность:** Везде
- **По умолчанию:** Да (если не указан модификатор)
- **Использование:** Для интерфейса класса

```typescript
class User {
  public name: string; // Публичное свойство
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): string { // Публичный метод
    return `Привет, меня зовут ${this.name}`;
  }
}

const user = new User('Иван', 25);
console.log(user.name); // Доступно
console.log(user.greet()); // Доступно
```

### 2. Private (приватный)
- **Доступность:** Только внутри класса
- **Использование:** Для внутренней логики

```typescript
class BankAccount {
  private balance: number; // Приватное свойство
  public accountNumber: string;

  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (this.validateAmount(amount)) { // Вызов приватного метода
      this.balance += amount;
    }
  }

  private validateAmount(amount: number): boolean { // Приватный метод
    return amount > 0;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount('123456', 1000);
// account.balance; // Ошибка! Приватное свойство недоступно
// account.validateAmount(100); // Ошибка! Приватный метод недоступно
console.log(account.getBalance()); // Доступно
```

### 3. Protected (защищенный)
- **Доступность:** В классе и его наследниках
- **Использование:** Для семейства классов

```typescript
class Animal {
  protected name: string; // Защищенное свойство
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected makeSound(): string { // Защищенный метод
    return `${this.name} издает звук`;
  }

  private getAge(): number { // Приватный метод
    return this.age;
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  public bark(): string {
    return `${this.makeSound()} - Гав!`; // Доступ к защищенному методу
  }

  public getInfo(): string {
    return `${this.name} - ${this.breed}`; // Доступ к защищенному свойству
    // return this.getAge(); // Ошибка! Приватный метод недоступен
  }
}
```

### 4. Readonly (только для чтения)
- **Доступность:** Везде, но только для чтения
- **Использование:** Для констант и неизменяемых данных

```typescript
class User {
  public readonly id: string; // Только для чтения
  public name: string;

  constructor(id: string, name: string) {
    this.id = id; // Можно установить только в конструкторе
    this.name = name;
  }

  public updateName(newName: string): void {
    this.name = newName; // Можно изменить
    // this.id = 'new-id'; // Ошибка! Readonly свойство нельзя изменить
  }
}
```

**Применение в Page Object Pattern:**
```typescript
class LoginPage {
  private page: Page; // Приватный - только для внутреннего использования
  private usernameInput: Locator; // Приватный - инкапсуляция локаторов
  private passwordInput: Locator;
  private loginButton: Locator;
  protected baseUrl: string; // Защищенный - для наследников

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.baseUrl = 'https://example.com';
  }

  // Публичные методы - интерфейс класса
  public async login(username: string, password: string): Promise<void> {
    await this.fillCredentials(username, password);
    await this.submitForm();
  }

  // Приватные методы - внутренняя логика
  private async fillCredentials(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  private async submitForm(): Promise<void> {
    await this.loginButton.click();
  }

  // Защищенный метод - для наследников
  protected async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
```

**Лучшие практики:**
- Используйте `private` для внутренней реализации
- Применяйте `protected` для семейства классов
- Делайте `public` только необходимые элементы
- Используйте `readonly` для неизменяемых данных
- Следуйте принципу "минимальной доступности"

