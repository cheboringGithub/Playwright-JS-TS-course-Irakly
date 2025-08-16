---
layout: default
title: Методы массивов
---

<a href="{{ site.baseurl }}/lessons/glossary/" class="main-link-home">&#8592; К глоссарию</a>

# Методы массивов

**Методы массивов** — встроенные функции JavaScript для работы с массивами, которые позволяют эффективно обрабатывать, преобразовывать и анализировать данные.

## Описание

Методы массивов — это мощные инструменты JavaScript, которые предоставляют функциональный подход к работе с коллекциями данных. Они позволяют писать более читаемый и декларативный код, избегая традиционных циклов.

## Основные методы массивов

### 1. map() — преобразование элементов

**Назначение:** Создает новый массив, применяя функцию к каждому элементу исходного массива.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Умножение каждого числа на 2
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Преобразование в строки
const strings = numbers.map(num => `Число: ${num}`);
console.log(strings); // ['Число: 1', 'Число: 2', 'Число: 3', 'Число: 4', 'Число: 5']

// Работа с объектами
const users = [
  { name: 'Иван', age: 25 },
  { name: 'Мария', age: 30 },
  { name: 'Петр', age: 35 }
];

const names = users.map(user => user.name);
console.log(names); // ['Иван', 'Мария', 'Петр']

const userInfo = users.map(user => `${user.name} (${user.age} лет)`);
console.log(userInfo); // ['Иван (25 лет)', 'Мария (30 лет)', 'Петр (35 лет)']
```

### 2. filter() — фильтрация элементов

**Назначение:** Создает новый массив, содержащий только элементы, которые удовлетворяют условию.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Фильтрация четных чисел
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Фильтрация чисел больше 5
const largeNumbers = numbers.filter(num => num > 5);
console.log(largeNumbers); // [6, 7, 8, 9, 10]

// Фильтрация пользователей по возрасту
const users = [
  { name: 'Иван', age: 25 },
  { name: 'Мария', age: 30 },
  { name: 'Петр', age: 35 },
  { name: 'Анна', age: 20 }
];

const adultUsers = users.filter(user => user.age >= 25);
console.log(adultUsers); // [{ name: 'Иван', age: 25 }, { name: 'Мария', age: 30 }, { name: 'Петр', age: 35 }]

// Фильтрация по имени
const ivanUsers = users.filter(user => user.name === 'Иван');
console.log(ivanUsers); // [{ name: 'Иван', age: 25 }]
```

### 3. reduce() — агрегация данных

**Назначение:** Преобразует массив в одно значение, применяя функцию к каждому элементу и накапливая результат.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Сумма всех чисел
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// Произведение всех чисел
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120

// Поиск максимального числа
const max = numbers.reduce((acc, curr) => Math.max(acc, curr), numbers[0]);
console.log(max); // 5

// Группировка пользователей по возрасту
const users = [
  { name: 'Иван', age: 25, city: 'Москва' },
  { name: 'Мария', age: 30, city: 'СПб' },
  { name: 'Петр', age: 25, city: 'Москва' },
  { name: 'Анна', age: 30, city: 'СПб' }
];

const groupedByAge = users.reduce((acc, user) => {
  if (!acc[user.age]) {
    acc[user.age] = [];
  }
  acc[user.age].push(user.name);
  return acc;
}, {});

console.log(groupedByAge);
// { 25: ['Иван', 'Петр'], 30: ['Мария', 'Анна'] }

// Подсчет количества пользователей по городам
const cityCount = users.reduce((acc, user) => {
  acc[user.city] = (acc[user.city] || 0) + 1;
  return acc;
}, {});

console.log(cityCount); // { 'Москва': 2, 'СПб': 2 }
```

### 4. forEach() — итерация по элементам

**Назначение:** Выполняет функцию для каждого элемента массива без создания нового массива.

```javascript
const fruits = ['яблоко', 'банан', 'апельсин'];

// Простой вывод элементов
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});
// 1. яблоко
// 2. банан
// 3. апельсин

// Обновление элементов в объекте
const users = [
  { name: 'Иван', age: 25 },
  { name: 'Мария', age: 30 }
];

users.forEach(user => {
  user.fullInfo = `${user.name} (${user.age} лет)`;
});

console.log(users);
// [
//   { name: 'Иван', age: 25, fullInfo: 'Иван (25 лет)' },
//   { name: 'Мария', age: 30, fullInfo: 'Мария (30 лет)' }
// ]

// Накопление данных
let totalAge = 0;
users.forEach(user => {
  totalAge += user.age;
});
console.log(`Общий возраст: ${totalAge}`); // Общий возраст: 55
```

## Комбинирование методов

### Цепочка методов

```javascript
const users = [
  { name: 'Иван', age: 25, city: 'Москва' },
  { name: 'Мария', age: 30, city: 'СПб' },
  { name: 'Петр', age: 35, city: 'Москва' },
  { name: 'Анна', age: 20, city: 'СПб' }
];

