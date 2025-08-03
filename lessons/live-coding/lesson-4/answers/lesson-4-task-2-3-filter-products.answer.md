---
layout: default
title: Ответ к задаче 3.10: Фильтрация и преобразование товаров
---
# Ответ к задаче 3.10: Фильтрация и преобразование товаров

```js
function getAvailableProducts(products) {
  return products
    .filter(({isAvailable}) => isAvailable)
    .map(({name, price, ...rest}) => ({name, price, ...rest}));
}
```

**Пошаговое объяснение:**

1. **Что делает эта функция?**
   - Принимает массив товаров
   - Фильтрует только доступные товары
   - Преобразует структуру объектов
   - Возвращает новый массив с обработанными товарами

2. **Разбор каждого метода:**

   **filter — фильтрация доступных товаров:**
   ```js
   .filter(({isAvailable}) => isAvailable)
   ```
   - Проходит по всем товарам
   - Оставляет только те, у которых `isAvailable: true`
   - Использует деструктуризацию `{isAvailable}`

   **map — преобразование структуры:**
   ```js
   .map(({name, price, ...rest}) => ({name, price, ...rest}))
   ```
   - Извлекает поля `name` и `price`
   - Собирает остальные свойства в `...rest`
   - Создает новый объект с нужной структурой

3. **Пример работы:**
   ```js
   const products = [
     {name: "Phone", price: 500, isAvailable: true, color: "black"},
     {name: "Tablet", price: 800, isAvailable: false, color: "white"},
     {name: "Laptop", price: 1200, isAvailable: true, brand: "Apple"}
   ];
   
   const result = getAvailableProducts(products);
   // Результат:
   // [
   //   {name: "Phone", price: 500, color: "black"},
   //   {name: "Laptop", price: 1200, brand: "Apple"}
   // ]
   ```

4. **Что такое spread оператор (...rest)?**
   ```js
   const obj = {a: 1, b: 2, c: 3, d: 4};
   
   // Обычный способ:
   const {a, b, ...rest} = obj;
   // a = 1, b = 2, rest = {c: 3, d: 4}
   
   // В нашем случае:
   const {name, price, ...rest} = product;
   // name = "Phone", price = 500, rest = {color: "black"}
   ```

5. **Пошаговое выполнение:**
   ```js
   // Исходный товар: {name: "Phone", price: 500, isAvailable: true, color: "black"}
   
   // Шаг 1: filter проверяет isAvailable: true → товар проходит
   
   // Шаг 2: map преобразует объект
   const {name, price, ...rest} = {name: "Phone", price: 500, isAvailable: true, color: "black"};
   // name = "Phone", price = 500, rest = {isAvailable: true, color: "black"}
   
   // Шаг 3: создается новый объект
   return {name, price, ...rest};
   // Результат: {name: "Phone", price: 500, color: "black"}
   ```

6. **Альтернативное решение без spread:**
   ```js
   function getAvailableProducts(products) {
     return products
       .filter(product => product.isAvailable)
       .map(product => ({
         name: product.name,
         price: product.price,
         color: product.color,
         brand: product.brand
         // Нужно знать все возможные свойства заранее
       }));
   }
   ```

7. **Важные особенности:**
   - `filter` убирает недоступные товары
   - `map` изменяет структуру объектов
   - Spread оператор копирует все остальные свойства
   - Исходный массив не изменяется
   - Код работает с любыми дополнительными свойствами

💡 **Важно:** Spread оператор позволяет гибко работать с объектами, не зная всех их свойств заранее. 