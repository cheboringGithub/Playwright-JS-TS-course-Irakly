/**
 * Задача 1.3: Создание и работа с Map
 * 
 * Создайте Map для хранения информации о пользователях и выполните следующие операции:
 * 
 * 1. Создайте Map с начальными данными:
 *    - user1: { name: 'John', age: 25, city: 'New York' }
 *    - user2: { name: 'Jane', age: 30, city: 'London' }
 *    - user3: { name: 'Bob', age: 28, city: 'Paris' }
 * 
 * 2. Добавьте нового пользователя user4: { name: 'Alice', age: 22, city: 'Berlin' }
 * 
 * 3. Обновите возраст пользователя user2 на 31
 * 
 * 4. Удалите пользователя user3
 * 
 * 5. Проверьте, существует ли пользователь user1
 * 
 * 6. Получите количество пользователей в Map
 * 
 * 7. Выведите всех пользователей в формате: "Name: [имя], Age: [возраст], City: [город]"
 * 
 * 8. Создайте массив всех имен пользователей
 * 
 * 9. Найдите пользователя с самым высоким возрастом
 * 
 * 10. Очистите Map
 */

// Ваш код здесь:

// 1. Создание Map с начальными данными
const userMap = new Map([
  ['user1', { name: 'John', age: 25, city: 'New York' }],
  ['user2', { name: 'Jane', age: 30, city: 'London' }],
  ['user3', { name: 'Bob', age: 28, city: 'Paris' }]
]);

// 2. Добавление нового пользователя
userMap.set('user4', { name: 'Alice', age: 22, city: 'Berlin' });

// 3. Обновление возраста пользователя user2
const user2 = userMap.get('user2');
if (user2) {
  user2.age = 31;
  userMap.set('user2', user2);
}

// 4. Удаление пользователя user3
userMap.delete('user3');

// 5. Проверка существования пользователя user1
const user1Exists = userMap.has('user1');
console.log('User1 exists:', user1Exists);

// 6. Получение количества пользователей
const userCount = userMap.size;
console.log('Total users:', userCount);

// 7. Вывод всех пользователей
console.log('\nAll users:');
userMap.forEach((user, key) => {
  console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
});

// 8. Создание массива имен
const userNames = Array.from(userMap.values()).map(user => user.name);
console.log('\nUser names:', userNames);

// 9. Поиск пользователя с самым высоким возрастом
let oldestUser = null;
let maxAge = 0;

userMap.forEach(user => {
  if (user.age > maxAge) {
    maxAge = user.age;
    oldestUser = user;
  }
});

console.log('\nOldest user:', oldestUser);

// 10. Очистка Map
userMap.clear();
console.log('\nMap cleared. Size:', userMap.size);

// Проверьте результаты выполнения всех операций
console.log('\n=== Результаты выполнения ===');
console.log('1. Map создан с начальными данными');
console.log('2. Новый пользователь добавлен');
console.log('3. Возраст user2 обновлен');
console.log('4. user3 удален');
console.log('5. Существование user1 проверено:', user1Exists);
console.log('6. Количество пользователей:', userCount);
console.log('7. Все пользователи выведены');
console.log('8. Массив имен создан:', userNames);
console.log('9. Самый старый пользователь найден:', oldestUser?.name);
console.log('10. Map очищен');
