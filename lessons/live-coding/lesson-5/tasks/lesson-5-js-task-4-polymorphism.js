// Задача 4: Полиморфизм (Уровень: Средний+)
// Создайте систему для разных типов сотрудников с полиморфизмом

// TODO: Создайте базовый класс Employee
// 1. Добавьте свойства: name, position, baseSalary
// 2. Создайте конструктор
// 3. Добавьте методы:
//    - calculateSalary() - расчет зарплаты (базовая реализация)
//    - getInfo() - информация о сотруднике
//    - work() - работа сотрудника (абстрактный метод)

// TODO: Создайте класс Developer, наследующий от Employee
// 1. Добавьте свойство programmingLanguages (массив языков)
// 2. Переопределите calculateSalary() - +20% к базовой зарплате
// 3. Переопределите work() - программирование
// 4. Добавьте метод code() - написание кода

// TODO: Создайте класс Manager, наследующий от Employee
// 1. Добавьте свойство teamSize (размер команды)
// 2. Переопределите calculateSalary() - +30% к базовой зарплате
// 3. Переопределите work() - управление командой
// 4. Добавьте метод conductMeeting() - проведение встреч

// TODO: Создайте класс Designer, наследующий от Employee
// 1. Добавьте свойство designTools (массив инструментов)
// 2. Переопределите calculateSalary() - +15% к базовой зарплате
// 3. Переопределите work() - создание дизайнов
// 4. Добавьте метод createDesign() - создание дизайна

// Ваш код здесь:

// Создайте сотрудников и протестируйте полиморфизм
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
console.log(developer.code());
console.log(manager.conductMeeting());
console.log(designer.createDesign());

// Полиморфное использование
console.log('=== Полиморфное выполнение работы ===');
employees.forEach(emp => {
  console.log(`${emp.name} (${emp.position}): ${emp.work()}`);
});
