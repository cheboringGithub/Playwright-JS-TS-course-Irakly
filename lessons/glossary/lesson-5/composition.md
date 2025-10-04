# Композиция

**Определение:** Композиция — это принцип объектно-ориентированного программирования, при котором сложные объекты создаются путем объединения более простых объектов. Вместо наследования используется принцип "имеет" (has-a) вместо "является" (is-a).

**Основные принципы:**
- **"Имеет" вместо "является"** — объект содержит другие объекты
- **Гибкость** — легко заменить компоненты
- **Слабая связанность** — компоненты независимы
- **Переиспользование** — компоненты можно использовать в разных контекстах

**Пример композиции:**
```javascript
// Компоненты
class Engine {
  start() {
    return 'Двигатель запущен';
  }
}

class Wheels {
  rotate() {
    return 'Колеса крутятся';
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
    this.wheels = new Wheels();
  }

  start() {
    return `${this.engine.start()}, ${this.wheels.rotate()}`;
  }
}
```

**Композиция в TypeScript:**
```typescript
// Компоненты
class Engine {
  public start(): string {
    return 'Двигатель запущен';
  }
}

class Wheels {
  public rotate(): string {
    return 'Колеса крутятся';
  }
}

class Car {
  private engine: Engine;
  private wheels: Wheels;

  constructor() {
    this.engine = new Engine();
    this.wheels = new Wheels();
  }

  public start(): string {
    return `${this.engine.start()}, ${this.wheels.rotate()}`;
  }
}
```

**Применение в Page Object Pattern:**
```typescript
// Компоненты страницы
class HeaderComponent {
  private page: Page;
  private logo: Locator;
  private navigation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('.logo');
    this.navigation = page.locator('.nav');
  }

  public async clickLogo(): Promise<void> {
    await this.logo.click();
  }
}

class FooterComponent {
  private page: Page;
  private copyright: Locator;

  constructor(page: Page) {
    this.page = page;
    this.copyright = page.locator('.copyright');
  }

  public async getCopyrightText(): Promise<string> {
    return await this.copyright.textContent();
  }
}

// Главная страница с композицией
class HomePage {
  private page: Page;
  private header: HeaderComponent;
  private footer: FooterComponent;
  private mainContent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);
    this.footer = new FooterComponent(page);
    this.mainContent = page.locator('.main-content');
  }

  public async navigateToHome(): Promise<void> {
    await this.header.clickLogo();
  }

  public async getFooterText(): Promise<string> {
    return await this.footer.getCopyrightText();
  }
}
```

**Композиция vs Наследование:**

| Композиция | Наследование |
|------------|--------------|
| "Имеет" (has-a) | "Является" (is-a) |
| Гибкая | Жесткая |
| Слабая связанность | Сильная связанность |
| Легко тестировать | Сложнее тестировать |
| Легко заменить компоненты | Сложно изменить иерархию |

**Когда использовать композицию:**
- Когда нужна гибкость в структуре
- Когда компоненты могут быть независимыми
- Когда нужно легко заменять части системы
- В Page Object Pattern для переиспользуемых компонентов
- Когда наследование создает слишком тесную связанность

