---
layout: default
title: Ответ к задаче 3.5
---
# Ответ к задаче 3.5: Сумма элементов массива (reduce)

```js
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
```

**Пошаговое объяснение:**

1. **Что делает метод reduce?**
   - `reduce` — это метод массива, который "сворачивает" массив к одному значению
   - Он проходит по всем элементам и накапливает результат
   - Возвращает финальное значение (может быть число, строка, объект, массив)

2. **Параметры функции reduce:**
   - `acc` (аккумулятор) — накапливает результат
   - `curr` (current) — текущий элемент массива
   - `0` — начальное значение аккумулятора

3. **Как работает пошагово:**
   ```js
   const numbers = [1, 2, 3, 4];
   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
   // sum = 10
   
   // Пошагово:
   // Итерация 1: acc = 0, curr = 1 → acc = 0 + 1 = 1
   // Итерация 2: acc = 1, curr = 2 → acc = 1 + 2 = 3
   // Итерация 3: acc = 3, curr = 3 → acc = 3 + 3 = 6
   // Итерация 4: acc = 6, curr = 4 → acc = 6 + 4 = 10
   ```

4. **Сравнение с обычным циклом:**
   ```js
   // С reduce (функциональный стиль):
   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
   
   // С циклом (императивный стиль):
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
   }
   ```

5. **Другие примеры использования reduce:**
   ```js
   // Найти максимальное число
   const max = numbers.reduce((acc, curr) => Math.max(acc, curr));
   
   // Создать объект из массива
   const users = [{name: 'John', age: 25}, {name: 'Jane', age: 30}];
   const userMap = users.reduce((acc, user) => {
     acc[user.name] = user.age;
     return acc;
   }, {});
   // {John: 25, Jane: 30}
   
   // Подсчитать количество элементов
   const fruits = ['apple', 'banana', 'apple', 'orange'];
   const count = fruits.reduce((acc, fruit) => {
     acc[fruit] = (acc[fruit] || 0) + 1;
     return acc;
   }, {});
   // {apple: 2, banana: 1, orange: 1}
   ```

6. **Важные особенности:**
   - Всегда нужно указывать начальное значение (второй параметр)
   - Функция должна возвращать аккумулятор
   - Если массив пустой, возвращается начальное значение

💡 **Важно:** `reduce` — самый мощный метод массива, может заменить многие другие методы. 