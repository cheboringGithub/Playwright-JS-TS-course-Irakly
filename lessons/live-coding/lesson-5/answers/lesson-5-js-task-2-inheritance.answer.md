# Ответ к задаче 2: Наследование (JavaScript)

## Решение

```javascript
// Базовый класс Vehicle
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  start() {
    return `${this.brand} ${this.model} готов к запуску`;
  }

  stop() {
    this.speed = 0;
    return `${this.brand} ${this.model} остановлен`;
  }

  accelerate(speed) {
    this.speed += speed;
    return `Скорость увеличена до ${this.speed} км/ч`;
  }

  getInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

// Класс Car, наследующий от Vehicle
class Car extends Vehicle {
  constructor(brand, model, year, doors) {
    super(brand, model, year); // Вызов конструктора родителя
    this.doors = doors;
  }

  // Переопределение метода start
  start() {
    return `${this.brand} ${this.model} заводится ключом`;
  }

  // Специфичный метод для автомобиля
  honk() {
    return `${this.brand} ${this.model} сигналит: Би-би!`;
  }
}

// Класс Motorcycle, наследующий от Vehicle
class Motorcycle extends Vehicle {
  constructor(brand, model, year, hasWindshield) {
    super(brand, model, year); // Вызов конструктора родителя
    this.hasWindshield = hasWindshield;
  }

  // Переопределение метода start
  start() {
    return `${this.brand} ${this.model} заводится кнопкой`;
  }

  // Специфичный метод для мотоцикла
  wheelie() {
    return `${this.brand} ${this.model} делает стойку на заднем колесе!`;
  }
}

// Тестирование
const car = new Car('Toyota', 'Camry', 2023, 4);
const motorcycle = new Motorcycle('Honda', 'CBR600', 2023, true);

console.log('=== Информация о транспорте ===');
console.log(car.getInfo()); // "Toyota Camry (2023)"
console.log(motorcycle.getInfo()); // "Honda CBR600 (2023)"

console.log('=== Запуск транспорта ===');
console.log(car.start()); // "Toyota Camry заводится ключом"
console.log(motorcycle.start()); // "Honda CBR600 заводится кнопкой"

console.log('=== Ускорение ===');
console.log(car.accelerate(60)); // "Скорость увеличена до 60 км/ч"
console.log(motorcycle.accelerate(80)); // "Скорость увеличена до 80 км/ч"
console.log('Скорость автомобиля:', car.speed); // 60
console.log('Скорость мотоцикла:', motorcycle.speed); // 80

console.log('=== Специфичные действия ===');
console.log(car.honk()); // "Toyota Camry сигналит: Би-би!"
console.log(motorcycle.wheelie()); // "Honda CBR600 делает стойку на заднем колесе!"
```

## Объяснение

**Наследование в JavaScript:**
- **extends** — ключевое слово для наследования
- **super()** — вызов конструктора родительского класса
- **Переопределение методов** — замена реализации в наследнике
- **Дополнительные свойства** — добавление новых характеристик

**Принципы наследования:**
1. **Переиспользование кода** — общая логика в базовом классе
2. **Специализация** — каждый наследник добавляет свою специфику
3. **Полиморфизм** — один интерфейс, разные реализации
4. **Иерархия** — четкая структура "родитель-потомок"

**Ключевые особенности:**
- **super()** должен вызываться в конструкторе наследника
- Методы можно переопределять в наследниках
- Можно добавлять новые свойства и методы
- Наследник имеет доступ ко всем публичным методам родителя

**Преимущества наследования:**
- Уменьшение дублирования кода
- Создание логической иерархии объектов
- Легкость в поддержке и расширении
- Полиморфное использование объектов

**Применение в Page Object Pattern:**
- Базовый класс `BasePage` с общими методами
- Конкретные страницы наследуют от `BasePage`
- Переопределение методов для специфичной логики
- Переиспользование общих функций
