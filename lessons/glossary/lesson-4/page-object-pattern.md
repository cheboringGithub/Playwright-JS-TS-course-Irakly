---
layout: default
title: Page Object Pattern
---

<a href="{{ site.baseurl }}/lessons/glossary/" class="main-link-home">&#8592; К глоссарию</a>

# Page Object Pattern

**Page Object Pattern** — паттерн проектирования, который инкапсулирует логику работы с веб-страницами в отдельные классы.

## Описание

Page Object Pattern (POM) — это архитектурный паттерн, который помогает организовать код автоматизированных тестов, разделяя логику взаимодействия с веб-страницами и тестовую логику. Каждая страница представлена отдельным классом, содержащим локаторы элементов и методы для работы с ними.

## Основные принципы

### 1. Инкапсуляция
- Все элементы страницы скрыты внутри класса
- Внешний код не знает о внутренней структуре страницы
- Изменения в UI затрагивают только Page Object

### 2. Единая ответственность
- Каждый класс отвечает за одну страницу
- Методы класса выполняют конкретные действия
- Четкое разделение функциональности

### 3. Переиспользование
- Методы можно вызывать в разных тестах
- Общая логика выносится в базовые классы
- Упрощение сопровождения кода

### 4. Изоляция
- Тесты не зависят от структуры страницы
- Изменения в UI локализованы
- Легкость рефакторинга

## Структура Page Object класса

### Базовая структура
```typescript
class LoginPage {
  constructor(page: Page) {
    this.page = page;
    // Инициализация локаторов
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('.error-message');
  }

  // Методы для взаимодействия с элементами
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage.textContent();
  }

  async isErrorVisible() {
    return this.errorMessage.isVisible();
  }
}
```

### Расширенная структура с ожиданиями
```typescript
class ProductPage {
  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('.product-title');
    this.addToCartButton = page.locator('.add-to-cart');
    this.cartIcon = page.locator('.cart-icon');
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
    await this.productTitle.waitFor({ state: 'visible' });
  }

  async addProductToCart() {
    await this.addToCartButton.click();
    await this.page.waitForTimeout(1000); // Ждем обновления корзины
  }

  async getProductTitle() {
    return this.productTitle.textContent();
  }
}
```

## Применение в тестах

### Простое использование
```typescript
test('успешная авторизация', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await page.goto('/login');
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Проверки
  await expect(page).toHaveURL('/dashboard');
});
```

### Сложное использование с несколькими страницами
```typescript
test('полный сценарий покупки', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  
  // Логин
  await page.goto('/login');
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Добавление товара в корзину
  await productPage.waitForPageLoad();
  await productPage.addProductToCart();
  
  // Переход в корзину
  await cartPage.openCart();
  await expect(cartPage.getCartItemsCount()).toBe(1);
});
```

## Композиция Page Object классов

### Создание сложных страниц
```typescript
class DashboardPage {
  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.sidebar = new Sidebar(page);
    this.content = new Content(page);
  }

  async navigateToSection(sectionName: string) {
    await this.sidebar.clickSection(sectionName);
    await this.content.waitForLoad();
  }

  async getUserInfo() {
    return this.header.getUserProfile();
  }
}
```

### Базовый класс для общих элементов
```typescript
class BasePage {
  constructor(page: Page) {
    this.page = page;
    this.loadingSpinner = page.locator('.loading-spinner');
    this.errorMessage = page.locator('.error-message');
  }

  async waitForLoadingToComplete() {
    await this.loadingSpinner.waitFor({ state: 'hidden' });
  }

  async isErrorVisible() {
    return this.errorMessage.isVisible();
  }
}

class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
  }
  
  // Специфичные для логина методы
}
```

## Лучшие практики

### 1. Именование
- Используйте описательные имена для методов
- Называйте классы по имени страницы (LoginPage, ProductPage)
- Группируйте связанные элементы в отдельные методы

### 2. Структура методов
- Возвращайте значения для проверок
- Обрабатывайте ожидания и таймауты
- Разделяйте действия и проверки

### 3. Обработка ошибок
- Добавляйте проверки на существование элементов
- Используйте try-catch для критических операций
- Логируйте важные действия

### 4. Переиспользование
- Создавайте базовые классы для общих элементов
- Выносите константы (URL, селекторы) в отдельные файлы
- Используйте фабрики для создания Page Object

## Преимущества

✅ **Читаемость тестов** — тесты читаются как пользовательские сценарии
✅ **Поддерживаемость** — изменения в UI затрагивают только Page Object
✅ **Переиспользование** — методы можно использовать в разных тестах
✅ **Изоляция** — тесты не зависят от структуры страницы
✅ **Тестируемость** — Page Object можно тестировать отдельно

## Ограничения

❌ **Дополнительная сложность** — требуется создание дополнительных классов
❌ **Начальные затраты** — больше времени на первоначальную разработку
❌ **Обучение команды** — все участники должны понимать паттерн

## Связанные термины

- [Локатор](locator.md)
- [Assertion](assertion.md)
- [Fixture](fixture.md)
- [Репортер](reporter.md)

---

**См. также:** [Урок 4](../../glossary/#-урок-4-репортеры-и-page-object-pattern) | [К глоссарию](../../glossary/)
