# Инкапсуляция

## 📖 Определение

Инкапсуляция — это принцип объектно-ориентированного программирования, который объединяет данные (свойства) и методы (функции) в одном объекте и скрывает внутреннюю реализацию от внешнего мира. Это обеспечивает контроль доступа к данным и защиту от неправильного использования.

---

## 🔑 Основные принципы

- **Объединение данных и методов** — свойства и функции в одном объекте
- **Сокрытие реализации** — внутренняя логика недоступна извне
- **Контроль доступа** — управление тем, что можно изменять
- **Интерфейс** — четко определенные способы взаимодействия

---

## 💻 Пример инкапсуляции

```typescript
class BankAccount {
  private balance: number; // Приватное свойство - скрыто от внешнего мира
  private accountNumber: string;

  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  // Публичные методы - интерфейс для взаимодействия
  public deposit(amount: number): boolean {
    if (this.validateAmount(amount)) {
      this.balance += amount;
      return true;
    }
    return false;
  }

  public withdraw(amount: number): boolean {
    if (this.validateAmount(amount) && this.hasSufficientFunds(amount)) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  public getBalance(): number {
    return this.balance;
  }

  // Приватные методы - внутренняя логика
  private validateAmount(amount: number): boolean {
    return amount > 0;
  }

  private hasSufficientFunds(amount: number): boolean {
    return this.balance >= amount;
  }
}

// Использование
const account = new BankAccount('123456', 1000);
account.deposit(500); // ОК - через публичный метод
// account.balance = 10000; // Ошибка! Приватное свойство недоступно
// account.validateAmount(100); // Ошибка! Приватный метод недоступен
```

---

## 🧪 Применение в Page Object Pattern

```typescript
class LoginPage {
  private page: Page; // Приватный - скрыт от внешнего мира
  private usernameInput: Locator; // Приватный - инкапсуляция локаторов
  private passwordInput: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('.error-message');
  }

  // Публичный интерфейс - что можно делать со страницей
  public async login(username: string, password: string): Promise<boolean> {
    await this.fillCredentials(username, password);
    await this.submitForm();
    return await this.isLoginSuccessful();
  }

  public async getErrorMessage(): Promise<string | null> {
    if (await this.errorMessage.isVisible()) {
      return await this.errorMessage.textContent();
    }
    return null;
  }

  // Приватные методы - внутренняя реализация
  private async fillCredentials(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  private async submitForm(): Promise<void> {
    await this.loginButton.click();
  }

  private async isLoginSuccessful(): Promise<boolean> {
    // Логика проверки успешного входа
    return !(await this.errorMessage.isVisible());
  }
}

// Использование в тесте
test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const success = await loginPage.login('user', 'password');
  expect(success).toBe(true);
  
  // Внутренние детали скрыты
  // loginPage.usernameInput - недоступно
  // loginPage.fillCredentials() - недоступно
});
```

---

## ✅ Преимущества инкапсуляции

- **Безопасность** — защита данных от неправильного использования
- **Простота использования** — четкий интерфейс
- **Легкость изменений** — можно менять внутреннюю реализацию
- **Переиспользование** — объект можно использовать в разных контекстах
- **Тестируемость** — легко тестировать через публичный интерфейс

---

## 🎯 Лучшие практики

- **Делайте приватными** все внутренние детали
- **Предоставляйте публичный интерфейс** для необходимых операций
- **Используйте методы** для изменения состояния
- **Валидируйте входные данные**
- **Документируйте публичный интерфейс**

