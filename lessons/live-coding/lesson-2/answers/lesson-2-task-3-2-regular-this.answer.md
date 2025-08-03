---
layout: default
title: Ответ к задаче 3.2
---
# Ответ к задаче 3.2: this в обычной функции

**Ожидаемый вывод:**
```
Hi, I'm Ivan
```

**Пошаговое объяснение:**

1. **Что такое this в обычных функциях?**
   - `this` — это ссылка на объект, который вызывает функцию
   - В обычных функциях `this` определяется в момент вызова
   - `this` указывает на контекст выполнения функции

2. **Как работает this в методах объекта:**
   ```js
   const person = {
     name: 'Ivan',
     greet: function() {
       console.log(`Hi, I'm ${this.name}`);
     }
   };
   
   person.greet(); // "Hi, I'm Ivan"
   ```

3. **Почему this.name = 'Ivan'?**
   - Функция `greet` вызывается как метод объекта `person`
   - `this` внутри функции указывает на объект `person`
   - `this.name` равно `person.name`, то есть `'Ivan'`

4. **Разные способы вызова и их влияние на this:**
   ```js
   const person = {
     name: 'Ivan',
     greet: function() {
       console.log(`Hi, I'm ${this.name}`);
     }
   };
   
   // ✅ Вызов как метод объекта
   person.greet(); // "Hi, I'm Ivan"
   
   // ❌ Вызов как обычная функция
   const greetFunc = person.greet;
   greetFunc(); // "Hi, I'm undefined"
   
   // ✅ Привязка контекста
   const boundGreet = person.greet.bind(person);
   boundGreet(); // "Hi, I'm Ivan"
   ```

5. **Правила определения this:**
   ```js
   // 1. Вызов как метод объекта
   obj.method(); // this = obj
   
   // 2. Вызов как конструктор
   new Constructor(); // this = новый объект
   
   // 3. Вызов как обычная функция
   function(); // this = глобальный объект (в строгом режиме undefined)
   
   // 4. Привязка контекста
   function.bind(obj)(); // this = obj
   ```

6. **Практические примеры:**
   ```js
   // В обработчиках событий
   const button = document.querySelector('button');
   button.addEventListener('click', function() {
     console.log(this); // this = button
   });
   
   // В классах
   class Person {
     constructor(name) {
       this.name = name;
     }
     greet() {
       console.log(`Hi, I'm ${this.name}`);
     }
   }
   ```

💡 **Важно:** В обычных функциях `this` определяется в момент вызова, а не в момент объявления.