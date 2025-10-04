// Задача 2: Наследование (Уровень: Начинающий+)
// Создайте иерархию классов для разных типов транспортных средств

// TODO: Создайте базовый класс Vehicle
// 1. Добавьте свойства: brand, model, year, speed
// 2. Создайте конструктор
// 3. Добавьте методы:
//    - start() - запуск транспорта
//    - stop() - остановка транспорта
//    - accelerate(speed) - увеличение скорости
//    - getInfo() - информация о транспорте

// TODO: Создайте класс Car, наследующий от Vehicle
// 1. Добавьте свойство doors (количество дверей)
// 2. Переопределите метод start() - специфично для автомобиля
// 3. Добавьте метод honk() - сигнал автомобиля

// TODO: Создайте класс Motorcycle, наследующий от Vehicle
// 1. Добавьте свойство hasWindshield (есть ли ветровое стекло)
// 2. Переопределите метод start() - специфично для мотоцикла
// 3. Добавьте метод wheelie() - стойка на заднем колесе

// Ваш код здесь:

// Создайте экземпляры и протестируйте
const car = new Car('Toyota', 'Camry', 2023, 4);
const motorcycle = new Motorcycle('Honda', 'CBR600', 2023, true);

console.log('=== Информация о транспорте ===');
console.log(car.getInfo());
console.log(motorcycle.getInfo());

console.log('=== Запуск транспорта ===');
console.log(car.start());
console.log(motorcycle.start());

console.log('=== Ускорение ===');
car.accelerate(60);
motorcycle.accelerate(80);
console.log('Скорость автомобиля:', car.speed);
console.log('Скорость мотоцикла:', motorcycle.speed);

console.log('=== Специфичные действия ===');
console.log(car.honk());
console.log(motorcycle.wheelie());
