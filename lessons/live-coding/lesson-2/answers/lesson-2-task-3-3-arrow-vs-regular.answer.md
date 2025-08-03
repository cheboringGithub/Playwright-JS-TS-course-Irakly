---
layout: default
title: Ответ к задаче 3.3
---
# Ответ к задаче 3.3: this в стрелочной и обычной функции

**Код:**

```js
const user = {
  name: "Elena",
  sayHiArrow: () => {
    console.log(`Hi, I'm ${this.name}`);
  },
  sayHiRegular() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

user.sayHiArrow();
user.sayHiRegular();
```

**Ожидаемый вывод:**
```
Hi, I'm undefined
Hi, I'm Elena
```

**Пошаговое объяснение:**

1. **Ключевые различия между стрелочными и обычными функциями:**

   **Стрелочные функции:**
   - Не имеют собственного `this`
   - Берет `this` из внешнего контекста (лексический this)
   - Нельзя использовать как конструктор
   - Нет объекта `arguments`

   **Обычные функции:**
   - Имеют собственный `this`
   - `this` определяется в момент вызова
   - Можно использовать как конструктор
   - Есть объект `arguments`

2. **Анализ кода пошагово:**

   ```js
   // Стрелочная функция
   sayHiArrow: () => {
     console.log(`Hi, I'm ${this.name}`); // this = глобальный объект
   }
   
   // Обычная функция
   sayHiRegular() {
     console.log(`Hi, I'm ${this.name}`); // this = объект user
   }
   ```

3. **Почему разные результаты?**

   **Стрелочная функция:**
   - `this` берется из глобального контекста
   - В глобальном объекте нет свойства `name`
   - Поэтому `this.name` = `undefined`

   **Обычная функция:**
   - `this` указывает на объект `user`
   - `user.name` = `"Elena"`
   - Поэтому `this.name` = `"Elena"`

4. **Визуализация контекста:**

   ```
   Глобальный контекст:
   this = global (нет свойства name)
   
   Объект user:
   {
     name: "Elena",
     sayHiArrow: () => { /* this = global */ },
     sayHiRegular() { /* this = user */ }
   }
   ```

5. **Когда использовать каждый тип:**

   ```js
   // ✅ Стрелочные функции — для коротких операций
   const numbers = [1, 2, 3];
   const doubled = numbers.map(x => x * 2);
   
   // ✅ Стрелочные функции — для сохранения this
   const button = document.querySelector('button');
   button.addEventListener('click', () => {
     console.log(this); // this из внешнего контекста
   });
   
   // ✅ Обычные функции — для методов объектов
   const person = {
     name: 'John',
     greet() {
       console.log(`Hi, I'm ${this.name}`);
     }
   };
   
   // ✅ Обычные функции — для конструкторов
   function Person(name) {
     this.name = name;
   }
   ```

6. **Как исправить стрелочную функцию:**

   ```js
   const user = {
     name: "Elena",
     // ❌ Неправильно
     sayHiArrow: () => {
       console.log(`Hi, I'm ${this.name}`); // undefined
     },
     // ✅ Правильно
     sayHiRegular() {
       console.log(`Hi, I'm ${this.name}`); // "Elena"
     },
     // ✅ Альтернатива — обычная функция
     sayHiArrowFixed: function() {
       console.log(`Hi, I'm ${this.name}`); // "Elena"
     }
   };
   ```

💡 **Важно:** Используйте обычные функции для методов объектов, стрелочные — для коротких операций и сохранения контекста.

📖 **Подробнее о различиях между стрелочными и обычными функциями** 