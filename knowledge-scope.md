---
layout: default
title: Область знаний
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

<div class="main-container">
<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Область знаний

## Manual testing (Processes)

### Processes, Methodologies
| Методология | Novice | Medium | Advanced |
|-------------|--------|--------|----------|
| agile, scrum, kanban, waterfall, kaskad, bdd, tdd | может перечислить методологии, рассказать об отличиях | опыт работы с Agile, перечисляет атрибуты Scrum и Kanban | опыт внедрения микропроцессов, может описать улучшения |

### Estimations
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Оценка задач | опыт оценки личных задач | опыт оценки задач, участие в командной оценке (planning poker) | опыт общей оценки проекта и планирования релизов |

### Test documentation and bug tracking systems
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Документация и баг-трекинг | артефакты тестирования: test cases, check lists, bug reports; опыт работы с баг-трекингом | разница между test case и check list, severity/priority, test plan, test strategy, сложные запросы | test plan vs test strategy, организационная документация, опыт с дашбордами |

## Automation testing

### Automation testing, basic theory
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Теория автоматизации | Что такое test automation, какие проблемы решает, цели, применимость | Test automation для QA/QC/testing, test pyramid, виды тестирования | Test strategy, внедрение automation, фигура тестирования для frontend/backend |

### Version Control System - Git
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Git | Version Control System (что это и зачем нужно), как клонировать проект, git команды, git branch, git config | '--hard', перенос изменений между ветками, rebase, reset, stash, .gitignore, git log, pull/merge requests | cherry-pick, submodules, hooks |

### CI, CD
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| CI/CD | Что такое CI, слышал о CI инструментах | опыт работы с CI, pipeline, разница Continuous Delivery/Deployment | настройка CI/CD, инфраструктура как код, Sonar, linter |

### Automation Tools (frameworks)
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Фреймворки | рассказать об инструменте, из каких блоков состоит тест, запуск/пропуск теста | критерии выбора, hooks, конфиг, запуск по тегам, параллельность, reporter | интеграция с CI/TMS, расширение возможностей |

### Project management and comprehension tool (package manager)
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| npm, nodeJS | зачем нужны, какие инструменты, как установить библиотеку | package.json, запуск скриптов, зависимости, lock-файл, SemVer | внешние репозитории, параметризация |

### Locators
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Локаторы | различия CSS/XPath, что использовать для поиска | задачи с :not, XPath axes, document.querySelector, jQuery | условный XPath, составные локаторы, shadow DOM |

### Browser initialization
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Инициализация браузера | Selenium WebDriver, пути к драйверам, реализация | Singleton, abstract factory, capabilities, remote webdriver, headless | собственная обёртка, multiton/prototype, headless mode, logging |

### BDD
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| BDD | Gherkin стиль, Feature, Scenario, Step | смысл BDD, обзор случаев, правила для сценариев | разработка и автоматизация сценариев, архитектура BDD-фреймворка |

### Waiters
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Ожидания | типы waiters, различия | explicit/implicit wait, примеры, почему sleep плохо | fluent wait, ожидание DOM/AJAX, свои expected conditions |

### REST, SOAP, WebSockets
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| API | что такое REST/SOAP, методы, идемпотентность, инструменты | JSON/XML, сериализация, библиотеки, WebSocket, CORS | GraphQL, requests pipeline |

### Framework architecture
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Архитектура | Page Object, 3-слойная архитектура | опыт с 3-4-5-слойной архитектурой, Page Element, слои для Gherkin | опыт применения разных архитектур, компоненты, микросервисы |

### Loggers, reporters, metrics
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Репортеры | что такое reporter, зачем нужны, HTML reporter | опыт с Allure/Report Portal, паттерны, метрики | code coverage, хранение отчётов, переопределение reporter |

### Virtualization, containerization
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Виртуализация | разница виртуализации/контейнеризации, зачем нужна, преимущества | жизненный цикл Docker, Dockerfile, Hub, контейнеры | оркестрация, Docker Swarm, Kubernetes, недостатки |

### Test OPS
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| TestOps | что это, отличие от DevOps | test coverage, Zero Bug Policy, инструменты для CI/CD | мониторинг, synthetic tests, тесты в production, A/B, destructive |

### Mobile Automation
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Мобильная автоматизация | типы приложений, Appium, локаторы, test scope, XCUIApplication, XCTest | capabilities, AppiumDriver, UiAutomator2, настройка среды | внешние фермы, CI для мобильных, параллельные тесты |

### Mobile device farms
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Мобильные фермы | эмулятор/симулятор, когда использовать, плюсы/минусы | настройка среды, конфигурация устройств, логирование, скриншоты | параллельные тесты, CI интеграция, сбор метрик |

### Message Brokers, Monitoring, Logs
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Брокеры/мониторинг | что такое message broker, примеры, инструменты логирования | topic, Kafka vs RabbitMQ, мониторинг | подключение, чтение/запись сообщений, компоненты Kafka |

### Databases
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Базы данных | типы БД, ключи, CRUD, distinct/order by | опыт работы с БД, подключение, joins, группировка | PL/SQL, views, procedures, triggers, indexes |

### Software Engineering Practices
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| Инжиниринг | FP vs OOP, SOLID, паттерны, структуры данных | паттерны, структуры, сложности, hash table | B-trees, Fibonacci heap, Red-black trees, skip lists |

### TypeScript
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| TypeScript | типы, модификаторы, interface | составные типы, enums, generics, implements | file declaration, namespaces, продвинутые generics |

### JavaScript
| | Novice | Medium | Advanced |
|---|--------|--------|----------|
| JavaScript | типы данных, переменные, scoping, closures, функции, массивы, async | prototypes, classes, call/bind/apply, spread/rest, destructuring, RegExp, ошибки | modules, пользовательские ошибки, fibers, современные возможности |
</div>