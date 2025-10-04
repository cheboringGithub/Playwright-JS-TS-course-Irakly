# Методы

## 📖 Определение

Метод — это функция, которая принадлежит классу и определяет поведение объектов этого класса. Методы инкапсулируют логику работы с данными объекта и предоставляют интерфейс для взаимодействия с ним.

---

## 🔑 Основные типы методов

- **Публичные** — доступны извне класса
- **Приватные** — доступны только внутри класса
- **Защищенные** — доступны в классе и его наследниках
- **Статические** — принадлежат классу, а не экземпляру

---

## 💻 Синтаксис в JavaScript
```javascript
class Calculator {
  // Публичный метод
  add(a, b) {
    return a + b;
  }

  // Приватный метод (ES2022)
  #validateNumber(num) {
    return typeof num === 'number' && !isNaN(num);
  }

  // Статический метод
  static getVersion() {
    return '1.0.0';
  }
}
```

**Синтаксис в TypeScript:**
```typescript
class Calculator {
  // Публичный метод
  public add(a: number, b: number): number {
    return a + b;
  }

  // Приватный метод
  private validateNumber(num: number): boolean {
    return typeof num === 'number' && !isNaN(num);
  }

  // Защищенный метод
  protected logOperation(operation: string): void {
    console.log(`Выполнена операция: ${operation}`);
  }

  // Статический метод
  public static getVersion(): string {
    return '1.0.0';
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

  // Публичный метод для входа
  public async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }

  // Приватные методы для внутренней логики
  private async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  private async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  private async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }
}
```

**Лучшие практики:**
- Разбивайте сложные операции на простые методы
- Используйте приватные методы для внутренней логики
- Делайте методы читаемыми и понятными
- Применяйте типизацию в TypeScript
- Следуйте принципу единственной ответственности

