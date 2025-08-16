---
layout: default
title: Итерация по коллекциям
---

<a href="{{ site.baseurl }}/lessons/glossary/" class="main-link-home">&#8592; К глоссарию</a>

# Итерация по коллекциям

**Итерация по коллекциям** — процесс последовательного перебора элементов массивов, объектов и других коллекций данных в JavaScript.

## Описание

Итерация — это фундаментальная концепция программирования, которая позволяет обрабатывать каждый элемент коллекции по очереди. В JavaScript доступно несколько способов итерации, каждый со своими преимуществами и особенностями.

## Способы итерации

### 1. for...of — итерация по значениям

**Назначение:** Перебирает значения итерируемых объектов (массивы, строки, Set, Map).

```javascript
// Итерация по массиву
const fruits = ['яблоко', 'банан', 'апельсин'];
for (const fruit of fruits) {
  console.log(fruit);
}
// яблоко
// банан
// апельсин

// Итерация по строке
const text = 'Привет';
for (const char of text) {
  console.log(char);
}
// П
// р
// и
// в
// е
// т

// Итерация по Set
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
for (const num of uniqueNumbers) {
  console.log(num);
}
// 1
// 2
// 3
// 4

// Итерация по Map
const userMap = new Map([
  ['user1', { name: 'Иван', age: 25 }],
  ['user2', { name: 'Мария', age: 30 }]
]);

for (const [key, value] of userMap) {
  console.log(`${key}: ${value.name} (${value.age} лет)`);
}
// user1: Иван (25 лет)
// user2: Мария (30 лет)
```

### 2. for...in — итерация по ключам

**Назначение:** Перебирает перечисляемые свойства объекта (включая унаследованные).

```javascript
// Итерация по объекту
const person = {
  name: 'Иван',
  age: 25,
  city: 'Москва'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// name: Иван
// age: 25
// city: Москва

// Итерация по массиву (не рекомендуется)
const numbers = [10, 20, 30];
for (const index in numbers) {
  console.log(`Индекс ${index}: значение ${numbers[index]}`);
}
// Индекс 0: значение 10
// Индекс 1: значение 20
// Индекс 2: значение 30

// Внимание: for...in может включать унаследованные свойства
const arr = [1, 2, 3];
arr.customProperty = 'test';

for (const key in arr) {
  console.log(key, arr[key]);
}
// 0 1
// 1 2
// 2 3
// customProperty test
```

### 3. forEach() — метод массивов

**Назначение:** Выполняет функцию для каждого элемента массива.

```javascript
const users = [
  { name: 'Иван', age: 25 },
  { name: 'Мария', age: 30 },
  { name: 'Петр', age: 35 }
];

// Простая итерация
users.forEach((user, index) => {
  console.log(`${index + 1}. ${user.name} (${user.age} лет)`);
});
// 1. Иван (25 лет)
// 2. Мария (30 лет)
// 3. Петр (35 лет)

// Накопление данных
let totalAge = 0;
users.forEach(user => {
  totalAge += user.age;
});
console.log(`Общий возраст: ${totalAge}`); // Общий возраст: 90

// Обновление элементов
users.forEach(user => {
  user.fullInfo = `${user.name} (${user.age} лет)`;
});
console.log(users);
```

### 4. Классический цикл for

**Назначение:** Традиционный способ итерации с полным контролем над процессом.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Обычная итерация
for (let i = 0; i < numbers.length; i++) {
  console.log(`Элемент ${i}: ${numbers[i]}`);
}

// Итерация в обратном порядке
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`Элемент ${i}: ${numbers[i]}`);
}

// Итерация с шагом
for (let i = 0; i < numbers.length; i += 2) {
  console.log(`Четный индекс ${i}: ${numbers[i]}`);
}

// Итерация по объекту
const person = { name: 'Иван', age: 25, city: 'Москва' };
const keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(`${key}: ${person[key]}`);
}
```

### 5. while и do...while

**Назначение:** Итерация с условием продолжения.

```javascript
// while - проверка условия перед выполнением
let i = 0;
const numbers = [1, 2, 3, 4, 5];

while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

// do...while - выполнение перед проверкой условия
let j = 0;
do {
  console.log(`Выполнено ${j + 1} раз`);
  j++;
} while (j < 3);
```

## Практические примеры

### Пример 1: Фильтрация и преобразование

```javascript
const products = [
  { name: 'Телефон', price: 25000, category: 'электроника' },
  { name: 'Книга', price: 500, category: 'литература' },
  { name: 'Ноутбук', price: 45000, category: 'электроника' },
  { name: 'Ручка', price: 50, category: 'канцелярия' }
];

// Фильтрация дорогих товаров
const expensiveProducts = [];
for (const product of products) {
  if (product.price > 1000) {
    expensiveProducts.push(product);
  }
}

// Преобразование в новый формат
const productInfo = [];
for (const product of products) {
  productInfo.push({
    title: product.name.toUpperCase(),
    cost: `${product.price} ₽`,
    type: product.category
  });
}

