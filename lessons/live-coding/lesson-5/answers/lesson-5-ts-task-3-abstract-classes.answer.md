# Ответ к задаче 3: Абстрактные классы (TypeScript)

## Решение

```typescript
// Абстрактный класс Document
abstract class Document {
  protected id: string;
  protected title: string;
  protected content: string;
  protected createdAt: Date;

  constructor(id: string, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = new Date();
  }

  // Абстрактные методы - должны быть реализованы в наследниках
  abstract process(): string;
  abstract validate(): boolean;

  // Обычные методы
  getInfo(): string {
    return `${this.title} (ID: ${this.id}) - создан ${this.createdAt.toLocaleDateString()}`;
  }

  save(): void {
    console.log(`Документ "${this.title}" сохранен`);
  }
}

// Класс TextDocument, наследующий от Document
class TextDocument extends Document {
  private wordCount: number;

  constructor(id: string, title: string, content: string) {
    super(id, title, content);
    this.wordCount = this.calculateWordCount();
  }

  // Реализация абстрактного метода process
  process(): string {
    const words = this.content.split(/\s+/).length;
    const lines = this.content.split('\n').length;
    return `Обработка текста: ${words} слов, ${lines} строк`;
  }

  // Реализация абстрактного метода validate
  validate(): boolean {
    return this.content.trim().length > 0;
  }

  getWordCount(): number {
    return this.wordCount;
  }

  private calculateWordCount(): number {
    return this.content.split(/\s+/).filter(word => word.length > 0).length;
  }
}

// Класс PDFDocument, наследующий от Document
class PDFDocument extends Document {
  private pageCount: number;

  constructor(id: string, title: string, content: string, pageCount: number) {
    super(id, title, content);
    this.pageCount = pageCount;
  }

  // Реализация абстрактного метода process
  process(): string {
    return `Обработка PDF: извлечение текста из ${this.pageCount} страниц`;
  }

  // Реализация абстрактного метода validate
  validate(): boolean {
    return this.content.startsWith('%PDF-') && this.pageCount > 0;
  }

  getPageCount(): number {
    return this.pageCount;
  }
}

// Класс ImageDocument, наследующий от Document
class ImageDocument extends Document {
  private width: number;
  private height: number;
  private format: string;

  constructor(id: string, title: string, content: string, width: number, height: number, format: string) {
    super(id, title, content);
    this.width = width;
    this.height = height;
    this.format = format;
  }

  // Реализация абстрактного метода process
  process(): string {
    return `Обработка изображения: ${this.format}, ${this.width}x${this.height} пикселей`;
  }

  // Реализация абстрактного метода validate
  validate(): boolean {
    const supportedFormats = ['PNG', 'JPEG', 'GIF', 'WEBP'];
    return supportedFormats.includes(this.format.toUpperCase());
  }

  getDimensions(): string {
    return `${this.width}x${this.height}`;
  }
}

// Тестирование
const textDoc = new TextDocument('txt-001', 'Статья о программировании', 'Это статья о программировании на JavaScript и TypeScript. В ней рассказывается об основах ООП и современных подходах к разработке.');
const pdfDoc = new PDFDocument('pdf-001', 'Руководство пользователя', '%PDF-1.4\n%PDF контент с инструкциями', 25);
const imageDoc = new ImageDocument('img-001', 'Логотип компании', 'Бинарные данные изображения', 1920, 1080, 'PNG');

const documents: Document[] = [textDoc, pdfDoc, imageDoc];

console.log('=== Информация о документах ===');
documents.forEach(doc => {
  console.log(doc.getInfo());
  console.log(`Валидный: ${doc.validate()}`);
  console.log(`Обработан: ${doc.process()}`);
  console.log('---');
});

console.log('=== Специфичные методы ===');
console.log('Количество слов в тексте:', textDoc.getWordCount());
console.log('Количество страниц в PDF:', pdfDoc.getPageCount());
console.log('Размеры изображения:', imageDoc.getDimensions());

console.log('=== Полиморфная обработка ===');
documents.forEach(doc => {
  if (doc.validate()) {
    console.log(`${doc.title}: ${doc.process()}`);
  } else {
    console.log(`${doc.title}: Документ невалиден`);
  }
});
```

## Объяснение

**Абстрактные классы в TypeScript:**
- **abstract class** — ключевое слово для создания абстрактного класса
- **abstract methods** — методы, которые должны быть реализованы в наследниках
- **protected** — доступ в классе и наследниках
- **Принудительная реализация** — компилятор требует реализации абстрактных методов

**Принципы абстрактных классов:**
1. **Общая структура** — базовые свойства и методы
2. **Принудительная реализация** — абстрактные методы должны быть реализованы
3. **Специализация** — каждый наследник реализует специфичную логику
4. **Полиморфизм** — работа с разными типами через общий интерфейс

**Преимущества абстрактных классов:**
- **Структура** — четкая иерархия классов
- **Принуждение** — нельзя забыть реализовать важные методы
- **Переиспользование** — общая логика в базовом классе
- **Типобезопасность** — строгая типизация

**Ключевые особенности:**
- `abstract` методы не имеют реализации
- Наследники обязаны реализовать все абстрактные методы
- Можно иметь обычные методы в абстрактном классе
- Нельзя создать экземпляр абстрактного класса

**Применение в Page Object Pattern:**
- Базовый класс `BasePage` с общими методами
- Абстрактные методы для обязательной реализации
- Конкретные страницы наследуют и реализуют методы
- Полиморфное использование в тестах

**Лучшие практики:**
- Используйте абстрактные классы для общих характеристик
- Делайте абстрактными только действительно важные методы
- Предоставляйте полезную реализацию в базовом классе
- Документируйте ожидаемое поведение абстрактных методов
