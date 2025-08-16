---
layout: default
title: Деструктуризация
---

<a href="{{ site.baseurl }}/lessons/glossary/" class="main-link-home">&#8592; К глоссарию</a>

# Деструктуризация

**Destructuring** — синтаксис для извлечения значений из объектов и массивов в отдельные переменные.

## Описание

Деструктуризация — это современный синтаксис JavaScript, который позволяет извлекать значения из массивов и объектов, присваивая их отдельным переменным. Это делает код более читаемым и упрощает работу с данными.

## Деструктуризация массивов

### Базовая деструктуризация

```javascript
const numbers = [1, 2, 3, 4, 5];

// Извлечение элементов по порядку
const [first, second, third] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3

// Пропуск элементов
const [a, , c, , e] = numbers;
console.log(a); // 1
console.log(c); // 3
console.log(e); // 5
```

### Деструктуризация с значениями по умолчанию

```javascript
const colors = ['red', 'green'];

// Значения по умолчанию для отсутствующих элементов
const [primary, secondary, tertiary = 'blue'] = colors;
console.log(primary);   // 'red'
console.log(secondary); // 'green'
console.log(tertiary);  // 'blue' (значение по умолчанию)

// Деструктуризация пустого массива
const [] = [];
const [defaultValue = 'empty'] = [];
console.log(defaultValue); // 'empty'
```

### Остаточные параметры (rest)

```javascript
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Извлечение первых элементов и сбор остальных
const [first, second, ...rest] = fruits;
console.log(first);  // 'apple'
console.log(second); // 'banana'
console.log(rest);   // ['orange', 'grape', 'kiwi']

// Остаточные параметры должны быть последними
const [head, ...middle, tail] = fruits; // SyntaxError
```

### Обмен значений переменных

```javascript
let a = 1;
let b = 2;

// Классический способ
let temp = a;
a = b;
b = temp;

// С помощью деструктуризации
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
```

### Деструктуризация вложенных массивов

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Извлечение элементов из вложенных массивов
const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
console.log(a, b, c); // 1 2 3
console.log(d, e, f); // 4 5 6
console.log(g, h, i); // 7 8 9
```

## Деструктуризация объектов

### Базовая деструктуризация

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  occupation: 'Developer'
};

// Извлечение свойств по имени
const { name, age, city } = person;
console.log(name); // 'John'
console.log(age);  // 30
console.log(city); // 'New York'
```

### Деструктуризация с переименованием

```javascript
const user = {
  firstName: 'Jane',
  lastName: 'Doe',
  userAge: 25
};

// Переименование переменных при извлечении
const { firstName: name, lastName: surname, userAge: age } = user;
console.log(name);   // 'Jane'
console.log(surname); // 'Doe'
console.log(age);     // 25
```

### Значения по умолчанию

```javascript
const config = {
  host: 'localhost',
  port: 3000
};

// Значения по умолчанию для отсутствующих свойств
const { host, port, protocol = 'http', timeout = 5000 } = config;
console.log(host);    // 'localhost'
console.log(port);    // 3000
console.log(protocol); // 'http' (значение по умолчанию)
console.log(timeout);  // 5000 (значение по умолчанию)
```

### Комбинирование переименования и значений по умолчанию

```javascript
const settings = {
  theme: 'dark'
};

const { theme: currentTheme = 'light', language: lang = 'en' } = settings;
console.log(currentTheme); // 'dark'
console.log(lang);         // 'en' (значение по умолчанию)
```

### Остаточные параметры для объектов

```javascript
const product = {
  id: 1,
  name: 'Laptop',
  price: 999,
  category: 'Electronics',
  brand: 'TechCorp'
};

// Извлечение конкретных свойств и сбор остальных
const { id, name, ...details } = product;
console.log(id);    // 1
console.log(name);  // 'Laptop'
console.log(details); // { price: 999, category: 'Electronics', brand: 'TechCorp' }
```

### Деструктуризация вложенных объектов

```javascript
const company = {
  name: 'TechCorp',
  address: {
    street: '123 Tech St',
    city: 'Silicon Valley',
    country: 'USA'
  },
  employees: {
    count: 1000,
    departments: ['Engineering', 'Sales', 'Marketing']
  }
};

// Извлечение из вложенных объектов
const { 
  name, 
  address: { street, city, country }, 
  employees: { count, departments } 
} = company;

console.log(name);     // 'TechCorp'
console.log(street);   // '123 Tech St'
console.log(city);     // 'Silicon Valley'
console.log(count);    // 1000
console.log(departments); // ['Engineering', 'Sales', 'Marketing']
```

## Деструктуризация в параметрах функций

### Деструктуризация объектов в параметрах

