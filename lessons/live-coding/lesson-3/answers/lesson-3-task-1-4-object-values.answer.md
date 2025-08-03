---
layout: default
title: Ответ к задаче 3.4
---
# Ответ к задаче 3.4: Значения объекта (Object.values)

```js
function getObjectValues(obj) {
  return Object.values(obj);
}
```

**Пошаговое объяснение:**

1. **Что делает Object.values?**
   - `Object.values()` — это статический метод объекта Object
   - Возвращает массив значений всех собственных перечисляемых свойств объекта
   - Порядок значений соответствует порядку ключей в объекте

2. **Примеры использования:**
   ```js
   const person = {
     name: 'John',
     age: 30,
     city: 'New York'
   };
   
   const values = Object.values(person);
   console.log(values); // ['John', 30, 'New York']
   ```

3. **Сравнение с Object.keys:**
   ```js
   const obj = {a: 1, b: 2, c: 3};
   
   Object.keys(obj);   // ['a', 'b', 'c'] - имена свойств
   Object.values(obj); // [1, 2, 3] - значения свойств
   ```

4. **Практические примеры:**
   ```js
   // Сумма всех числовых значений
   const scores = {math: 85, physics: 92, chemistry: 78};
   const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
   console.log(total); // 255
   
   // Проверка наличия определенного значения
   const colors = {red: '#ff0000', green: '#00ff00', blue: '#0000ff'};
   const hasRed = Object.values(colors).includes('#ff0000'); // true
   
   // Подсчет значений
   const fruits = {apple: 5, banana: 3, orange: 7};
   const totalFruits = Object.values(fruits).reduce((sum, count) => sum + count, 0);
   console.log(totalFruits); // 15
   ```

5. **Работа с разными типами значений:**
   ```js
   const mixed = {
     string: 'hello',
     number: 42,
     boolean: true,
     array: [1, 2, 3],
     object: {nested: 'value'}
   };
   
   const values = Object.values(mixed);
   console.log(values);
   // ['hello', 42, true, [1, 2, 3], {nested: 'value'}]
   ```

6. **Важные особенности:**
   - Возвращает только значения собственных свойств
   - Не возвращает значения унаследованных свойств
   - Порядок соответствует порядку ключей
   - Работает с любыми типами значений

7. **Комбинирование с другими методами:**
   ```js
   const user = {name: 'John', age: 30, city: 'NY'};
   
   // Получить все строковые значения
   const strings = Object.values(user).filter(value => typeof value === 'string');
   console.log(strings); // ['John', 'NY']
   
   // Получить максимальное числовое значение
   const numbers = Object.values(user).filter(value => typeof value === 'number');
   const maxAge = Math.max(...numbers);
   console.log(maxAge); // 30
   ```

💡 **Важно:** `Object.values()` возвращает только значения собственных перечисляемых свойств объекта. 