console.log(expensiveProducts);
console.log(productInfo);
```

### Пример 2: Группировка данных

```javascript
const students = [
  { name: 'Иван', grade: 85, subject: 'Математика' },
  { name: 'Мария', grade: 92, subject: 'Физика' },
  { name: 'Петр', grade: 78, subject: 'Математика' },
  { name: 'Анна', grade: 95, subject: 'Физика' },
  { name: 'Сергей', grade: 88, subject: 'Математика' }
];

// Группировка по предметам
const groupedBySubject = {};
for (const student of students) {
  if (!groupedBySubject[student.subject]) {
    groupedBySubject[student.subject] = [];
  }
  groupedBySubject[student.subject].push({
    name: student.name,
    grade: student.grade
  });
}

// Подсчет средних оценок
const subjectAverages = {};
for (const subject in groupedBySubject) {
  const grades = groupedBySubject[subject].map(s => s.grade);
  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  subjectAverages[subject] = Math.round(average);
}

console.log('Группировка по предметам:', groupedBySubject);
console.log('Средние оценки:', subjectAverages);
```

### Пример 3: Поиск и валидация

```javascript
const users = [
  { id: 1, name: 'Иван', email: 'ivan@example.com', active: true },
  { id: 2, name: 'Мария', email: 'maria@example.com', active: false },
  { id: 3, name: 'Петр', email: 'petr@example.com', active: true },
  { id: 4, name: 'Анна', email: 'invalid-email', active: true }
];

// Поиск активных пользователей
const activeUsers = [];
for (const user of users) {
  if (user.active) {
    activeUsers.push(user);
  }
}

// Валидация email адресов
const validEmails = [];
const invalidEmails = [];

for (const user of users) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(user.email)) {
    validEmails.push(user.email);
  } else {
    invalidEmails.push(user.email);
  }
}

// Поиск пользователя по ID
function findUserById(id) {
  for (const user of users) {
    if (user.id === id) {
      return user;
    }
  }
  return null;
}

console.log('Активные пользователи:', activeUsers);
console.log('Валидные email:', validEmails);
console.log('Невалидные email:', invalidEmails);
console.log('Пользователь с ID 2:', findUserById(2));
```

## Сравнение способов итерации

| Способ | Преимущества | Недостатки | Применение |
|--------|--------------|------------|------------|
| **for...of** | ✅ Простой синтаксис<br>✅ Работает с любыми итерируемыми объектами<br>✅ Не включает унаследованные свойства | ❌ Нет доступа к индексу<br>❌ Нельзя изменить порядок | Перебор значений массивов, строк, Set, Map |
| **for...in** | ✅ Доступ к ключам<br>✅ Работает с объектами | ❌ Включает унаследованные свойства<br>❌ Не гарантирует порядок | Перебор свойств объектов |
| **forEach()** | ✅ Функциональный стиль<br>✅ Доступ к индексу<br>✅ Цепочка методов | ❌ Только для массивов<br>❌ Нельзя использовать break/continue | Обработка массивов |
| **for** | ✅ Полный контроль<br>✅ Можно использовать break/continue<br>✅ Гибкость | ❌ Более verbose<br>❌ Легко допустить ошибки | Сложная логика итерации |
| **while** | ✅ Гибкость условий<br>✅ Можно пропускать элементы | ❌ Риск бесконечного цикла | Итерация с условиями |

## Лучшие практики

### 1. Выбор правильного способа
```javascript
// ✅ Для массивов - используйте for...of или forEach
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// ✅ Для объектов - используйте for...in или Object.entries
const person = { name: 'Иван', age: 25 };
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// ✅ Для сложной логики - используйте классический for
for (let i = 0; i < numbers.length; i++) {
  if (i === 2) continue; // Пропустить третий элемент
  console.log(numbers[i]);
}
```

### 2. Производительность
```javascript
// ✅ Кэширование длины массива
const arr = [1, 2, 3, 4, 5];
for (let i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i]);
}

// ✅ Использование break для раннего выхода
for (const user of users) {
  if (user.name === 'Иван') {
    console.log('Иван найден!');
    break; // Выход из цикла
  }
}
```

### 3. Читаемость кода
```javascript
// ✅ Понятные имена переменных
for (const product of products) {
  if (product.price > 1000) {
    expensiveProducts.push(product);
  }
}

// ❌ Неясные имена
for (const p of ps) {
  if (p.pr > 1000) {
    ep.push(p);
  }
}
```

## Связанные концепции

- [Методы массивов](array-methods.md)
- [Map/Set](map-set.md)
- [Объекты и их свойства](objects.md)
- [Функциональное программирование](functional-programming.md)

---

**См. также:** [JavaScript/TypeScript концепции](../../glossary/#-javascripttypescript-концепции-урок-4) | [К глоссарию](../../glossary/)
