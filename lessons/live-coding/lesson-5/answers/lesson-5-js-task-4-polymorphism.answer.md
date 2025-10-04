# Ответ к задаче 4: Полиморфизм (JavaScript)

## Решение

```javascript
// Базовый класс Employee
class Employee {
  constructor(name, position, baseSalary) {
    this.name = name;
    this.position = position;
    this.baseSalary = baseSalary;
  }

  calculateSalary() {
    return this.baseSalary;
  }

  getInfo() {
    return `${this.name} - ${this.position}`;
  }

  work() {
    return `${this.name} выполняет общие задачи`;
  }
}

// Класс Developer, наследующий от Employee
class Developer extends Employee {
  constructor(name, position, baseSalary, programmingLanguages) {
    super(name, position, baseSalary);
    this.programmingLanguages = programmingLanguages;
  }

  // Переопределение метода calculateSalary
  calculateSalary() {
    return this.baseSalary * 1.2; // +20% к базовой зарплате
  }

  // Переопределение метода work
  work() {
    return `${this.name} пишет код на ${this.programmingLanguages.join(', ')}`;
  }

  // Специфичный метод для разработчика
  code() {
    return `${this.name} создает новую функцию`;
  }
}

// Класс Manager, наследующий от Employee
class Manager extends Employee {
  constructor(name, position, baseSalary, teamSize) {
    super(name, position, baseSalary);
    this.teamSize = teamSize;
  }

  // Переопределение метода calculateSalary
  calculateSalary() {
    return this.baseSalary * 1.3; // +30% к базовой зарплате
  }

  // Переопределение метода work
  work() {
    return `${this.name} управляет командой из ${this.teamSize} человек`;
  }

  // Специфичный метод для менеджера
  conductMeeting() {
    return `${this.name} проводит планерку`;
  }
}

// Класс Designer, наследующий от Employee
class Designer extends Employee {
  constructor(name, position, baseSalary, designTools) {
    super(name, position, baseSalary);
    this.designTools = designTools;
  }

  // Переопределение метода calculateSalary
  calculateSalary() {
    return this.baseSalary * 1.15; // +15% к базовой зарплате
  }

  // Переопределение метода work
  work() {
    return `${this.name} создает дизайны в ${this.designTools.join(', ')}`;
  }

  // Специфичный метод для дизайнера
  createDesign() {
    return `${this.name} создает новый макет`;
  }
}

// Тестирование
const developer = new Developer('Алексей', 'Senior Developer', 80000, ['JavaScript', 'TypeScript', 'Python']);
const manager = new Manager('Мария', 'Project Manager', 90000, 8);
const designer = new Designer('Анна', 'UI/UX Designer', 70000, ['Figma', 'Sketch', 'Adobe XD']);

const employees = [developer, manager, designer];

console.log('=== Информация о сотрудниках ===');
employees.forEach(emp => {
  console.log(emp.getInfo());
  console.log(`Зарплата: ${emp.calculateSalary()}`);
  console.log(`Работа: ${emp.work()}`);
  console.log('---');
});

console.log('=== Специфичные действия ===');
console.log(developer.code()); // "Алексей создает новую функцию"
console.log(manager.conductMeeting()); // "Мария проводит планерку"
console.log(designer.createDesign()); // "Анна создает новый макет"

// Полиморфное использование
console.log('=== Полиморфное выполнение работы ===');
employees.forEach(emp => {
  console.log(`${emp.name} (${emp.position}): ${emp.work()}`);
});
// "Алексей (Senior Developer): Алексей пишет код на JavaScript, TypeScript, Python"
// "Мария (Project Manager): Мария управляет командой из 8 человек"
// "Анна (UI/UX Designer): Анна создает дизайны в Figma, Sketch, Adobe XD"
```

## Объяснение

**Полиморфизм в JavaScript:**
- **Один интерфейс** — метод `work()` у всех сотрудников
- **Разные реализации** — каждый тип сотрудника работает по-своему
- **Переопределение методов** — замена реализации в наследниках
- **Полиморфное использование** — работа с разными объектами одинаково

**Принципы полиморфизма:**
1. **Единый интерфейс** — одинаковые методы у разных классов
2. **Разные реализации** — каждый класс реализует метод по-своему
3. **Гибкость** — можно легко добавлять новые типы
4. **Расширяемость** — система легко расширяется

**Ключевые особенности:**
- Методы переопределяются в наследниках
- Полиморфное использование через массивы
- Каждый объект ведет себя согласно своему типу
- Легко добавлять новые типы сотрудников

**Преимущества полиморфизма:**
- **Универсальность** — один код для разных типов
- **Расширяемость** — легко добавлять новые типы
- **Читаемость** — код становится более понятным
- **Гибкость** — можно менять реализацию без изменения кода

**Применение в Page Object Pattern:**
- Базовый класс `BasePage` с общими методами
- Конкретные страницы переопределяют специфичные методы
- Полиморфное использование в тестах
- Легкое добавление новых типов страниц
