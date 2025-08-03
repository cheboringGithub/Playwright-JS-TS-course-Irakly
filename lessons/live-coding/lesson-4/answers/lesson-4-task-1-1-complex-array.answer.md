---
layout: default
title: Ответ к задаче 3.6
---
# Ответ к задаче 3.6: Обработка пользователей (составная задача)

```js
function processUsers(users) {
  return users
    .filter(user => user.age >= 18)
    .map(({name, age}) => ({name, age, isAdult: true}))
    .sort((a, b) => a.age - b.age);
}
```

**Пошаговое объяснение:**

1. **Что делает эта функция?**
   - Принимает массив пользователей
   - Фильтрует только взрослых (18+)
   - Извлекает нужные поля и добавляет флаг isAdult
   - Сортирует по возрасту

2. **Разбор каждого метода:**

   **filter — фильтрация по возрасту:**
   ```js
   .filter(user => user.age >= 18)
   ```
   - Проходит по всем пользователям
   - Оставляет только тех, кому 18 лет и больше
   - Возвращает новый массив с отфильтрованными пользователями

   **map — преобразование данных:**
   ```js
   .map(({name, age}) => ({name, age, isAdult: true}))
   ```
   - Использует деструктуризацию `{name, age}` для извлечения полей
   - Создает новый объект с нужными полями
   - Добавляет поле `isAdult: true`

   **sort — сортировка:**
   ```js
   .sort((a, b) => a.age - b.age)
   ```
   - Сортирует по возрасту в возрастающем порядке
   - `a.age - b.age` возвращает отрицательное число, если a младше b

3. **Пример работы:**
   ```js
   const users = [
     {id: 1, name: "Alice", age: 25, email: "alice@test.com"},
     {id: 2, name: "Bob", age: 17, email: "bob@test.com"},
     {id: 3, name: "Charlie", age: 30, email: "charlie@test.com"}
   ];
   
   const result = processUsers(users);
   // Результат:
   // [
   //   {name: "Alice", age: 25, isAdult: true},
   //   {name: "Charlie", age: 30, isAdult: true}
   // ]
   ```

4. **Что такое деструктуризация?**
   ```js
   // Обычный способ:
   .map(user => ({name: user.name, age: user.age, isAdult: true}))
   
   // С деструктуризацией (короче):
   .map(({name, age}) => ({name, age, isAdult: true}))
   ```

5. **Альтернативное решение с промежуточными переменными:**
   ```js
   function processUsers(users) {
     const adults = users.filter(user => user.age >= 18);
     const processed = adults.map(({name, age}) => ({name, age, isAdult: true}));
     return processed.sort((a, b) => a.age - b.age);
   }
   ```

6. **Важные особенности:**
   - Цепочка методов читается слева направо
   - Каждый метод возвращает новый массив
   - Исходный массив не изменяется
   - Деструктуризация делает код более читаемым

💡 **Важно:** Цепочка методов массивов позволяет писать функциональный код без промежуточных переменных. 