---
layout: default
title: Ответ к задаче 1.7
---

# Ответ к задаче 1.7: Комбинирование методов массивов

## Описание решения

В этой задаче мы изучаем комбинирование методов массивов для решения сложных задач обработки данных. Цепочки методов позволяют создавать мощные и выразительные операции преобразования данных в функциональном стиле.

## Код решения

```javascript
const users = [
  { name: 'Иван', age: 25, city: 'Москва' },
  { name: 'Мария', age: 30, city: 'СПб' },
  { name: 'Петр', age: 35, city: 'Москва' },
  { name: 'Анна', age: 20, city: 'Казань' },
  { name: 'Сергей', age: 28, city: 'Москва' }
];

// 1. Имена пользователей старше 25 лет
const olderNames = users
  .filter(user => user.age > 25)
  .map(user => user.name);

// 2. Пользователи из Москвы в виде строк
const moscowUsers = users
  .filter(user => user.city === 'Москва')
  .map(user => `${user.name} из ${user.city}`);

// 3. Средний возраст всех пользователей
const averageAge = users
  .map(user => user.age)
  .reduce((sum, age) => sum + age, 0) / users.length;

// 4. Количество пользователей по городам
const cityCount = users.reduce((acc, user) => {
  acc[user.city] = (acc[user.city] || 0) + 1;
  return acc;
}, {});

// 5. Пользователи с длинными именами, отсортированные по возрасту
const longNamesSorted = users
  .filter(user => user.name.length > 4)
  .sort((a, b) => a.age - b.age)
  .map(user => user.name);

// Проверка результатов
console.log('Пользователи старше 25:', olderNames);
console.log('Москвичи:', moscowUsers);
console.log('Средний возраст:', averageAge);
console.log('По городам:', cityCount);
console.log('Длинные имена по возрасту:', longNamesSorted);
```

## Пошаговое объяснение

### 1. Цепочка filter → map
```javascript
const olderNames = users
  .filter(user => user.age > 25)
  .map(user => user.name);
```
- **Шаг 1:** `filter()` отбирает пользователей старше 25 лет
- **Шаг 2:** `map()` извлекает только имена из отфильтрованных пользователей
- **Результат:** `['Мария', 'Петр', 'Сергей']`
- **Принцип:** Сначала фильтруем, потом преобразуем

### 2. Фильтрация и преобразование в строки
```javascript
const moscowUsers = users
  .filter(user => user.city === 'Москва')
  .map(user => `${user.name} из ${user.city}`);
```
- **Шаг 1:** `filter()` выбирает только москвичей
- **Шаг 2:** `map()` создает строки с информацией о пользователе
- **Результат:** `['Иван из Москвы', 'Петр из Москвы', 'Сергей из Москвы']`
- **Шаблонные строки:** Используются для форматирования

### 3. Вычисление среднего значения
```javascript
const averageAge = users
  .map(user => user.age)
  .reduce((sum, age) => sum + age, 0) / users.length;
```
- **Шаг 1:** `map()` извлекает возрасты в отдельный массив
- **Шаг 2:** `reduce()` суммирует все возрасты
- **Шаг 3:** Деление на количество пользователей
- **Результат:** `27.6` (средний возраст)

### 4. Группировка с подсчетом
```javascript
const cityCount = users.reduce((acc, user) => {
  acc[user.city] = (acc[user.city] || 0) + 1;
  return acc;
}, {});
```
- **Метод:** Единственный `reduce()` для сложной агрегации
- **Логика:** Увеличиваем счетчик для каждого города
- **Оператор `||`:** Устанавливает 0 для новых городов
- **Результат:** `{ 'Москва': 3, 'СПб': 1, 'Казань': 1 }`

