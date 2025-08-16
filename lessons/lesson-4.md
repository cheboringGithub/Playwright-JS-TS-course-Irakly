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

### 📚 Основные концепции JavaScript
- **[Методы массивов]({{ site.baseurl }}/lessons/glossary/lesson-4/array-methods.md)** — map, filter, reduce, forEach
- **[Итерация по коллекциям]({{ site.baseurl }}/lessons/glossary/lesson-4/iteration.md)** — for...of, for...in, forEach
- **[Map и Set]({{ site.baseurl }}/lessons/glossary/lesson-4/map-set.md)** — современные коллекции данных
- **[Деструктуризация]({{ site.baseurl }}/lessons/glossary/lesson-4/destructuring.md)** — извлечение данных из объектов и массивов

### 🔧 Дополнительные концепции
- **Object.keys/values/entries** — работа с объектами
- **Rest/Spread операторы** — параметры и расширение
- **Рекурсия** — функции, вызывающие сами себя
- **Замыкания** — функции с доступом к внешней области видимости
- **Стрелочные функции** — современный синтаксис функций
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

## 📚 Полезная информация

### 🔍 Глоссарий терминов
Для детального изучения всех концепций используйте **[глоссарий курса]({{ site.baseurl }}/lessons/glossary/)**:
- **Основные концепции** — методы массивов, итерация, Map/Set, деструктуризация
- **Дополнительные термины** — рекурсия, замыкания, стрелочные функции
- **Примеры кода** — практические примеры с комментариями

### 📖 Рекомендуемые ресурсы
- **[learn.javascript.ru](https://learn.javascript.ru/)** — современный учебник JavaScript на русском языке
- **[MDN Web Docs](https://developer.mozilla.org/ru/)** — документация по веб-технологиям
- **[JavaScript.info](https://javascript.info/)** — современный учебник JavaScript

### 💡 Советы по изучению
1. **Начните с основ** — изучите методы массивов (map, filter, reduce)
2. **Практикуйтесь** — решайте задачи в разделе Live Coding
3. **Изучайте примеры** — анализируйте код в глоссарии
4. **Применяйте знания** — используйте изученные концепции в практических заданиях



## Практика: Live Coding

**Решайте задачи в папке:** [Live Coding задачи урока 4]({{ site.baseurl }}/lessons/live-coding/lesson-4/live-coding-lesson-4.md)



## Практическое задание

**Создаём ветку с заданием `task-4`:**

### Реализовать абстракции для тестов из урока 3, применяя Page Object Pattern.

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