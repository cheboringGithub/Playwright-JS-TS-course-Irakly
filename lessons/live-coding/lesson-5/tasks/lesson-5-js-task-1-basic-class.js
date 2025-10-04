// Задача 1: Базовый класс (Уровень: Начинающий)
// Создайте класс для представления книги в библиотеке

// TODO: Создайте класс Book
// 1. Добавьте свойства: title, author, year, isAvailable
// 2. Создайте конструктор, который принимает title, author, year
// 3. isAvailable должно быть true по умолчанию
// 4. Добавьте методы:
//    - getInfo() - возвращает информацию о книге
//    - borrow() - выдает книгу (isAvailable = false)
//    - return() - возвращает книгу (isAvailable = true)
//    - isBookAvailable() - проверяет доступность

// Ваш код здесь:

// Создайте несколько книг и протестируйте методы
const book1 = new Book('Война и мир', 'Лев Толстой', 1869);
const book2 = new Book('1984', 'Джордж Оруэлл', 1949);

console.log('=== Информация о книгах ===');
console.log(book1.getInfo());
console.log(book2.getInfo());

console.log('=== Выдача книг ===');
console.log('Книга 1 доступна:', book1.isBookAvailable());
book1.borrow();
console.log('После выдачи - доступна:', book1.isBookAvailable());

console.log('=== Возврат книги ===');
book1.return();
console.log('После возврата - доступна:', book1.isBookAvailable());