### 5. Сложная цепочка: filter → sort → map
```javascript
const longNamesSorted = users
  .filter(user => user.name.length > 4)
  .sort((a, b) => a.age - b.age)
  .map(user => user.name);
```
- **Шаг 1:** `filter()` отбирает пользователей с именами длиннее 4 букв
- **Шаг 2:** `sort()` сортирует по возрасту (по возрастанию)
- **Шаг 3:** `map()` извлекает только имена
- **Результат:** `['Сергей', 'Мария', 'Петр']`

## Принципы комбинирования методов

### 1. Порядок имеет значение
```javascript
// Правильно — сначала фильтруем, потом сортируем (меньше элементов)
const result1 = users
  .filter(user => user.age > 25)
  .sort((a, b) => a.age - b.age);

// Менее эффективно — сортируем все, потом фильтруем
const result2 = users
  .sort((a, b) => a.age - b.age)
  .filter(user => user.age > 25);
```

### 2. Каждый метод возвращает новый массив
```javascript
const original = [1, 2, 3];
const result = original
  .map(x => x * 2)    // [2, 4, 6]
  .filter(x => x > 3)  // [4, 6]
  .reduce((a, b) => a + b); // 10

console.log(original); // [1, 2, 3] — не изменился
```

### 3. Типы возвращаемых значений
- `filter()` → массив (подмножество)
- `map()` → массив (преобразованный)
- `sort()` → массив (отсортированный)
- `reduce()` → любое значение
- `find()` → элемент или undefined
- `some()`/`every()` → boolean

## Расширенные примеры

### Сложная обработка данных
```javascript
const products = [
  { name: 'Телефон', price: 50000, category: 'Электроника', inStock: true },
  { name: 'Книга', price: 500, category: 'Книги', inStock: true },
  { name: 'Планшет', price: 30000, category: 'Электроника', inStock: false },
  { name: 'Наушники', price: 5000, category: 'Электроника', inStock: true }
];

// Доступные товары электроники дороже 10000, отсортированные по цене
const expensiveElectronics = products
  .filter(product => product.category === 'Электроника')
  .filter(product => product.inStock)
  .filter(product => product.price > 10000)
  .sort((a, b) => b.price - a.price)
  .map(product => ({ name: product.name, price: product.price }));
```

### Статистика по данным
```javascript
const orders = [
  { id: 1, amount: 1000, status: 'completed' },
  { id: 2, amount: 1500, status: 'completed' },
  { id: 3, amount: 800, status: 'cancelled' },
  { id: 4, amount: 2000, status: 'completed' }
];

// Статистика по завершенным заказам
const completedStats = orders
  .filter(order => order.status === 'completed')
  .reduce((stats, order) => ({
    count: stats.count + 1,
    total: stats.total + order.amount,
    average: (stats.total + order.amount) / (stats.count + 1)
  }), { count: 0, total: 0, average: 0 });
```

### Работа с вложенными данными
```javascript
const departments = [
  {
    name: 'IT',
    employees: [
      { name: 'Иван', salary: 100000 },
      { name: 'Мария', salary: 120000 }
    ]
  },
  {
    name: 'HR',
    employees: [
      { name: 'Петр', salary: 80000 },
      { name: 'Анна', salary: 90000 }
    ]
  }
];

// Все сотрудники с зарплатой выше 90000
const highPaidEmployees = departments
  .flatMap(dept => dept.employees)
  .filter(emp => emp.salary > 90000)
  .map(emp => emp.name)
  .sort();
```

## Оптимизация производительности

### 1. Порядок фильтрации
```javascript
// ✅ Хорошо — сначала дешевые операции
const result = users
  .filter(user => user.age > 18)        // Быстрая проверка
  .filter(user => user.city === 'Москва') // Быстрая проверка
  .map(user => expensiveOperation(user)); // Дорогая операция

// ❌ Плохо — дорогая операция для всех элементов
const result2 = users
  .map(user => expensiveOperation(user))  // Дорогая операция
  .filter(user => user.age > 18);
```

