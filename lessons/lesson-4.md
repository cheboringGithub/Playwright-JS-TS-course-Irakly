---
layout: default
title: Занятие 4
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Занятие 4

---

## Тема 1: Логгеры и репортеры

**Вопросы для обсуждения:**
- Что такое **репортер**? Для чего он нужен в автоматизации?
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

### Логирование — отладка и мониторинг тестов

**Уровни логирования:**
- `error` — критические ошибки
- `warn` — предупреждения
- `info` — информационные сообщения
- `debug` — детальная отладочная информация

**Настройка логирования:**
```typescript
export default defineConfig({
  use: {
    // Логирование всех действий
    trace: 'on-first-retry',
    // Логирование скриншотов
    screenshot: 'only-on-failure',
  },
});
```

**Рекомендуемые материалы:**
- [Документация Playwright по репортерам](https://playwright.dev/docs/test-reporters)

---

## Тема 2: Фикстуры (Fixtures)

**Вопросы для обсуждения:**
- Для чего нужны **фикстуры** в автоматизации тестирования?
- Какие задачи решают фикстуры на практике?
- Как работать с фикстурами в Playwright?

### Фикстуры — подготовка данных и решаемые проблемы

**Назначение фикстур:**
- Подготовка тестового окружения
- Создание и очистка тестовых данных
- Изоляция тестов друг от друга
- Переиспользование кода между тестами

**Решаемые проблемы:**
- Дублирование кода в тестах
- Зависимости между тестами
- Сложность управления состоянием
- Низкая читаемость тестов

### Setup/Teardown — жизненный цикл тестовых данных

**Жизненный цикл фикстур:**
1. **Setup** — подготовка данных перед тестом
2. **Execution** — выполнение теста
3. **Teardown** — очистка данных после теста

**Пример использования:**
```typescript
test.beforeEach(async ({ page }) => {
  // Setup: подготовка данных
  await page.goto('https://example.com');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password');
});

test.afterEach(async ({ page }) => {
  // Teardown: очистка данных
  await page.evaluate(() => localStorage.clear());
});
```

### Типы фикстур: test fixtures, worker fixtures, auto fixtures — различия и применение

**Test Fixtures:**
- Создаются для каждого теста
- Изолированы между тестами
- Подходят для уникальных данных

```typescript
const test = base.extend({
  userData: async ({}, use) => {
    const user = await createTestUser();
    await use(user);
    await deleteTestUser(user.id);
  },
});
```

**Worker Fixtures:**
- Создаются один раз для всех тестов в worker
- Переиспользуются между тестами
- Подходят для тяжелых ресурсов

```typescript
const test = base.extend({
  database: [async ({}, use) => {
    const db = await setupDatabase();
    await use(db);
    await cleanupDatabase(db);
  }, { scope: 'worker' }],
});
```

**Auto Fixtures:**
- Автоматически создаются Playwright
- Не требуют явного определения
- Примеры: `page`, `browser`, `context`

### Переиспользование кода и изоляция данных между тестами

**Принципы переиспользования:**
- Выделение общих операций в фикстуры
- Создание специализированных фикстур для разных сценариев
- Композиция фикстур для сложных случаев

**Изоляция данных:**
- Каждый тест получает чистые данные
- Отсутствие влияния между тестами
- Предсказуемость результатов

**Рекомендуемые материалы:**
- [Документация Playwright по фикстурам](https://playwright.dev/docs/test-fixtures)

---

## Тема 3: CI/CD

**Вопросы для обсуждения:**
- Что такое **CI/CD** и зачем он нужен?
- Какие этапы включает в себя **pipeline**?
- Как интегрировать автоматизированные тесты в **CI/CD**?

### Что такое CI/CD

**Continuous Integration (CI):**
- Автоматическая интеграция изменений кода
- Автоматическая сборка и тестирование
- Раннее обнаружение проблем
- Постоянная проверка качества кода

**Continuous Delivery/Deployment (CD):**
- Автоматическая доставка в среды
- Автоматическое развертывание
- Быстрые и надежные релизы
- Минимизация человеческих ошибок

### Этапы pipeline

**Типичные этапы CI/CD:**
1. **Source** — получение кода из репозитория
2. **Build** — сборка приложения
3. **Test** — запуск автоматизированных тестов
4. **Security** — проверки безопасности
5. **Deploy** — развертывание в среды
6. **Monitor** — мониторинг и алертинг

### Интеграция тестов в CI/CD

**Стратегии запуска тестов:**
- **On Pull Request** — при создании/обновлении MR
- **On Schedule** — по расписанию (например, ночью)
- **On Deployment** — после развертывания
- **Manual Trigger** — ручной запуск

**Пример GitHub Actions workflow:**
```yaml
name: Playwright Tests
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 2 * * *'  # Каждый день в 2:00

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 18
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
```

---

## Тема 4: Docker

**Вопросы для обсуждения:**
- Что такое **контейнеризация** и чем она отличается от **виртуализации**?
- Зачем использовать **Docker** для автоматизированных тестов?
- Как создать **Dockerfile** для тестового проекта?

### Virtualization vs Containerization

**Виртуализация:**
- Полная изоляция на уровне операционной системы
- Каждая виртуальная машина включает полную ОС
- Больше ресурсов, медленнее старт
- Полная изоляция, лучшая безопасность

**Контейнеризация:**
- Изоляция на уровне процессов
- Общее ядро операционной системы
- Меньше ресурсов, быстрый старт
- Легковесность, портативность

### Преимущества Docker для тестов

**Основные преимущества:**
- **Воспроизводимость** — одинаковая среда везде
- **Изоляция** — тесты не влияют на хост-систему
- **Портативность** — работает на любой платформе
- **Масштабируемость** — легко запускать параллельно
- **Версионирование** — контроль версий окружения

### Создание Dockerfile для тестов

**Пример Dockerfile:**
```dockerfile
FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm ci

# Копирование исходного кода
COPY . .

# Запуск тестов
CMD ["npx", "playwright", "test"]
```

**Оптимизированный многоэтапный Dockerfile:**
```dockerfile
# Этап сборки
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Этап выполнения
FROM mcr.microsoft.com/playwright:v1.40.0-jammy
WORKDIR /app

# Копирование зависимостей
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
COPY . .

# Установка браузеров
RUN npx playwright install

# Запуск тестов
CMD ["npx", "playwright", "test"]
```

**Docker Compose для тестов:**
```yaml
version: '3.8'
services:
  playwright-tests:
    build: .
    volumes:
      - ./test-results:/app/test-results
      - ./playwright-report:/app/playwright-report
    environment:
      - CI=true
    command: npx playwright test --reporter=html
```

---

## Практическое задание

**Создаём ветку с заданием `task-4` и выполняем следующие задачи:**

### Задача 1: Настройка репортеров
1. Настроить несколько репортеров в `playwright.config.ts`:
   - HTML репортер
   - JSON репортер с выводом в файл `test-results.json`
   - JUnit репортер с выводом в файл `junit-results.xml`
2. Запустить тесты и проверить генерацию отчетов

### Задача 2: Создание кастомного репортера
1. Создать кастомный репортер, который выводит в консоль:
   - Общее количество тестов
   - Количество пройденных/упавших тестов
   - Время выполнения каждого теста
2. Подключить репортер к конфигурации

### Задача 3: Работа с фикстурами
1. Создать фикстуру для аутентификации пользователя
2. Использовать фикстуру в существующих тестах
3. Создать фикстуру для подготовки тестовых данных

### Задача 4: Настройка CI/CD
1. Создать GitHub Actions workflow для запуска тестов:
   - При создании Pull Request
   - По расписанию (каждый день в определенное время)
2. Настроить сохранение артефактов (отчеты, скриншоты)

### Задача 5: Docker контейнеризация
1. Создать Dockerfile для тестового проекта
2. Создать Docker Compose файл
3. Запустить тесты в контейнере
4. Убедиться, что отчеты сохраняются на хост-машине

---

**После выполнения всех задач создайте Pull request с заданием и отправьте его на ревью.**