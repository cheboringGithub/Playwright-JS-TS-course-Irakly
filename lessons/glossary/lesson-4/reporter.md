---
layout: default
title: Репортер
---

<a href="{{ site.baseurl }}/lessons/glossary/" class="main-link-home">&#8592; К глоссарию</a>

# Репортер

**Репортер** — компонент, который генерирует отчеты о выполнении автоматизированных тестов.

## Описание

Репортер в Playwright — это специальный компонент, который собирает информацию о выполнении тестов и формирует отчеты в различных форматах. Репортеры помогают анализировать результаты тестирования, выявлять проблемы и предоставлять информацию для принятия решений.

## Типы репортеров

### 1. Встроенные репортеры Playwright

#### HTML репортер
```typescript
export default defineConfig({
  reporter: [['html']]
});
```
- **Назначение:** Интерактивные отчеты с детализацией
- **Формат:** HTML файлы с навигацией
- **Особенности:** Скриншоты, трейсы, видео записи

#### JSON репортер
```typescript
export default defineConfig({
  reporter: [['json', { outputFile: 'test-results.json' }]]
});
```
- **Назначение:** Структурированные данные для анализа
- **Формат:** JSON файлы
- **Применение:** Интеграция с внешними системами

#### JUnit репортер
```typescript
export default defineConfig({
  reporter: [['junit', { outputFile: 'junit-results.xml' }]]
});
```
- **Назначение:** Совместимость с CI/CD системами
- **Формат:** XML файлы
- **Применение:** Jenkins, GitLab CI, GitHub Actions

#### List репортер
```typescript
export default defineConfig({
  reporter: [['list']]
});
```
- **Назначение:** Простой текстовый вывод в консоль
- **Формат:** Текст
- **Применение:** Отладка и быстрый просмотр результатов

#### Dot репортер
```typescript
export default defineConfig({
  reporter: [['dot']]
});
```
- **Назначение:** Минималистичный вывод
- **Формат:** Точки и символы
- **Применение:** Быстрый обзор прогресса тестов

### 2. Кастомные репортеры

#### Создание кастомного репортера
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

#### Применение кастомного репортера
```typescript
export default defineConfig({
  reporter: [
    ['html'],
    ['./custom-reporter.ts']
  ]
});
```

## Настройка репортеров

### Базовая настройка
```typescript
export default defineConfig({
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results.json' }],
    ['junit', { outputFile: 'junit-results.xml' }]
  ]
});
```

### Настройка с опциями
```typescript
export default defineConfig({
  reporter: [
    ['html', { 
      open: 'never',
      outputFolder: 'custom-reports'
    }],
    ['json', { 
      outputFile: 'detailed-results.json',
      includeAttachments: true
    }]
  ]
});
```

## Преимущества использования репортеров

✅ **Анализ результатов** — детальная информация о выполнении тестов
✅ **Интеграция** — совместимость с CI/CD системами
✅ **Отладка** — помощь в поиске и исправлении проблем
✅ **Документирование** — создание отчетов для команды и заказчика
✅ **Мониторинг** — отслеживание качества кода во времени

## Лучшие практики

1. **Используйте несколько репортеров** для разных целей
2. **Настройте HTML репортер** для детального анализа
3. **Добавьте JSON репортер** для интеграции с внешними системами
4. **Создавайте кастомные репортеры** для специфических требований
5. **Сохраняйте отчеты** в системе контроля версий

## Связанные термины

- [Page Object Pattern](page-object-pattern.md)
- [Fixture](fixture.md)
- [Trace](trace.md)
- [Screenshot](screenshot.md)

---

**См. также:** [Урок 4](../../glossary/#-урок-4-репортеры-и-page-object-pattern) | [К глоссарию](../../glossary/)
