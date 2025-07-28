---
layout: default
title: Занятие 2
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 2

---

## Практическое задание

> **Примечание:** Все задания выполняем без создания абстракций и Page Object'ов — это будет рассмотрено в следующих занятиях.

**Создаём ветку с заданием `task-2` и в ней автоматизируем тест-кейсы для [saucedemo.com](https://www.saucedemo.com/)**

### Тест-кейс 1: Позитивный сценарий логина
**Цель:** Проверить успешный вход с валидными данными

**Шаги:**
1. Перейти на [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Ввести логин: `standard_user`
3. Ввести пароль: `secret_sauce`
4. Нажать кнопку `Login`
5. Убедиться, что открылась страница Products (отображается заголовок "Products")

---

### Тест-кейс 2: Негативный сценарий логина
**Цель:** Проверить ошибку при вводе неверных данных

**Шаги:**
1. Перейти на [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Ввести невалидный логин и/или пароль (например, `wrong_user` / `wrong_pass`)
3. Нажать кнопку `Login`
4. Убедиться, что появляется сообщение об ошибке (Error message)

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

test('Позитивный сценарий логина', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('твой селектор', 'standard_user');
  await page.fill('твой селектор', 'secret_sauce');
  await page.click('твой селектор');
  await expect(page.locator('твой селектор')).toHaveText('Products');
});

test('Негативный сценарий логина', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('твой селектор', 'wrong_user');
  await page.fill('твой селектор', 'wrong_pass');
  await page.click('твой селектор');
  await expect(page.locator('твой селектор')).toBeVisible();
});
```