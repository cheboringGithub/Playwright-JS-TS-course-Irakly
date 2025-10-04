# Полиморфизм

## 📖 Определение

Полиморфизм — это принцип объектно-ориентированного программирования, который позволяет объектам разных классов отвечать на одни и те же сообщения (вызовы методов) по-разному. Один интерфейс — разные реализации.

---

## 🔑 Основные типы полиморфизма

- **Переопределение методов** — замена реализации в наследнике
- **Перегрузка методов** — разные реализации для разных параметров
- **Абстрактные методы** — обязательная реализация в наследниках
- **Интерфейсы** — контракт для реализации

---

## 💻 Пример полиморфизма
```typescript
// Базовый класс
abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Абстрактный метод - должен быть реализован в наследниках
  public abstract makeSound(): string;

  // Обычный метод
  public introduce(): string {
    return `Меня зовут ${this.name}`;
  }
}

// Наследники с разными реализациями
class Dog extends Animal {
  public makeSound(): string {
    return `${this.name} лает: Гав-гав!`;
  }
}

class Cat extends Animal {
  public makeSound(): string {
    return `${this.name} мяукает: Мяу-мяу!`;
  }
}

class Bird extends Animal {
  public makeSound(): string {
    return `${this.name} поет: Чирик-чирик!`;
  }
}

// Полиморфное использование
function makeAnimalsSpeak(animals: Animal[]): void {
  animals.forEach(animal => {
    console.log(animal.introduce()); // Одинаковый метод
    console.log(animal.makeSound()); // Разные реализации
  });
}

const animals = [
  new Dog('Бобик'),
  new Cat('Мурка'),
  new Bird('Кеша')
];

makeAnimalsSpeak(animals);
// Вывод:
// Меня зовут Бобик
// Бобик лает: Гав-гав!
// Меня зовут Мурка
// Мурка мяукает: Мяу-мяу!
// Меня зовут Кеша
// Кеша поет: Чирик-чирик!
```

**Применение в Page Object Pattern:**
```typescript
// Базовый класс для всех страниц
abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Абстрактные методы - должны быть реализованы
  public abstract getTitle(): Promise<string>;
  public abstract waitForPageLoad(): Promise<void>;

  // Общий метод
  public async takeScreenshot(): Promise<Buffer> {
    return await this.page.screenshot();
  }
}

// Конкретные страницы с разными реализациями
class LoginPage extends BasePage {
  public async getTitle(): Promise<string> {
    return await this.page.title();
  }

  public async waitForPageLoad(): Promise<void> {
    await this.page.waitForSelector('#login-form');
  }

  public async login(username: string, password: string): Promise<void> {
    // Специфичная логика для страницы входа
  }
}

class ProductPage extends BasePage {
  public async getTitle(): Promise<string> {
    return await this.page.locator('h1').textContent();
  }

  public async waitForPageLoad(): Promise<void> {
    await this.page.waitForSelector('.product-details');
  }

  public async addToCart(): Promise<void> {
    // Специфичная логика для страницы товара
  }
}

// Полиморфное использование в тестах
async function testPageFunctionality(page: BasePage): Promise<void> {
  await page.waitForPageLoad(); // Разные реализации
  const title = await page.getTitle(); // Разные реализации
  console.log(`Страница загружена: ${title}`);
  
  // Общий функционал
  await page.takeScreenshot();
}

// Использование
test('test different pages', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  await testPageFunctionality(loginPage); // Полиморфный вызов
  await testPageFunctionality(productPage); // Полиморфный вызов
});
```

**Полиморфизм через интерфейсы:**
```typescript
// Интерфейс для всех компонентов формы
interface FormComponent {
  fill(value: string): Promise<void>;
  clear(): Promise<void>;
  getValue(): Promise<string>;
}

// Реализации для разных типов полей
class TextInput implements FormComponent {
  private locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  public async fill(value: string): Promise<void> {
    await this.locator.fill(value);
  }

  public async clear(): Promise<void> {
    await this.locator.clear();
  }

  public async getValue(): Promise<string> {
    return await this.locator.inputValue();
  }
}

class SelectDropdown implements FormComponent {
  private locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  public async fill(value: string): Promise<void> {
    await this.locator.selectOption(value);
  }

  public async clear(): Promise<void> {
    await this.locator.selectOption('');
  }

  public async getValue(): Promise<string> {
    return await this.locator.inputValue();
  }
}

// Полиморфное использование
async function fillForm(components: FormComponent[], values: string[]): Promise<void> {
  for (let i = 0; i < components.length; i++) {
    await components[i].fill(values[i]); // Разные реализации
  }
}
```

**Преимущества полиморфизма:**
- **Гибкость** — легко добавлять новые типы
- **Переиспользование кода** — общая логика для разных объектов
- **Расширяемость** — система легко расширяется
- **Читаемость** — код становится более понятным
- **Тестируемость** — легко тестировать через общий интерфейс

**Лучшие практики:**
- Используйте абстрактные классы для общих характеристик
- Применяйте интерфейсы для контрактов
- Переопределяйте методы для специфичной логики
- Следуйте принципу подстановки Лисков
- Документируйте ожидаемое поведение

