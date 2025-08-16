---
layout: default
title: Занятие 4
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 4

---

## Тема 1: Репортеры

**Вопросы для обсуждения:**
- Что такое **[репортер]({{ site.baseurl }}/lessons/glossary/lesson-4/reporter.md)**? Для чего он нужен в автоматизации?
- Какие **репортеры** доступны в Playwright и как их подключить?
- Как создать **кастомный репортер** и зачем это может понадобиться?

### Репортеры — назначение и типы

**Назначение репортеров:**
- Генерация отчетов о выполнении тестов
- Анализ результатов и статистики
- Интеграция с системами мониторинга
- Предоставление информации для принятия решений

**Типы репортеров:**
- **HTML** — интерактивные отчеты с детализацией
- **JSON** — структурированные данные для анализа
- **JUnit** — совместимость с CI/CD системами
- **Allure** — расширенные возможности отчетности

### Встроенные репортеры Playwright — подключение и настройка

**Настройка в playwright.config.ts:**
```typescript
export default defineConfig({
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results.json' }],
    ['junit', { outputFile: 'test-results.xml' }]
  ],
});
```

**Популярные репортеры:**
- `html` — интерактивный HTML отчет
- `json` — JSON формат для анализа
- `junit` — XML формат для CI/CD
- `list` — простой текстовый вывод
- `dot` — минималистичный вывод

### Кастомные репортеры — создание и применение

**Создание кастомного репортера:**
```typescript
class CustomReporter implements Reporter {
  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting test run with ${suite.allTests().length} tests`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Test ${test.title} finished with status: ${result.status}`);
  }
}
```

**Применение кастомного репортера:**
```typescript
export default defineConfig({
  reporter: [
    ['html'],
    ['./custom-reporter.ts']
  ],
});
```



**Рекомендуемые материалы:**
- [Документация Playwright по репортерам](https://playwright.dev/docs/test-reporters)

---

## Тема 2: Методы объектов и массивов

**Изучаемые концепции:**
- **Методы массивов** — map, filter, reduce, forEach
- **Перебираемые объекты** — for...of циклы
- **[Map и Set]({{ site.baseurl }}/lessons/glossary/lesson-4/map-set.md)** — коллекции данных
- **Object.keys/values/entries** — работа с объектами
- **[Деструктуризация]({{ site.baseurl }}/lessons/glossary/lesson-4/destructuring.md)** — извлечение данных
- **Rest/Spread операторы** — параметры и расширение
- **Рекурсия** — функции и стек
- **Замыкания** — области видимости
- **Стрелочные функции** — современный синтаксис
- **var (устарело)** — проблемы и решения

**Вопросы для обсуждения:**
- Как работают методы массивов map, filter, reduce?
- В чем разница между for...in и for...of?
- Когда использовать **[Map/Set]({{ site.baseurl }}/lessons/glossary/lesson-4/map-set.md)** вместо обычных объектов/массивов?
- Как **[деструктуризация]({{ site.baseurl }}/lessons/glossary/lesson-4/destructuring.md)** упрощает работу с данными?
- Какие преимущества у стрелочных функций?

**Материал:**
- [MDN: Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Object methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

## Глоссарий

Для изучения терминов и концепций используйте [глоссарий курса]({{ site.baseurl }}/lessons/glossary/).

### Ключевые термины урока 4:
- **[Репортер]({{ site.baseurl }}/lessons/glossary/lesson-4/reporter.md)** — компонент для генерации отчетов о тестах
- **[Page Object Pattern]({{ site.baseurl }}/lessons/glossary/lesson-4/page-object-pattern.md)** — паттерн для организации кода тестов
- **[Hoisting]({{ site.baseurl }}/lessons/glossary/lesson-4/hoisting.md)** — механизм JavaScript для поднятия объявлений
- **[Map/Set]({{ site.baseurl }}/lessons/glossary/lesson-4/map-set.md)** — коллекции данных JavaScript
- **[Деструктуризация]({{ site.baseurl }}/lessons/glossary/lesson-4/destructuring.md)** — извлечение данных из объектов и массивов

### Дополнительные термины (будут добавлены в глоссарий):
- **Rest/Spread операторы** — параметры и расширение
- **Рекурсия** — функции, вызывающие сами себя
- **Замыкания** — функции с доступом к внешней области видимости
- **Стрелочные функции** — современный синтаксис функций

### Полный список терминов:
См. [глоссарий по урокам]({{ site.baseurl }}/lessons/glossary/) для доступа ко всем терминам курса.

---

## Практика: Live Coding

**Решайте задачи в папке:** [Live Coding задачи урока 4]({{ site.baseurl }}/lessons/live-coding/lesson-4/live-coding-lesson-4.md)



## Практическое задание

**Создаём ветку с заданием `task-4`:**

### Задача 1: Page Object Pattern
**Реализовать абстракции для тестов из урока 3, применяя Page Object Pattern.**

**Требования:**
1. **Создать классы для страниц:**
   - Каждая страница должна быть классом
   - Конструктор принимает экземпляр Page
   - Элементы инициализируются через локаторы

2. **Вынести локаторы и методы взаимодействия:**
   - Все селекторы должны быть в Page Object классах
   - Создать методы для основных действий на странице
   - Методы должны быть читаемыми и переиспользуемыми

3. **Переписать тесты, используя методы страниц:**
   - Тесты должны использовать Page Object методы
   - Код тестов должен быть читаемым и понятным
   - Сохранить все существующие проверки

**Пример структуры:**

**Класс LoginPage:**
```typescript
class LoginPage {
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async login(username: string, password: string) {
    // твой код здесь
  }
}
```

**В тесте:**
```typescript
// В тесте:
test('login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
  // проверки
});
```

---

**После выполнения всех задания создайте Pull request с заданием и отправьте его на ревью.**