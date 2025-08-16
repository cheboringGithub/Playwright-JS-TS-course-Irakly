---
layout: default
title: Hoisting
---

<a href="{{ site.baseurl }}/lessons/glossary/" class="main-link-home">&#8592; К глоссарию</a>

# Hoisting

**Hoisting** — механизм JavaScript, при котором объявления переменных и функций "поднимаются" в начало их области видимости.

## Описание

Hoisting (поднятие) — это особенность JavaScript, при которой объявления переменных и функций перемещаются в начало их области видимости на этапе компиляции, до выполнения кода. Это означает, что переменные и функции можно использовать до их фактического объявления в коде.

## Как работает hoisting

### С переменными var

```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

JavaScript интерпретирует это как:
```javascript
var a;           // Объявление поднимается вверх
console.log(a);  // undefined (инициализация еще не произошла)
a = 10;         // Присваивание происходит на месте
console.log(a);  // 10
```

### С функциями

```javascript
sayHello(); // "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

JavaScript интерпретирует это как:
```javascript
function sayHello() {  // Объявление функции поднимается полностью
  console.log("Hello, World!");
}

sayHello(); // "Hello, World!"
```

## Особенности hoisting

### 1. Только объявления поднимаются

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;
```

### 2. Инициализация остается на месте

```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

### 3. Function declarations vs Function expressions

```javascript
// Function declaration - поднимается полностью
sayHi(); // "Hi!"

function sayHi() {
  console.log("Hi!");
}

// Function expression - поднимается только объявление переменной
sayBye(); // TypeError: sayBye is not a function

var sayBye = function() {
  console.log("Bye!");
};
```

## Hoisting в разных областях видимости

### Глобальная область видимости

```javascript
console.log(globalVar); // undefined
var globalVar = "I'm global";

console.log(globalFunc()); // "Global function"

function globalFunc() {
  return "Global function";
}
```

### Функциональная область видимости

```javascript
function testHoisting() {
  console.log(localVar); // undefined
  var localVar = "I'm local";
  
  console.log(localFunc()); // "Local function"
  
  function localFunc() {
    return "Local function";
  }
}

testHoisting();
```

### Блочная область видимости (let/const)

```javascript
function testBlockHoisting() {
  console.log(blockVar); // ReferenceError: Cannot access 'blockVar' before initialization
  
  {
    let blockVar = "I'm in block";
    console.log(blockVar); // "I'm in block"
  }
}
```

## Практические примеры

### Пример 1: Понимание порядка выполнения

```javascript
var name = "John";

function getName() {
  console.log(name); // undefined
  
  var name = "Jane";
  console.log(name); // "Jane"
}

getName();
console.log(name); // "John"
```

### Пример 2: Избежание hoisting проблем

```javascript
// ❌ Плохо - может вызвать путаницу
console.log(x);
var x = 5;

// ✅ Хорошо - четкий порядок
var x = 5;
console.log(x);

// ✅ Еще лучше - используйте let/const
let y = 10;
console.log(y);
```

### Пример 3: Hoisting с функциями

```javascript
// ❌ Может работать неожиданно
if (true) {
  function conditionalFunc() {
    return "Function in if block";
  }
}

console.log(conditionalFunc()); // Может работать по-разному в разных браузерах

// ✅ Лучше использовать function expressions
let conditionalFunc;
if (true) {
  conditionalFunc = function() {
    return "Function in if block";
  };
}
```

## Лучшие практики

### 1. Объявляйте переменные в начале области видимости
```javascript
function goodPractice() {
  // Объявляем все переменные в начале
  let name = "John";
  let age = 30;
  let city = "New York";
  
  // Логика функции
  console.log(`${name} is ${age} years old from ${city}`);
}
```

### 2. Используйте let и const вместо var
```javascript
// ❌ var - подвержен hoisting
var oldWay = "not recommended";

// ✅ let/const - более предсказуемое поведение
let modernWay = "recommended";
const constantValue = "cannot be changed";
```

### 3. Объявляйте функции перед использованием
```javascript
// ✅ Четкий порядок
function calculateSum(a, b) {
  return a + b;
}

const result = calculateSum(5, 3);
console.log(result); // 8
```

### 4. Используйте strict mode
```javascript
"use strict";

// В strict mode некоторые hoisting проблемы становятся ошибками
function strictFunction() {
  // Это вызовет ошибку в strict mode
  // undeclaredVar = "value";
  
  let declaredVar = "value";
  console.log(declaredVar);
}
```

## Отладка hoisting

### Инструменты разработчика
```javascript
// Используйте console.log для отслеживания
console.log("Step 1:", typeof variableName);
var variableName = "value";
console.log("Step 2:", variableName);

// Используйте debugger для пошаговой отладки
debugger;
function testFunction() {
  console.log("Inside function");
}
```

### Проверка области видимости
```javascript
function checkScope() {
  console.log("Before declaration:", typeof localVar);
  
  var localVar = "local";
  
  console.log("After declaration:", localVar);
  console.log("In scope:", typeof localVar);
}

checkScope();
console.log("Outside scope:", typeof localVar);
```

## Связанные концепции

- [Closure (Замыкание)](closure.md)
- [Destructuring](destructuring.md)
- [Arrow functions](arrow-functions.md)
- [Map/Set](map-set.md)

---

**См. также:** [JavaScript/TypeScript концепции](../../glossary/#-javascripttypescript-концепции-урок-4) | [К глоссарию](../../glossary/)
