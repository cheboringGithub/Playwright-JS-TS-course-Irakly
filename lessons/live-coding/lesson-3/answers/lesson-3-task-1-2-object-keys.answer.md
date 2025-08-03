---
layout: default
title: Ответ к задаче 3.2
---
# Ответ к задаче 3.2: Ключи объекта (Object.keys)

```js
function getObjectKeys(obj) {
  return Object.keys(obj);
}
```

**Пошаговое объяснение:**

1. **Что делает Object.keys?**
   - `Object.keys()` — это статический метод объекта Object
   - Возвращает массив строк с именами всех собственных перечисляемых свойств объекта
   - Порядок ключей соответствует порядку их добавления в объект

2. **Примеры использования:**
   ```js
   const person = {
     name: 'John',
     age: 30,
     city: 'New York'
   };
   
   const keys = Object.keys(person);
   console.log(keys); // ['name', 'age', 'city']
   ```

3. **Что такое "собственные" свойства?**
   ```js
   const child = Object.create({parent: 'value'});
   child.own = 'property';
   
   console.log(Object.keys(child)); // ['own'] - только собственные
   console.log(child.parent); // 'value' - унаследованное свойство
   ```

4. **Сравнение с другими методами Object:**
   ```js
   const obj = {a: 1, b: 2, c: 3};
   
   Object.keys(obj);    // ['a', 'b', 'c'] - только ключи
   Object.values(obj);  // [1, 2, 3] - только значения
   Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]] - пары ключ-значение
   ```

5. **Практические примеры:**
   ```js
   // Проверка наличия свойств
   const user = {name: 'John', age: 30};
   const hasName = Object.keys(user).includes('name'); // true
   
   // Подсчет свойств
   const propertyCount = Object.keys(user).length; // 2
   
   // Перебор всех свойств
   Object.keys(user).forEach(key => {
     console.log(`${key}: ${user[key]}`);
   });
   ```

6. **Важные особенности:**
   - Возвращает только перечисляемые свойства
   - Не возвращает унаследованные свойства
   - Порядок соответствует порядку добавления (ES2015+)
   - Работает с любыми объектами, включая массивы

7. **Сравнение с циклом for...in:**
   ```js
   const obj = {a: 1, b: 2};
   
   // Object.keys (рекомендуется)
   Object.keys(obj).forEach(key => {
     console.log(key, obj[key]);
   });
   
   // for...in (может включать унаследованные свойства)
   for (let key in obj) {
     if (obj.hasOwnProperty(key)) {
       console.log(key, obj[key]);
     }
   }
   ```

💡 **Важно:** `Object.keys()` возвращает только собственные перечисляемые свойства объекта. 