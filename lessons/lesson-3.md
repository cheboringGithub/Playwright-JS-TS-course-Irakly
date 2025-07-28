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

---

## Тема 2: Логгеры и репортеры

**Вопросы для обсуждения:**
- Что такое **репортер**? Для чего он нужен в автоматизации?
- Какие **репортеры** доступны в Playwright и как их подключить?
- Как создать **кастомный репортер** и зачем это может понадобиться?

**Рекомендуемые материалы:**
- [Документация Playwright по репортерам](https://playwright.dev/docs/test-reporters)

---

## Тема 3: Фикстуры (Fixtures)

**Вопросы для обсуждения:**
- Для чего нужны **фикстуры** в автоматизации тестирования?
- Какие задачи решают фикстуры на практике?
- Как работать с фикстурами в Playwright?

**Рекомендуемые материалы:**
- [Документация Playwright по фикстурам](https://playwright.dev/docs/test-fixtures)

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