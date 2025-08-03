---
layout: default
title: Ответ к задаче 3.1
---
# Ответ к задаче 3.1: this в стрелочной функции

**Ожидаемый вывод:**
```
Hi, I'm undefined
```

**Пошаговое объяснение:**

1. **Что такое this?**
   - `this` — это ключевое слово, которое указывает на контекст выполнения
   - В обычных функциях `this` зависит от того, как функция вызвана
   - В стрелочных функциях `this` берется из внешнего контекста (лексический this)

2. **Как работает this в стрелочных функциях:**
   ```js
   const person = {
     name: 'John',
     greet: () => {
       console.log(`Hi, I'm ${this.name}`);
     }
   };
   
   person.greet(); // "Hi, I'm undefined"
   ```

3. **Почему undefined?**
   - Стрелочная функция не имеет собственного `this`
   - Она берет `this` из внешнего контекста (глобальный объект)
   - В глобальном объекте нет свойства `name`
   - Поэтому `this.name` равно `undefined`

4. **Сравнение с обычной функцией:**
   ```js
   const person = {
     name: 'John',
     // Стрелочная функция (неправильно)
     greetArrow: () => {
       console.log(`Hi, I'm ${this.name}`); // undefined
     },
     // Обычная функция (правильно)
     greetRegular: function() {
       console.log(`Hi, I'm ${this.name}`); // "John"
     }
   };
   ```

5. **Как исправить стрелочную функцию:**
   ```js
   const person = {
     name: 'John',
     greet: function() {
       // Используем стрелочную функцию внутри обычной
       setTimeout(() => {
         console.log(`Hi, I'm ${this.name}`); // "John"
       }, 1000);
     }
   };
   ```

6. **Когда использовать стрелочные функции:**
   ```js
   // ✅ Хорошо — для коротких функций
   const numbers = [1, 2, 3];
   const doubled = numbers.map(x => x * 2);
   
   // ✅ Хорошо — для сохранения this
   const button = document.querySelector('button');
   button.addEventListener('click', () => {
     console.log(this); // this из внешнего контекста
   });
   
   // ❌ Плохо — для методов объектов
   const obj = {
     name: 'John',
     greet: () => console.log(this.name) // undefined
   };
   ```

💡 **Важно:** Стрелочные функции не имеют собственного `this`, они берут его из внешнего контекста.