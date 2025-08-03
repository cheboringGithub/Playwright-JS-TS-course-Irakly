---
layout: default
title: Занятие 3
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 3

---

## Тема 1: Архитектура фреймворка (многоуровневая)

**Вопросы для обсуждения:**
- Что такое **фреймворк для автоматизации тестирования**? Чем он отличается от фреймворка для разработки?
- Какие основные **инструменты автоматизации тестирования** популярны на рынке? В чем их особенности и различия?
- Какие существуют **критерии выбора инструмента** для автоматизации?
- Из каких **уровней (слоев)** может состоять современный тестовый фреймворк?
- Какие **паттерны проектирования** применяются на разных уровнях фреймворка? Какие паттерны используют для бизнес-логики (**PageObject**, **PageElements**, **Functional Helpers**)?

### Фреймворк тестирования vs фреймворк разработки — отличия

**Фреймворк разработки:**
- Предназначен для создания приложений
- Фокусируется на бизнес-логике и пользовательском интерфейсе
- Оптимизирован для производительности и масштабируемости
- Включает компоненты для UI, базы данных, API и т.д.

**Фреймворк тестирования:**
- Предназначен для автоматизации тестирования
- Фокусируется на проверке функциональности и качества
- Оптимизирован для надежности и читаемости тестов
- Включает компоненты для отчетности, логирования, управления данными

### Инструменты автоматизации — обзор рынка и особенности

**Популярные инструменты:**
- **Playwright** — кроссплатформенный, современный, быстрый
- **Selenium** — классический, широко поддерживаемый
- **Cypress** — для веб-приложений, удобный интерфейс
- **WebdriverIO (WDIO)** — универсальный, модульный, поддерживает множество браузеров и протоколов
- **Appium** — для мобильных приложений

### Критерии выбора инструмента тестирования

**Технические критерии:**
- Поддержка целевых платформ (Web, Mobile, Desktop)
- Производительность и скорость выполнения
- Стабильность и надежность
- Интеграция с CI/CD

**Бизнес-критерии:**
- Стоимость лицензирования и поддержки
- Доступность специалистов
- Сообщество и документация
- Время обучения команды

### Многослойная архитектура — структура и слои фреймворка

**Уровни архитектуры:**
1. **Уровень тестов** — бизнес-логика тестов
2. **Уровень страниц** — Page Objects и элементы
3. **Уровень утилит** — вспомогательные функции
4. **Уровень данных** — управление тестовыми данными
5. **Уровень конфигурации** — настройки окружения

### Page Object Pattern

**Что это такое?**
Page Object Pattern — это паттерн проектирования, который инкапсулирует элементы веб-страницы и методы для взаимодействия с ними в отдельном классе. Вместо того чтобы писать селекторы и действия прямо в тестах, мы создаем отдельный класс для каждой страницы.

**Какую проблему решает?**
- **Дублирование кода** — селекторы и действия повторяются в разных тестах
- **Хрупкость тестов** — при изменении UI нужно исправлять код во многих местах
- **Низкая читаемость** — тесты содержат много технических деталей
- **Сложность поддержки** — трудно понять, что делает тест