### 2. Избежание лишних операций
```javascript
// ✅ Хорошо — одна операция map
const fullNames = users.map(user => `${user.name} (${user.age} лет)`);

// ❌ Плохо — две операции map
const fullNames2 = users
  .map(user => ({ ...user, displayAge: `${user.age} лет` }))
  .map(user => `${user.name} (${user.displayAge})`);
```

## Альтернативные решения

### Использование циклов
```javascript
// Вместо цепочек методов можно использовать циклы
const olderNames = [];
for (const user of users) {
  if (user.age > 25) {
    olderNames.push(user.name);
  }
}

// Или комбинированный подход
const moscowUsers = [];
for (const user of users) {
  if (user.city === 'Москва') {
    moscowUsers.push(`${user.name} из ${user.city}`);
  }
}
```

### Функциональные утилиты
```javascript
// Создание переиспользуемых функций
const isOlderThan = age => user => user.age > age;
const isFromCity = city => user => user.city === city;
const getName = user => user.name;

const olderNames = users
  .filter(isOlderThan(25))
  .map(getName);

const moscowUsers = users
  .filter(isFromCity('Москва'))
  .map(user => `${user.name} из ${user.city}`);
```

## Практические применения

### 1. Обработка API данных
```javascript
// Обработка ответа от API
fetch('/api/users')
  .then(response => response.json())
  .then(users => users
    .filter(user => user.isActive)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(user => ({ id: user.id, name: user.name, email: user.email }))
  )
  .then(processedUsers => {
    renderUsers(processedUsers);
  });
```

### 2. Валидация и обработка форм
```javascript
const formData = [
  { field: 'name', value: 'Иван', required: true },
  { field: 'email', value: '', required: true },
  { field: 'phone', value: '+7999', required: false }
];

const errors = formData
  .filter(field => field.required)
  .filter(field => !field.value.trim())
  .map(field => `Поле ${field.field} обязательно`);
```

### 3. Создание отчетов
```javascript
const sales = [
  { date: '2024-01-01', amount: 1000, region: 'Москва' },
  { date: '2024-01-02', amount: 1500, region: 'СПб' },
  { date: '2024-01-03', amount: 800, region: 'Москва' }
];

const report = sales
  .filter(sale => sale.region === 'Москва')
  .reduce((acc, sale) => ({
    totalSales: acc.totalSales + sale.amount,
    count: acc.count + 1,
    averageSale: (acc.totalSales + sale.amount) / (acc.count + 1)
  }), { totalSales: 0, count: 0, averageSale: 0 });
```

## Ключевые моменты

### Преимущества комбинирования методов:
1. **Читаемость:** Код выражает намерения декларативно
2. **Композиция:** Сложные операции из простых блоков
3. **Иммутабельность:** Исходные данные не изменяются
4. **Переиспользование:** Методы можно легко переставлять

### Рекомендации:
- **Начинайте с фильтрации** для уменьшения количества элементов
- **Группируйте похожие операции** (несколько filter подряд)
- **Заканчивайте преобразованием** (map в конце цепочки)
- **Используйте reduce** для сложной агрегации

### Когда избегать длинных цепочек:
- Очень сложная логика (лучше разбить на функции)
- Производительность критична (циклы могут быть быстрее)
- Отладка затруднена (промежуточные результаты не видны)

## Проверка результатов

```javascript
console.log('Пользователи старше 25:', olderNames);
// ['Мария', 'Петр', 'Сергей']

console.log('Москвичи:', moscowUsers);
// ['Иван из Москвы', 'Петр из Москвы', 'Сергей из Москвы']

console.log('Средний возраст:', averageAge);
// 27.6

console.log('По городам:', cityCount);
// { 'Москва': 3, 'СПб': 1, 'Казань': 1 }

console.log('Длинные имена по возрасту:', longNamesSorted);
// ['Сергей', 'Мария', 'Петр']
```

💡 **Важно:** Комбинирование методов массивов — мощный инструмент функционального программирования. Оно делает код более выразительным и легким для понимания, но требует понимания порядка операций и их влияния на производительность!
