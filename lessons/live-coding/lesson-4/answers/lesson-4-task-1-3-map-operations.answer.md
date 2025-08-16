# Ответ к задаче 1.3: Создание и работа с Map

## Описание решения

В этой задаче мы изучаем работу с коллекцией Map в JavaScript. Map — это встроенная структура данных для хранения пар ключ-значение, где ключи могут быть любого типа.

## Код решения

```javascript
// 1. Создание Map с начальными данными
const userMap = new Map([
  ['user1', { name: 'John', age: 25, city: 'New York' }],
  ['user2', { name: 'Jane', age: 30, city: 'London' }],
  ['user3', { name: 'Bob', age: 28, city: 'Paris' }]
]);

// 2. Добавление нового пользователя
userMap.set('user4', { name: 'Alice', age: 22, city: 'Berlin' });

// 3. Обновление возраста пользователя user2
const user2 = userMap.get('user2');
if (user2) {
  user2.age = 31;
  userMap.set('user2', user2);
}

// 4. Удаление пользователя user3
userMap.delete('user3');

// 5. Проверка существования пользователя user1
const user1Exists = userMap.has('user1');
console.log('User1 exists:', user1Exists);

// 6. Получение количества пользователей
const userCount = userMap.size;
console.log('Total users:', userCount);

// 7. Вывод всех пользователей
console.log('\nAll users:');
userMap.forEach((user, key) => {
  console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
});

// 8. Создание массива имен
const userNames = Array.from(userMap.values()).map(user => user.name);
console.log('\nUser names:', userNames);

// 9. Поиск пользователя с самым высоким возрастом
let oldestUser = null;
let maxAge = 0;

userMap.forEach(user => {
  if (user.age > maxAge) {
    maxAge = user.age;
    oldestUser = user;
  }
});

console.log('\nOldest user:', oldestUser);

// 10. Очистка Map
userMap.clear();
console.log('\nMap cleared. Size:', userMap.size);
```

## Ключевые моменты

### 1. Создание Map
```javascript
// Пустая Map
const map = new Map();

// Map с начальными значениями
const userMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
]);
```

### 2. Основные методы Map
- **`set(key, value)`** - добавление или обновление пары ключ-значение
- **`get(key)`** - получение значения по ключу
- **`has(key)`** - проверка существования ключа
- **`delete(key)`** - удаление пары по ключу
- **`clear()`** - очистка всей Map
- **`size`** - количество элементов

### 3. Итерация по Map
```javascript
// forEach
userMap.forEach((value, key) => {
  console.log(`${key}: ${value.name}`);
});

// for...of
for (const [key, value] of userMap) {
  console.log(`${key}: ${value.name}`);
}

// Итерация по ключам
for (const key of userMap.keys()) {
  console.log(key);
}

// Итерация по значениям
for (const value of userMap.values()) {
  console.log(value.name);
}
```

### 4. Преобразования
```javascript
// Map в массив
const entries = Array.from(userMap.entries());
const keys = Array.from(userMap.keys());
const values = Array.from(userMap.values());

// Map в объект
const obj = Object.fromEntries(userMap);

// Объект в Map
const map = new Map(Object.entries(obj));
```

## Преимущества Map над объектами

1. **Любые типы ключей** - числа, объекты, функции
2. **Сохранение порядка** вставки
3. **Встроенные методы** для работы с коллекцией
4. **Легкое получение размера** через свойство `size`
5. **Итерация** по ключам, значениям или парам

## Практические примеры

### Пример 1: Кэширование
```javascript
const cache = new Map();

function expensiveOperation(n) {
  if (cache.has(n)) {
    return cache.get(n);
  }
  
  const result = n * n * n; // Имитация сложных вычислений
  cache.set(n, result);
  return result;
}
```

### Пример 2: Подсчет элементов
```javascript
const items = ['apple', 'banana', 'apple', 'orange', 'banana'];
const countMap = new Map();

items.forEach(item => {
  countMap.set(item, (countMap.get(item) || 0) + 1);
});

console.log(countMap); // Map { 'apple' => 2, 'banana' => 2, 'orange' => 1 }
```

### Пример 3: Группировка данных
```javascript
const users = [
  { name: 'John', department: 'IT' },
  { name: 'Jane', department: 'HR' },
  { name: 'Bob', department: 'IT' }
];

const groupedUsers = new Map();

users.forEach(user => {
  if (!groupedUsers.has(user.department)) {
    groupedUsers.set(user.department, []);
  }
  groupedUsers.get(user.department).push(user.name);
});

console.log(groupedUsers);
// Map { 'IT' => ['John', 'Bob'], 'HR' => ['Jane'] }
```

## Лучшие практики

### 1. Проверка существования перед получением
```javascript
// ✅ Хорошо
if (userMap.has('user1')) {
  const user = userMap.get('user1');
  // работа с пользователем
}

// ❌ Плохо
const user = userMap.get('user1'); // может вернуть undefined
```

### 2. Использование значений по умолчанию
```javascript
const userName = userMap.get('user1')?.name || 'Unknown User';
```

### 3. Безопасное обновление
```javascript
const user = userMap.get('user2');
if (user) {
  user.age = 31;
  userMap.set('user2', user);
}
```

## Связанные концепции

- [Map/Set](../../../glossary/lesson-4/map-set.md)
- [Методы массивов](../../../glossary/lesson-4/array-methods.md)
- [Итерация по коллекциям](../../../glossary/lesson-4/iteration.md)
