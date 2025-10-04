// Задача 3: Абстрактные классы (Уровень: Средний)
// Создайте систему обработки документов с абстрактными классами

// TODO: Создайте абстрактный класс Document
// 1. Добавьте свойства: id (string), title (string), content (string), createdAt (Date)
// 2. Создайте конструктор
// 3. Добавьте абстрактные методы:
//    - process(): string - обработка документа
//    - validate(): boolean - валидация документа
// 4. Добавьте обычные методы:
//    - getInfo(): string - информация о документе
//    - save(): void - сохранение документа

// TODO: Создайте класс TextDocument, наследующий от Document
// 1. Добавьте свойство wordCount: number
// 2. Реализуйте process() - подсчет слов и форматирование
// 3. Реализуйте validate() - проверка на пустой контент
// 4. Добавьте метод getWordCount(): number

// TODO: Создайте класс PDFDocument, наследующий от Document
// 1. Добавьте свойство pageCount: number
// 2. Реализуйте process() - извлечение текста и метаданных
// 3. Реализуйте validate() - проверка на корректный PDF
// 4. Добавьте метод getPageCount(): number

// TODO: Создайте класс ImageDocument, наследующий от Document
// 1. Добавьте свойства: width: number, height: number, format: string
// 2. Реализуйте process() - извлечение метаданных изображения
// 3. Реализуйте validate() - проверка на поддерживаемый формат
// 4. Добавьте метод getDimensions(): string

// Ваш код здесь:

// Создайте документы разных типов
const textDoc = new TextDocument('txt-001', 'Статья о программировании', 'Это статья о программировании на JavaScript и TypeScript. В ней рассказывается об основах ООП и современных подходах к разработке.');
const pdfDoc = new PDFDocument('pdf-001', 'Руководство пользователя', 'PDF контент с инструкциями', 25);
const imageDoc = new ImageDocument('img-001', 'Логотип компании', 'Бинарные данные изображения', 1920, 1080, 'PNG');

const documents = [textDoc, pdfDoc, imageDoc];

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
