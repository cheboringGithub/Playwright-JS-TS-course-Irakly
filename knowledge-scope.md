---
layout: default
title: Область знаний
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Область знаний

## Manual testing (Processes)

| Тема | Novice | Medium | Advanced |
|------|--------|--------|----------|
| **Processes, Methodologies** | Может перечислить методологии (agile, scrum, kanban, waterfall, kaskad, bdd, tdd)<br>Может рассказать об отличиях между методологиями | Имеет опыт работы с одним из Agile фреймворков (методологий)<br>Может перечислить атрибуты Scrum и Kanban | Имеет опыт внедрения микропроцессов тестирования<br>Может описать моменты, которые можно улучшить в текущем проекте |
| **Estimations** | Опыт оценки личных задач | Опыт оценки задач<br>Участие в командной оценке задач (planning poker) | Опыт общей оценки проекта и планирования релизов |
| **Test documentation and bug tracking systems** | Артефакты тестирования: test cases, check lists, bug reports<br>Опыт работы с баг-трекингом | Разница между test case и check list<br>Severity и priority (определяет для frontend или backend бага)<br>Test plan, test strategy<br>Опыт создания сложных запросов и выборок в баг-трекинге | Test plan vs test strategy — организационная документация<br>Опыт создания и работы с дашбордами |

## Automation testing

| Тема | Novice | Medium | Advanced |
|------|--------|--------|----------|
| **Automation testing, basic theory** | Что такое test automation, какие проблемы решает, цели, применимость | Test automation для QA/QC/testing<br>Test pyramid, виды тестирования | Test strategy, внедрение automation<br>Фигура тестирования для frontend/backend |
| **Version Control System - Git** | Что такое VCS, зачем нужна<br>Как клонировать проект, основные git-команды, git branch, git config | '--hard', перенос изменений между ветками, rebase, reset, stash, .gitignore, git log, pull/merge requests | Cherry-pick, submodules, hooks |
| **CI, CD** | Что такое CI, слышал о CI инструментах (Jenkins, TeamCity, TFS) | Опыт работы с CI, pipeline, разница Continuous Delivery/Deployment | Настройка CI/CD, инфраструктура как код, Sonar, linter |
| **Automation Tools (frameworks)** | Рассказать об инструменте, из каких блоков состоит тест, запуск/пропуск теста | Критерии выбора, hooks, конфиг, запуск по тегам, параллельность, reporter | Интеграция с CI/TMS, расширение возможностей |
| **Project management and comprehension tool (package manager)** | Зачем нужны npm, nodeJS, какие инструменты, как установить библиотеку | package.json, запуск скриптов, зависимости, lock-файл, SemVer | Внешние репозитории, параметризация |
| **Locators** | Различия CSS/XPath, что использовать для поиска | Задачи с :not, XPath axes, document.querySelector, jQuery | Условный XPath, составные локаторы, shadow DOM |
| **Browser initialization** | Selenium WebDriver, пути к драйверам, реализация | Singleton, abstract factory, capabilities, remote webdriver, headless | Собственная обёртка, multiton/prototype, headless mode, logging |
| **BDD** | Gherkin стиль, Feature, Scenario, Step | Смысл BDD, обзор случаев, правила для сценариев | Разработка и автоматизация сценариев, архитектура BDD-фреймворка |
| **Waiters** | Типы waiters, различия | explicit/implicit wait, примеры, почему sleep плохо | fluent wait, ожидание DOM/AJAX, свои expected conditions |
| **REST, SOAP, WebSockets** | Что такое REST/SOAP, методы, идемпотентность, инструменты | JSON/XML, сериализация, библиотеки, WebSocket, CORS | GraphQL, requests pipeline |
| **Framework architecture** | Page Object, 3-слойная архитектура | Опыт с 3-4-5-слойной архитектурой, Page Element, слои для Gherkin | Опыт применения разных архитектур, компоненты, микросервисы |
| **Loggers, reporters, metrics** | Что такое reporter, зачем нужны, HTML reporter | Опыт с Allure/Report Portal, паттерны, метрики | Code coverage, хранение отчётов, переопределение reporter |
| **Virtualization, containerization** | Разница виртуализации/контейнеризации, зачем нужна, преимущества | Жизненный цикл Docker, Dockerfile, Hub, контейнеры | Оркестрация, Docker Swarm, Kubernetes, недостатки |
| **Test OPS** | Что такое TestOps, отличие от DevOps | Test coverage, Zero Bug Policy, инструменты для CI/CD | Мониторинг, synthetic tests, тесты в production, A/B, destructive |
| **Mobile Automation** | Типы приложений, Appium, локаторы, test scope, XCUIApplication, XCTest | Capabilities, AppiumDriver, UiAutomator2, настройка среды | Внешние фермы, CI для мобильных, параллельные тесты |
| **Mobile device farms** | Эмулятор/симулятор, когда использовать, плюсы/минусы | Настройка среды, конфигурация устройств, логирование, скриншоты | Параллельные тесты, CI интеграция, сбор метрик |
| **Message Brokers, Monitoring, Logs** | Что такое message broker, примеры, инструменты логирования | Topic, Kafka vs RabbitMQ, мониторинг | Подключение, чтение/запись сообщений, компоненты Kafka |
| **Databases** | Типы БД, ключи, CRUD, distinct/order by | Опыт работы с БД, подключение, joins, группировка | PL/SQL, views, procedures, triggers, indexes |
| **Software Engineering Practices** | FP vs OOP, SOLID, паттерны, структуры данных | Паттерны, структуры, сложности, hash table | B-trees, Fibonacci heap, Red-black trees, skip lists |
| **TypeScript** | Типы, модификаторы, interface | Составные типы, enums, generics, implements | File declaration, namespaces, продвинутые generics |

## Programming languages

| Тема | Novice | Medium | Advanced |
|------|--------|--------|----------|
| **JavaScript** | Типы данных, переменные, scoping, closures, функции, массивы, async | Prototypes, classes, call/bind/apply, spread/rest, destructuring, RegExp, ошибки | Modules, пользовательские ошибки, fibers, современные возможности |