**Официальная документация:**
- [Playwright Page Object Model](https://playwright.dev/docs/pom)

**Пример Page Object:**

```typescript
// pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  // Элементы страницы
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    // Инициализация элементов как Locator
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Методы для взаимодействия с элементами
  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  // Бизнес-метод: полный процесс логина
  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  // Методы для проверок
  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.textContent() || '';
  }

  async isErrorMessageVisible(): Promise<boolean> {
    return await this.errorMessage.isVisible();
  }
}
```

**Использование в тесте:**

```typescript
// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Успешный логин', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  
  await expect(page).toHaveURL(/.*inventory/);
});

test('Неуспешный логин', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'wrong_password');
  
  expect(await loginPage.getErrorMessage()).toContain('Epic sadface');
});
```

**Построчный разбор кода:**

**С точки зрения программирования:**
```typescript
export class LoginPage {
  // Объявляем приватные поля типа Locator
  private readonly usernameInput: Locator;
  
  constructor(page: Page) {
    // Инициализируем элементы через page.locator()
    this.usernameInput = page.locator('#user-name');
  }
  
  async fillUsername(username: string): Promise<void> {
    // Используем методы Locator API
    await this.usernameInput.fill(username);
  }
}
```

**С точки зрения бизнес-логики:**
```typescript
// Бизнес-метод: инкапсулирует полный процесс логина
async login(username: string, password: string): Promise<void> {
  await this.fillUsername(username);  // Шаг 1: ввести логин
  await this.fillPassword(password);  // Шаг 2: ввести пароль
  await this.clickLogin();           // Шаг 3: нажать кнопку
}

// В тесте используем бизнес-метод
await loginPage.login('standard_user', 'secret_sauce');
```

**Преимущества Page Object Pattern:**

1. **Изоляция изменений** — при изменении UI исправляем только Page Object
2. **Переиспользование** — один Page Object используется в разных тестах
3. **Читаемость** — тесты описывают бизнес-логику, а не технические детали
4. **Поддерживаемость** — легко найти и исправить проблемы
5. **Тестируемость** — каждый Page Object можно тестировать отдельно







---

## Практическое задание

> **Примечание:** Все задания выполняем без создания абстракций и Page Object'ов — это будет рассмотрено в следующих занятиях.

**Создаём ветку с заданием `task-3` и автоматизируем следующие тест-кейсы для [saucedemo.com](https://www.saucedemo.com/)**

### Тест-кейс 3: Добавление товара в корзину
**Цель:** Проверить добавление товара в корзину

**Шаги:**
1. Залогиниться как `standard_user` / `secret_sauce`
2. На странице товаров нажать `Add to cart` у любого товара
3. Перейти в корзину (иконка корзины в правом верхнем углу)
4. Убедиться, что выбранный товар отображается в корзине

---

### Тест-кейс 4: Оформление заказа (checkout flow)
**Цель:** Проверить успешное оформление заказа

**Шаги:**
1. Залогиниться как `standard_user` / `secret_sauce`
2. Добавить товар в корзину
3. Перейти в корзину и нажать `Checkout`
4. Заполнить форму: First Name, Last Name, Zip/Postal Code (любые валидные значения)
5. Нажать `Continue`, затем `Finish`
6. Убедиться, что отображается сообщение "THANK YOU FOR YOUR ORDER"

---

### Тест-кейс 5: Проверка фильтрации товаров
**Цель:** Проверить сортировку товаров по цене (от меньшей к большей)

**Шаги:**
1. Залогиниться как `standard_user` / `secret_sauce`
2. На странице товаров выбрать сортировку `Price (low to high)`
3. Убедиться, что товары отсортированы по цене по возрастанию

---

**После автоматизации тест-кейсов создайте Pull request с заданием и отправьте его на ревью.**

---

## Полезные методы Playwright

- [`page.goto`](https://playwright.dev/docs/api/class-page#page-goto) — переход по URL
- [`page.fill`](https://playwright.dev/docs/api/class-page#page-fill) — ввод текста в поле
- [`page.click`](https://playwright.dev/docs/api/class-page#page-click) — клик по элементу
- [`page.locator`](https://playwright.dev/docs/api/class-page#page-locator) — поиск элементов
- [`expect`](https://playwright.dev/docs/api/class-expect) — проверки/assertions

## Пример псевдокода для Playwright (TypeScript)

```ts
import { test, expect } from '@playwright/test';

test('Добавление товара в корзину', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // логин
  await page.fill('твой селектор', 'standard_user');
  await page.fill('твой селектор', 'secret_sauce');
  await page.click('твой селектор');
  // добавить товар
  await page.click('твой селектор');
  // перейти в корзину
  await page.click('твой селектор');
  await expect(page.locator('твой селектор')).toBeVisible();
});

test('Оформление заказа (checkout flow)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // логин, добавить товар, перейти в корзину
  // ...
  // заполнить форму
  await page.fill('твой селектор', 'FirstName');
  await page.fill('твой селектор', 'LastName');
  await page.fill('твой селектор', 'ZipCode');
  await page.click('твой селектор'); // Continue
  await page.click('твой селектор'); // Finish
  await expect(page.locator('твой селектор')).toHaveText('THANK YOU FOR YOUR ORDER');
});

test('Проверка фильтрации товаров', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // логин
  await page.fill('твой селектор', 'standard_user');
  await page.fill('твой селектор', 'secret_sauce');
  await page.click('твой селектор');
  // выбрать сортировку
  await page.selectOption('твой селектор', 'lohi');
  // проверить порядок цен
  // ...
});
```