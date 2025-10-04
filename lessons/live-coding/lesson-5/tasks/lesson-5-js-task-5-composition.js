// Задача 5: Композиция (Уровень: Продвинутый)
// Создайте систему заказа в интернет-магазине с использованием композиции

// TODO: Создайте классы компонентов
// 1. Product - товар
//    - свойства: id, name, price, category
//    - методы: getInfo(), getPrice()
// 2. Customer - покупатель
//    - свойства: id, name, email, address
//    - методы: getInfo(), updateAddress()
// 3. PaymentMethod - способ оплаты
//    - свойства: type, cardNumber, expiryDate
//    - методы: processPayment(amount), validateCard()
// 4. ShippingMethod - способ доставки
//    - свойства: type, cost, deliveryDays
//    - методы: calculateCost(), getDeliveryTime()

// TODO: Создайте класс Order с композицией
// 1. Создайте экземпляры всех компонентов в конструкторе
// 2. Добавьте методы:
//    - addProduct(product) - добавление товара
//    - removeProduct(productId) - удаление товара
//    - calculateTotal() - расчет общей стоимости
//    - processOrder() - обработка заказа
//    - getOrderSummary() - сводка заказа

// Ваш код здесь:

// Создайте компоненты
const product1 = new Product(1, 'Ноутбук', 50000, 'Электроника');
const product2 = new Product(2, 'Мышь', 2000, 'Аксессуары');
const customer = new Customer(1, 'Иван Петров', 'ivan@example.com', 'Москва, ул. Примерная, 1');
const payment = new PaymentMethod('Карта', '1234-5678-9012-3456', '12/25');
const shipping = new ShippingMethod('Курьер', 500, 2);

// Создайте заказ
const order = new Order(customer, payment, shipping);

console.log('=== Добавление товаров ===');
order.addProduct(product1);
order.addProduct(product2);
console.log('Товары добавлены');

console.log('=== Информация о заказе ===');
console.log(order.getOrderSummary());

console.log('=== Расчет стоимости ===');
console.log('Общая стоимость:', order.calculateTotal());

console.log('=== Обработка заказа ===');
const result = order.processOrder();
console.log(result);

console.log('=== Удаление товара ===');
order.removeProduct(2);
console.log('Товар удален');
console.log('Новая стоимость:', order.calculateTotal());