// Цепочка: фильтр -> преобразование -> агрегация
const result = users
  .filter(user => user.age >= 25)           // Только взрослые
  .map(user => ({                           // Преобразование в новый формат
    name: user.name,
    age: user.age,
    city: user.city,
    status: user.age >= 30 ? 'старший' : 'младший'
  }))
  .reduce((acc, user) => {                  // Группировка по статусу
    if (!acc[user.status]) {
      acc[user.status] = [];
    }
    acc[user.status].push(user.name);
    return acc;
  }, {});

console.log(result);
// { младший: ['Иван'], старший: ['Мария', 'Петр'] }
```

### Практический пример: Анализ заказов

```javascript
const orders = [
  { id: 1, customer: 'Иван', amount: 1500, status: 'completed' },
  { id: 2, customer: 'Мария', amount: 2300, status: 'pending' },
  { id: 3, customer: 'Петр', amount: 800, status: 'completed' },
  { id: 4, customer: 'Анна', amount: 3200, status: 'completed' },
  { id: 5, customer: 'Иван', amount: 900, status: 'cancelled' }
];

// Анализ заказов
const analysis = orders
  .filter(order => order.status === 'completed')           // Только завершенные
  .reduce((acc, order) => {                               // Агрегация по клиентам
    if (!acc[order.customer]) {
      acc[order.customer] = { total: 0, count: 0 };
    }
    acc[order.customer].total += order.amount;
    acc[order.customer].count += 1;
    return acc;
  }, {});

console.log(analysis);
// {
//   'Иван': { total: 1500, count: 1 },
//   'Мария': { total: 0, count: 0 },      // Нет завершенных заказов
//   'Петр': { total: 800, count: 1 },
//   'Анна': { total: 3200, count: 1 }
// }

// Топ-3 клиента по сумме заказов
const topCustomers = Object.entries(analysis)
  .filter(([_, data]) => data.count > 0)                 // Только с заказами
  .map(([name, data]) => ({                               // Преобразование в удобный формат
    name,
    total: data.total,
    average: Math.round(data.total / data.count)
  }))
  .sort((a, b) => b.total - a.total)                     // Сортировка по убыванию
  .slice(0, 3);                                           // Топ-3

console.log('Топ-3 клиента:', topCustomers);
// [
//   { name: 'Анна', total: 3200, average: 3200 },
//   { name: 'Иван', total: 1500, average: 1500 },
//   { name: 'Петр', total: 800, average: 800 }
// ]
```

## Дополнительные методы

### 5. find() и findIndex()

```javascript
const users = [
  { name: 'Иван', age: 25 },
  { name: 'Мария', age: 30 },
  { name: 'Петр', age: 35 }
];

// Поиск первого пользователя старше 28 лет
const olderUser = users.find(user => user.age > 28);
console.log(olderUser); // { name: 'Мария', age: 30 }

// Поиск индекса пользователя с именем 'Петр'
const petrIndex = users.findIndex(user => user.name === 'Петр');
console.log(petrIndex); // 2
```

### 6. some() и every()

```javascript
const numbers = [2, 4, 6, 8, 10];

// Проверка: есть ли четные числа?
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// Проверка: все ли числа четные?
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

// Проверка: все ли пользователи взрослые?
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true
```

## Лучшие практики

### 1. Иммутабельность
```javascript
// ✅ Хорошо - создание нового массива
const doubled = numbers.map(num => num * 2);

// ❌ Плохо - изменение исходного массива
numbers.forEach((num, index) => {
  numbers[index] = num * 2;
});
```

### 2. Читаемость кода
```javascript
// ✅ Хорошо - понятные имена переменных
const completedOrders = orders.filter(order => order.status === 'completed');
const totalRevenue = completedOrders.reduce((sum, order) => sum + order.amount, 0);

// ❌ Плохо - неясные имена
const filtered = orders.filter(o => o.s === 'c');
const total = filtered.reduce((s, o) => s + o.a, 0);
```

### 3. Производительность
```javascript
// ✅ Хорошо - цепочка методов
const result = users
  .filter(user => user.age >= 25)
  .map(user => user.name)
  .slice(0, 5);

// ❌ Плохо - множественные итерации
const filtered = users.filter(user => user.age >= 25);
const names = filtered.map(user => user.name);
const result = names.slice(0, 5);
```

## Связанные концепции

- [Map/Set](map-set.md)
- [Деструктуризация](destructuring.md)
- [Итерация по коллекциям](iteration.md)
- [Функциональное программирование](functional-programming.md)

---

**См. также:** [JavaScript/TypeScript концепции](../../glossary/#-javascripttypescript-концепции-урок-4) | [К глоссарию](../../glossary/)
