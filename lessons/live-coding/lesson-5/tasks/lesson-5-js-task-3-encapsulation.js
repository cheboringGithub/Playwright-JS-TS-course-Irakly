// Задача 3: Инкапсуляция (Уровень: Средний)
// Создайте класс BankAccount с инкапсуляцией данных

// TODO: Создайте класс BankAccount
// 1. Добавьте приватные поля: #balance, #accountNumber, #owner
// 2. Создайте конструктор с валидацией:
//    - accountNumber должен быть строкой длиной 10 символов
//    - owner должен быть непустой строкой
//    - balance должен быть неотрицательным числом
// 3. Добавьте приватные методы:
//    - #validateAmount(amount) - проверка суммы
//    - #logTransaction(type, amount) - логирование операций
// 4. Добавьте публичные методы:
//    - deposit(amount) - пополнение счета
//    - withdraw(amount) - снятие средств
//    - getBalance() - получение баланса
//    - getAccountInfo() - информация о счете (без баланса)

// Ваш код здесь:

// Создайте счет и протестируйте операции
const account = new BankAccount('1234567890', 'Иван Петров', 1000);

console.log('=== Информация о счете ===');
console.log(account.getAccountInfo());
console.log('Текущий баланс:', account.getBalance());

console.log('=== Пополнение счета ===');
account.deposit(500);
console.log('Баланс после пополнения:', account.getBalance());

console.log('=== Снятие средств ===');
account.withdraw(200);
console.log('Баланс после снятия:', account.getBalance());

console.log('=== Попытка снятия больше баланса ===');
account.withdraw(2000);
console.log('Баланс после попытки снятия:', account.getBalance());

// Попытка создания счета с невалидными данными
try {
  const invalidAccount = new BankAccount('123', '', -100);
} catch (error) {
  console.log('Ошибка создания счета:', error.message);
}