```javascript
// Без деструктуризации
function printUserInfo(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
}

// С деструктуризацией
function printUserInfo({ name, age, city }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

// С значениями по умолчанию
function printUserInfo({ name = 'Unknown', age = 0, city = 'Unknown' } = {}) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const user = { name: 'John', age: 30, city: 'New York' };
printUserInfo(user);
printUserInfo(); // Работает с пустым объектом
```

### Деструктуризация массивов в параметрах

```javascript
// Деструктуризация массива параметров
function processCoordinates([x, y, z = 0]) {
  console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
}

const coords = [10, 20];
processCoordinates(coords); // X: 10, Y: 20, Z: 0
```

## Практические примеры

### Пример 1: Работа с API ответами

```javascript
// Имитация API ответа
const apiResponse = {
  success: true,
  data: {
    users: [
      { id: 1, name: 'John', email: 'john@example.com' },
      { id: 2, name: 'Jane', email: 'jane@example.com' }
    ],
    total: 2
  },
  message: 'Users retrieved successfully'
};

// Деструктуризация ответа
const { success, data: { users, total }, message } = apiResponse;

if (success) {
  console.log(`Found ${total} users:`);
  users.forEach(({ name, email }) => {
    console.log(`- ${name} (${email})`);
  });
}
```

### Пример 2: Обработка событий

```javascript
// Имитация события
const event = {
  type: 'click',
  target: {
    id: 'submit-btn',
    className: 'btn btn-primary'
  },
  coordinates: { x: 100, y: 200 },
  timestamp: Date.now()
};

// Деструктуризация события
function handleEvent({ type, target: { id, className }, coordinates: { x, y } }) {
  console.log(`Event: ${type} on element ${id} (${className}) at (${x}, ${y})`);
}

handleEvent(event);
```

### Пример 3: Работа с конфигурацией

```javascript
const defaultConfig = {
  theme: 'light',
  language: 'en',
  notifications: true,
  autoSave: true
};

const userConfig = {
  theme: 'dark',
  language: 'ru'
};

// Объединение конфигураций с деструктуризацией
const finalConfig = {
  ...defaultConfig,
  ...userConfig
};

const { theme, language, notifications, autoSave } = finalConfig;
console.log(`Theme: ${theme}, Language: ${language}`);
console.log(`Notifications: ${notifications}, Auto-save: ${autoSave}`);
```

### Пример 4: Обработка массивов

```javascript
const students = [
  { name: 'Alice', grade: 95, subject: 'Math' },
  { name: 'Bob', grade: 87, subject: 'Science' },
  { name: 'Charlie', grade: 92, subject: 'Math' }
];

// Деструктуризация в map
const studentNames = students.map(({ name }) => name);
console.log(studentNames); // ['Alice', 'Bob', 'Charlie']

// Деструктуризация в filter
const mathStudents = students.filter(({ subject }) => subject === 'Math');
console.log(mathStudents);

// Деструктуризация в reduce
const totalGrade = students.reduce((sum, { grade }) => sum + grade, 0);
const averageGrade = totalGrade / students.length;
console.log(`Average grade: ${averageGrade}`);
```

## Лучшие практики

### 1. Используйте значения по умолчанию
```javascript
// ✅ Хорошо
function getUser({ name = 'Anonymous', age = 0 } = {}) {
  return { name, age };
}

// ❌ Плохо
function getUser(user) {
  const name = user && user.name || 'Anonymous';
  const age = user && user.age || 0;
  return { name, age };
}
```

### 2. Избегайте глубокой вложенности
```javascript
// ✅ Хорошо - извлекайте только нужные свойства
const { name, email } = user.profile.contact;

// ❌ Плохо - слишком глубокая деструктуризация
const { profile: { contact: { name, email } } } = user;
```

### 3. Используйте переименование для ясности
```javascript
// ✅ Хорошо - понятные имена переменных
const { firstName: name, lastName: surname } = user;

// ❌ Плохо - неясные имена
const { firstName, lastName } = user;
```

### 4. Обрабатывайте ошибки
```javascript
// ✅ Хорошо - проверка структуры
function processData(data) {
  if (!data || !Array.isArray(data)) {
    throw new Error('Data must be an array');
  }
  
  const [first, ...rest] = data;
  return { first, rest };
}
```

## Связанные концепции

- [Spread/Rest операторы](spread-rest.md)
- [Arrow functions](arrow-functions.md)
- [Map/Set](map-set.md)
- [Hoisting](hoisting.md)

---

**См. также:** [JavaScript/TypeScript концепции](../../glossary/#-javascripttypescript-концепции-урок-4) | [К глоссарию](../../glossary/)
