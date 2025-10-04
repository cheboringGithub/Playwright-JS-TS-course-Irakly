# Ответ к задаче 3: Инкапсуляция (JavaScript)

## Решение

```javascript
class BankAccount {
  // Приватные поля (ES2022)
  #balance;
  #accountNumber;
  #owner;

  constructor(accountNumber, owner, initialBalance = 0) {
    // Валидация параметров
    if (typeof accountNumber !== 'string' || accountNumber.length !== 10) {
      throw new Error('Номер счета должен быть строкой длиной 10 символов');
    }
    
    if (typeof owner !== 'string' || owner.trim() === '') {
      throw new Error('Владелец должен быть непустой строкой');
    }
    
    if (typeof initialBalance !== 'number' || initialBalance < 0) {
      throw new Error('Баланс должен быть неотрицательным числом');
    }

    this.#accountNumber = accountNumber;
    this.#owner = owner;
    this.#balance = initialBalance;
  }

  // Публичные методы
  deposit(amount) {
    if (this.#validateAmount(amount)) {
      this.#balance += amount;
      this.#logTransaction('deposit', amount);
      return this.#balance;
    }
    return this.#balance;
  }

  withdraw(amount) {
    if (this.#validateAmount(amount) && this.#balance >= amount) {
      this.#balance -= amount;
      this.#logTransaction('withdraw', amount);
      return this.#balance;
    }
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }

  getAccountInfo() {
    return {
      accountNumber: this.#accountNumber,
      owner: this.#owner
      // Баланс не включаем для безопасности
    };
  }

  // Приватные методы
  #validateAmount(amount) {
    return typeof amount === 'number' && amount > 0;
  }

  #logTransaction(type, amount) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${type.toUpperCase()}: ${amount} руб. Баланс: ${this.#balance} руб.`);
  }
}

// Тестирование
const account = new BankAccount('1234567890', 'Иван Петров', 1000);

console.log('=== Информация о счете ===');
console.log(account.getAccountInfo()); // { accountNumber: '1234567890', owner: 'Иван Петров' }
console.log('Текущий баланс:', account.getBalance()); // 1000

console.log('=== Пополнение счета ===');
account.deposit(500); // [2024-01-15T10:30:00.000Z] DEPOSIT: 500 руб. Баланс: 1500 руб.
console.log('Баланс после пополнения:', account.getBalance()); // 1500

console.log('=== Снятие средств ===');
account.withdraw(200); // [2024-01-15T10:30:01.000Z] WITHDRAW: 200 руб. Баланс: 1300 руб.
console.log('Баланс после снятия:', account.getBalance()); // 1300

console.log('=== Попытка снятия больше баланса ===');
account.withdraw(2000); // Не выполнится
console.log('Баланс после попытки снятия:', account.getBalance()); // 1300

// Попытка создания счета с невалидными данными
try {
  const invalidAccount = new BankAccount('123', '', -100);
} catch (error) {
  console.log('Ошибка создания счета:', error.message); // "Номер счета должен быть строкой длиной 10 символов"
}
```

## Объяснение

**Инкапсуляция в JavaScript:**
- **Приватные поля** — `#fieldName` (ES2022)
- **Публичные методы** — доступны везде
- **Приватные методы** — доступны только внутри класса
- **Валидация** — проверка входных данных

**Принципы инкапсуляции:**
1. **Сокрытие данных** — приватные поля недоступны извне
2. **Контроль доступа** — только через публичные методы
3. **Валидация** — проверка данных перед изменением
4. **Логирование** — отслеживание операций

**Преимущества инкапсуляции:**
- **Безопасность** — данные защищены от внешнего изменения
- **Целостность** — данные всегда в корректном состоянии
- **Контроль** — четкое разделение публичного и приватного API
- **Отладка** — легче найти источник проблем

**Ключевые особенности:**
- Приватные поля начинаются с `#`
- Приватные методы также начинаются с `#`
- Доступ к приватным полям только внутри класса
- Валидация в конструкторе и методах

**Применение в Page Object Pattern:**
- Приватные поля для локаторов
- Публичные методы для взаимодействия
- Приватные методы для внутренней логики
- Валидация параметров методов
