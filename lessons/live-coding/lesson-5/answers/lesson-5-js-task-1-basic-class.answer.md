# Ответ к задаче 1: Базовый класс (JavaScript)

## Решение

```javascript
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true; // По умолчанию книга доступна
  }

  getInfo() {
    return `${this.title} - ${this.author} (${this.year})`;
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `Книга "${this.title}" выдана`;
    } else {
      return `Книга "${this.title}" уже выдана`;
    }
  }

  return() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      return `Книга "${this.title}" возвращена`;
    } else {
      return `Книга "${this.title}" уже в библиотеке`;
    }
  }

  isBookAvailable() {
    return this.isAvailable;
  }
}

// Тестирование
const book1 = new Book('Война и мир', 'Лев Толстой', 1869);
const book2 = new Book('1984', 'Джордж Оруэлл', 1949);

console.log('=== Информация о книгах ===');
console.log(book1.getInfo()); // "Война и мир - Лев Толстой (1869)"
console.log(book2.getInfo()); // "1984 - Джордж Оруэлл (1949)"

console.log('=== Выдача книг ===');
console.log('Книга 1 доступна:', book1.isBookAvailable()); // true
console.log(book1.borrow()); // "Книга "Война и мир" выдана"
console.log('После выдачи - доступна:', book1.isBookAvailable()); // false

console.log('=== Возврат книги ===');
console.log(book1.return()); // "Книга "Война и мир" возвращена"
console.log('После возврата - доступна:', book1.isBookAvailable()); // true
```

## Объяснение

**Основы классов в JavaScript:**
- **class** — ключевое слово для создания класса
- **constructor** — специальный метод, вызываемый при создании объекта
- **this** — ссылка на текущий экземпляр класса
- **new** — оператор для создания экземпляра класса

**Свойства класса:**
- **title, author, year** — основные данные о книге
- **isAvailable** — состояние доступности книги

**Методы класса:**
- **getInfo()** — возвращает информацию о книге
- **borrow()** — выдает книгу (меняет состояние)
- **return()** — возвращает книгу (меняет состояние)
- **isBookAvailable()** — проверяет доступность

**Ключевые принципы:**
1. **Инкапсуляция** — данные и методы объединены в одном объекте
2. **Состояние** — объект может изменять свое состояние
3. **Поведение** — методы определяют, что может делать объект
4. **Переиспользование** — один класс для создания множества объектов

**Применение в тестах:**
- Создание тестовых данных (книги, пользователи, товары)
- Инкапсуляция логики работы с объектами
- Легкое создание множества похожих объектов
- Четкое разделение данных и поведения
