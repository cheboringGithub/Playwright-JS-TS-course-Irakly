# Ответ к задаче 5: Композиция (JavaScript)

## Решение

```javascript
// Класс Product - товар
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getInfo() {
    return `${this.name} - ${this.price} руб. (${this.category})`;
  }

  getPrice() {
    return this.price;
  }
}

// Класс Customer - покупатель
class Customer {
  constructor(id, name, email, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
  }

  getInfo() {
    return `${this.name} (${this.email}) - ${this.address}`;
  }

  updateAddress(newAddress) {
    this.address = newAddress;
    return `Адрес обновлен: ${this.address}`;
  }
}

// Класс PaymentMethod - способ оплаты
class PaymentMethod {
  constructor(type, cardNumber, expiryDate) {
    this.type = type;
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
  }

  processPayment(amount) {
    if (this.validateCard()) {
      return `Оплата ${amount} руб. картой ${this.cardNumber} успешна`;
    } else {
      return 'Ошибка оплаты: недействительная карта';
    }
  }

  validateCard() {
    // Простая валидация для демонстрации
    return this.cardNumber.length === 16 && this.expiryDate.length === 5;
  }
}

// Класс ShippingMethod - способ доставки
class ShippingMethod {
  constructor(type, cost, deliveryDays) {
    this.type = type;
    this.cost = cost;
    this.deliveryDays = deliveryDays;
  }

  calculateCost() {
    return this.cost;
  }

  getDeliveryTime() {
    return `${this.deliveryDays} дней`;
  }
}

// Класс Order с композицией
class Order {
  constructor(customer, paymentMethod, shippingMethod) {
    this.customer = customer;
    this.paymentMethod = paymentMethod;
    this.shippingMethod = shippingMethod;
    this.products = [];
    this.orderId = this.generateOrderId();
  }

  addProduct(product) {
    this.products.push(product);
    return `Товар "${product.name}" добавлен в заказ`;
  }

  removeProduct(productId) {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      const removedProduct = this.products.splice(index, 1)[0];
      return `Товар "${removedProduct.name}" удален из заказа`;
    }
    return 'Товар не найден в заказе';
  }

  calculateTotal() {
    const productsTotal = this.products.reduce((sum, product) => sum + product.getPrice(), 0);
    const shippingCost = this.shippingMethod.calculateCost();
    return productsTotal + shippingCost;
  }

  processOrder() {
    const total = this.calculateTotal();
    const paymentResult = this.paymentMethod.processPayment(total);
    
    if (paymentResult.includes('успешна')) {
      return {
        success: true,
        orderId: this.orderId,
        total: total,
        deliveryTime: this.shippingMethod.getDeliveryTime(),
        message: 'Заказ успешно обработан'
      };
    } else {
      return {
        success: false,
        message: 'Ошибка обработки заказа: ' + paymentResult
      };
    }
  }

  getOrderSummary() {
    return {
      orderId: this.orderId,
      customer: this.customer.getInfo(),
      products: this.products.map(p => p.getInfo()),
      total: this.calculateTotal(),
      shipping: this.shippingMethod.type,
      deliveryTime: this.shippingMethod.getDeliveryTime()
    };
  }

  generateOrderId() {
    return 'ORD-' + Date.now();
  }
}

// Тестирование
const product1 = new Product(1, 'Ноутбук', 50000, 'Электроника');
const product2 = new Product(2, 'Мышь', 2000, 'Аксессуары');
const customer = new Customer(1, 'Иван Петров', 'ivan@example.com', 'Москва, ул. Примерная, 1');
const payment = new PaymentMethod('Карта', '1234567890123456', '12/25');
const shipping = new ShippingMethod('Курьер', 500, 2);

const order = new Order(customer, payment, shipping);

console.log('=== Добавление товаров ===');
console.log(order.addProduct(product1)); // "Товар "Ноутбук" добавлен в заказ"
console.log(order.addProduct(product2)); // "Товар "Мышь" добавлен в заказ"

console.log('=== Информация о заказе ===');
console.log(order.getOrderSummary());

console.log('=== Расчет стоимости ===');
console.log('Общая стоимость:', order.calculateTotal()); // 52500

console.log('=== Обработка заказа ===');
const result = order.processOrder();
console.log(result);

console.log('=== Удаление товара ===');
console.log(order.removeProduct(2)); // "Товар "Мышь" удален из заказа"
console.log('Новая стоимость:', order.calculateTotal()); // 50500
```

## Объяснение

**Композиция в JavaScript:**
- **"Имеет" вместо "является"** — заказ содержит товары, покупателя, способы оплаты и доставки
- **Независимые компоненты** — каждый класс отвечает за свою область
- **Переиспользование** — компоненты можно использовать в разных контекстах
- **Гибкость** — легко добавлять и удалять компоненты

**Принципы композиции:**
1. **Разделение ответственности** — каждый класс имеет одну задачу
2. **Слабая связанность** — компоненты не зависят друг от друга
3. **Переиспользование** — компоненты можно использовать везде
4. **Гибкость** — легко изменять структуру

**Преимущества композиции:**
- **Модульность** — каждый компонент независим
- **Тестируемость** — легко тестировать каждый компонент отдельно
- **Расширяемость** — легко добавлять новые компоненты
- **Поддержка** — изменения в одном компоненте не влияют на другие

**Ключевые особенности:**
- Объекты создаются в конструкторе главного класса
- Каждый компонент имеет свою ответственность
- Легко заменить один компонент на другой
- Компоненты могут быть переиспользованы

**Применение в Page Object Pattern:**
- Компоненты страницы (Header, Footer, Navigation)
- Переиспользуемые элементы (Modal, Form, Table)
- Независимые модули (Search, Filter, Pagination)
- Легкая замена и расширение функциональности
