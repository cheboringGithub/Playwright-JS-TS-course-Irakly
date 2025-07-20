---
layout: default
title: Область знаний
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Область знаний

## Manual testing (Processes)

### Processes, Methodologies
#### Novice
- Может перечислить методологии (agile, scrum, kanban, waterfall, kaskad, bdd, tdd)
- Может рассказать об отличиях между методологиями
#### Medium
- Имеет опыт работы с одним из Agile фреймворков (методологий)
- Может перечислить атрибуты Scrum и Kanban
#### Advanced
- Имеет опыт внедрения микропроцессов тестирования
- Может описать моменты, которые можно улучшить в текущем проекте

### Estimations
#### Novice
- Опыт оценки личных задач
#### Medium
- Опыт оценки задач
- Участие в командной оценке задач (planning poker)
#### Advanced
- Опыт общей оценки проекта и планирования релизов

### Test documentation and bug tracking systems
#### Novice
- Артефакты тестирования: test cases, check lists, bug reports
- Опыт работы с баг-трекингом
#### Medium
- Разница между test case и check list
- Severity и priority (определяет для frontend или backend бага)
- Test plan, test strategy
- Опыт создания сложных запросов и выборок в баг-трекинге
#### Advanced
- Test plan vs test strategy — организационная документация
- Опыт создания и работы с дашбордами

## Automation testing

### Automation testing, basic theory
#### Novice
- Что такое test automation, какие проблемы решает, цели, применимость
#### Medium
- Test automation для QA/QC/testing
- Test pyramid, виды тестирования
#### Advanced
- Test strategy, внедрение automation
- Фигура тестирования для frontend/backend

### Version Control System - Git
#### Novice
- Что такое VCS, зачем нужна
- Как клонировать проект, основные git-команды, git branch, git config
#### Medium
- '--hard', перенос изменений между ветками, rebase, reset, stash, .gitignore, git log, pull/merge requests
#### Advanced
- Cherry-pick, submodules, hooks

### CI, CD
#### Novice
- Что такое CI, слышал о CI инструментах (Jenkins, TeamCity, TFS)
#### Medium
- Опыт работы с CI, pipeline, разница Continuous Delivery/Deployment
#### Advanced
- Настройка CI/CD, инфраструктура как код, Sonar, linter

### Automation Tools (frameworks)
#### Novice
- Рассказать об инструменте, из каких блоков состоит тест, запуск/пропуск теста
#### Medium
- Критерии выбора, hooks, конфиг, запуск по тегам, параллельность, reporter
#### Advanced
- Интеграция с CI/TMS, расширение возможностей

### Project management and comprehension tool (package manager)
#### Novice
- Зачем нужны npm, nodeJS, какие инструменты, как установить библиотеку
#### Medium
- package.json, запуск скриптов, зависимости, lock-файл, SemVer
#### Advanced
- Внешние репозитории, параметризация

### Locators
#### Novice
- Различия CSS/XPath, что использовать для поиска
#### Medium
- Задачи с :not, XPath axes, document.querySelector, jQuery
#### Advanced
- Условный XPath, составные локаторы, shadow DOM

### Browser initialization
#### Novice
- Selenium WebDriver, пути к драйверам, реализация
#### Medium
- Singleton, abstract factory, capabilities, remote webdriver, headless
#### Advanced
- Собственная обёртка, multiton/prototype, headless mode, logging

### BDD
#### Novice
- Gherkin стиль, Feature, Scenario, Step
#### Medium
- Смысл BDD, обзор случаев, правила для сценариев
#### Advanced
- Разработка и автоматизация сценариев, архитектура BDD-фреймворка

### Waiters
#### Novice
- Типы waiters, различия
#### Medium
- explicit/implicit wait, примеры, почему sleep плохо
#### Advanced
- fluent wait, ожидание DOM/AJAX, свои expected conditions

### REST, SOAP, WebSockets
#### Novice
- Что такое REST/SOAP, методы, идемпотентность, инструменты
#### Medium
- JSON/XML, сериализация, библиотеки, WebSocket, CORS
#### Advanced
- GraphQL, requests pipeline

### Framework architecture
#### Novice
- Page Object, 3-слойная архитектура
#### Medium
- Опыт с 3-4-5-слойной архитектурой, Page Element, слои для Gherkin
#### Advanced
- Опыт применения разных архитектур, компоненты, микросервисы

### Loggers, reporters, metrics
#### Novice
- Что такое reporter, зачем нужны, HTML reporter
#### Medium
- Опыт с Allure/Report Portal, паттерны, метрики
#### Advanced
- Code coverage, хранение отчётов, переопределение reporter

### Virtualization, containerization
#### Novice
- Разница виртуализации/контейнеризации, зачем нужна, преимущества
#### Medium
- Жизненный цикл Docker, Dockerfile, Hub, контейнеры
#### Advanced
- Оркестрация, Docker Swarm, Kubernetes, недостатки

### Test OPS
#### Novice
- Что такое TestOps, отличие от DevOps
#### Medium
- Test coverage, Zero Bug Policy, инструменты для CI/CD
#### Advanced
- Мониторинг, synthetic tests, тесты в production, A/B, destructive

### Mobile Automation
#### Novice
- Типы приложений, Appium, локаторы, test scope, XCUIApplication, XCTest
#### Medium
- Capabilities, AppiumDriver, UiAutomator2, настройка среды
#### Advanced
- Внешние фермы, CI для мобильных, параллельные тесты

### Mobile device farms
#### Novice
- Эмулятор/симулятор, когда использовать, плюсы/минусы
#### Medium
- Настройка среды, конфигурация устройств, логирование, скриншоты
#### Advanced
- Параллельные тесты, CI интеграция, сбор метрик

### Message Brokers, Monitoring, Logs
#### Novice
- Что такое message broker, примеры, инструменты логирования
#### Medium
- Topic, Kafka vs RabbitMQ, мониторинг
#### Advanced
- Подключение, чтение/запись сообщений, компоненты Kafka

### Databases
#### Novice
- Типы БД, ключи, CRUD, distinct/order by
#### Medium
- Опыт работы с БД, подключение, joins, группировка
#### Advanced
- PL/SQL, views, procedures, triggers, indexes

### Software Engineering Practices
#### Novice
- FP vs OOP, SOLID, паттерны, структуры данных
#### Medium
- Паттерны, структуры, сложности, hash table
#### Advanced
- B-trees, Fibonacci heap, Red-black trees, skip lists

### TypeScript
#### Novice
- Типы, модификаторы, interface
#### Medium
- Составные типы, enums, generics, implements
#### Advanced
- File declaration, namespaces, продвинутые generics

## Programming languages

### JavaScript
#### Novice
- Типы данных, переменные, scoping, closures, функции, массивы, async
#### Medium
- Prototypes, classes, call/bind/apply, spread/rest, destructuring, RegExp, ошибки
#### Advanced
- Modules, пользовательские ошибки, fibers, современные возможности