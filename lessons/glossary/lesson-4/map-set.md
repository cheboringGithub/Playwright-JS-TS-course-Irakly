---
layout: default
title: Map и Set
---

<a href="{{ site.baseurl }}/lessons/glossary/" class="main-link-home">&#8592; К глоссарию</a>

# Map и Set

**Map и Set** — встроенные коллекции JavaScript для хранения уникальных значений и пар ключ-значение.

## Описание

Map и Set — это современные структуры данных в JavaScript, которые предоставляют более функциональные альтернативы обычным объектам и массивам для определенных задач.

## Map

Map — это коллекция пар ключ-значение, где ключи могут быть любого типа.

### Создание Map

```javascript
// Пустая Map
const map = new Map();

// Map с начальными значениями
const userMap = new Map([
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York']
]);

// Создание из объекта
const obj = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(obj));
```

### Основные методы Map

```javascript
const map = new Map();

// Добавление элементов
map.set('key1', 'value1');
map.set('key2', 'value2');

// Получение значений
console.log(map.get('key1')); // 'value1'

// Проверка существования ключа
console.log(map.has('key1')); // true

// Размер Map
console.log(map.size); // 2

// Удаление элемента
map.delete('key1');

// Очистка Map
map.clear();
```

### Итерация по Map

```javascript
const userMap = new Map([
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York']
]);

// Итерация по ключам и значениям
for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}

// Итерация только по ключам
for (const key of userMap.keys()) {
  console.log(key);
}

// Итерация только по значениям
for (const value of userMap.values()) {
  console.log(value);
}

// Использование forEach
userMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

### Преимущества Map над объектами

```javascript
// Map позволяет использовать любой тип ключа
const map = new Map();
map.set(1, 'number key');
map.set('1', 'string key');
map.set({}, 'object key');
map.set(() => {}, 'function key');

// Объекты ограничены строками и символами
const obj = {};
obj[1] = 'number key';        // Преобразуется в строку '1'
obj['1'] = 'string key';      // Перезаписывает предыдущее значение
obj[{}] = 'object key';       // Преобразуется в '[object Object]'
```

## Set

Set — это коллекция уникальных значений любого типа.

### Создание Set

```javascript
// Пустой Set
const set = new Set();

// Set с начальными значениями
const numberSet = new Set([1, 2, 3, 4, 5]);

// Set автоматически удаляет дубликаты
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log(uniqueNumbers); // Set {1, 2, 3, 4}
```

### Основные методы Set

```javascript
const set = new Set();

// Добавление элементов
set.add('value1');
set.add('value2');
set.add('value1'); // Дубликат не добавится

// Проверка существования значения
console.log(set.has('value1')); // true

// Размер Set
console.log(set.size); // 2

// Удаление элемента
set.delete('value1');

// Очистка Set
set.clear();
```

### Итерация по Set

```javascript
const fruitSet = new Set(['apple', 'banana', 'orange']);

// Обычный цикл for...of
for (const fruit of fruitSet) {
  console.log(fruit);
}

// Использование forEach
fruitSet.forEach(fruit => {
  console.log(fruit);
});

// Преобразование в массив
const fruitArray = Array.from(fruitSet);
```

## Практические примеры

### Пример 1: Удаление дубликатов из массива

```javascript
const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

const names = ['John', 'Jane', 'John', 'Bob', 'Jane'];
const uniqueNames = [...new Set(names)];
console.log(uniqueNames); // ['John', 'Jane', 'Bob']
```

### Пример 2: Подсчет уникальных элементов

```javascript
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const itemCount = new Map();

items.forEach(item => {
  itemCount.set(item, (itemCount.get(item) || 0) + 1);
});

console.log(itemCount);
// Map {
//   'apple' => 3,
//   'banana' => 2,
//   'orange' => 1
// }
```

### Пример 3: Кэширование результатов функций

```javascript
const cache = new Map();

function expensiveCalculation(n) {
  if (cache.has(n)) {
    console.log('Returning cached result');
    return cache.get(n);
  }
  
  console.log('Calculating...');
  const result = n * n * n; // Имитация сложных вычислений
  cache.set(n, result);
  return result;
}

console.log(expensiveCalculation(5)); // Calculating... 125
console.log(expensiveCalculation(5)); // Returning cached result 125
```

### Пример 4: Отслеживание уникальных пользователей

```javascript
const activeUsers = new Set();
const userSessions = new Map();

function userLogin(userId, sessionId) {
  activeUsers.add(userId);
  userSessions.set(userId, sessionId);
  console.log(`User ${userId} logged in. Active users: ${activeUsers.size}`);
}

function userLogout(userId) {
  activeUsers.delete(userId);
  userSessions.delete(userId);
  console.log(`User ${userId} logged out. Active users: ${activeUsers.size}`);
}

userLogin('user1', 'session123');
userLogin('user2', 'session456');
userLogin('user1', 'session789'); // Дубликат не добавится
userLogout('user1');
```

## Преобразования

### Map ↔ Объект

```javascript
// Map в объект
const map = new Map([['a', 1], ['b', 2]]);
const obj = Object.fromEntries(map);
console.log(obj); // { a: 1, b: 2 }

// Объект в Map
const obj2 = { x: 10, y: 20 };
const map2 = new Map(Object.entries(obj2));
console.log(map2); // Map { 'x' => 10, 'y' => 20 }
```

### Set ↔ Массив

```javascript
// Set в массив
const set = new Set([1, 2, 3]);
const array = [...set];
console.log(array); // [1, 2, 3]

// Массив в Set
const array2 = [1, 2, 2, 3, 3];
const set2 = new Set(array2);
console.log(set2); // Set { 1, 2, 3 }
```

## Лучшие практики

### 1. Когда использовать Map
- Ключи не являются строками
- Нужно часто добавлять/удалять пары
- Требуется итерация по ключам и значениям
- Нужно отслеживать размер коллекции

### 2. Когда использовать Set
- Нужно хранить уникальные значения
- Требуется быстрая проверка существования
- Нужно удалить дубликаты из массива
- Требуется итерация по уникальным элементам

### 3. Производительность
```javascript
// Map и Set обеспечивают O(1) для основных операций
const map = new Map();
const set = new Set();

// Быстрые операции
map.set('key', 'value');     // O(1)
map.get('key');              // O(1)
map.has('key');              // O(1)
map.delete('key');           // O(1)

set.add('value');            // O(1)
set.has('value');            // O(1)
set.delete('value');         // O(1)
```

## Связанные концепции

- [Hoisting](hoisting.md)
- [Closure (Замыкание)](closure.md)
- [Destructuring](destructuring.md)
- [Arrow functions](arrow-functions.md)

---

**См. также:** [JavaScript/TypeScript концепции](../../glossary/#-javascripttypescript-концепции-урок-4) | [К глоссарию](../../glossary/)
