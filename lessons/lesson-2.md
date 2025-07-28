---
layout: default
title: Занятие 2
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 2

---

## Тема 1: Автоматизация тестирования: цели и ограничения

**Вопросы для обсуждения:**
- Что такое **автоматизация тестирования**?
- Какие проблемы решает *автоматизация*?
- Каковы **цели автоматизации тестирования**?
- В каких случаях автоматизация *применима*, а в каких — нет?
- Как соотносится **test automation** с **QA**, **QC** и **testing**?
- Что такое **пирамида тестирования** (*Test pyramid*) и зачем она нужна?
- Какие бывают **виды тестирования**?
- Как формируется **тестовая стратегия** в контексте автоматизации?
- Как **внедрять автоматизацию** в проект?
- Как выглядит **фигура тестирования** для *frontend* и *backend*?

---

## Тема 2: Теория локаторов CSS и XPath

**Вопросы для обсуждения:**
- Что такое **локатор** и зачем он нужен в автоматизации тестирования?
- В чем разница между **CSS-селекторами** и **XPath-селекторами**?
- Какие типы селекторов поддерживает **Playwright**? ([документация](https://www.browserstack.com/guide/playwright-selectors))
- Какие **best practices** при выборе локаторов?
- Когда лучше использовать **CSS**, а когда **XPath**? ([статья на Habr](https://habr.com/ru/companies/otus/articles/350368/))
- Как **искать элементы на странице**?

**Материал:**
- [Видео: Как искать элементы на странице (YouTube)](https://www.youtube.com/watch?v=pEXqxMWhtnU)

---

## Практическое задание

### Live Coding

[Перейти к задачам для практики (Live Coding)]({{ site.baseurl }}/lessons/live-coding/lesson-2/live-coding-lesson-2.html)

---

## Автоматизация тестовых сценариев

> **Примечание:** Все задания выполняем без создания абстракций и Page Object'ов — это будет рассмотрено в следующих занятиях.

**Создайте ветку с заданием `task-2` и в ней автоматизируйте тест-кейсы для [saucedemo.com](https://www.saucedemo.com/)**

### Тест-кейс 1: Позитивный сценарий логина
**Цель:** Проверить успешный вход с валидными данными

**Шаги:**
1. Перейдите на [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Введите логин: `standard_user`
3. Введите пароль: `secret_sauce`
4. Нажмите кнопку `Login`
5. Убедитесь, что открылась страница **Products** (отображается заголовок "Products")

---

### Тест-кейс 2: Негативный сценарий логина
**Цель:** Проверить ошибку при вводе неверных данных

**Шаги:**
1. Перейдите на [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Введите невалидный логин и/или пароль (например, `wrong_user` / `wrong_pass`)
3. Нажмите кнопку `Login`
4. Убедитесь, что появляется сообщение об ошибке (**Error message**)

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