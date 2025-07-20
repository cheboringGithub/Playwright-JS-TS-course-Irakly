---
layout: default
title: Область знаний
---

<a href="{{ site.baseurl }}" class="main-link-home">&#8592; На главную</a>

# Область знаний

## Manual testing (Processes)

<table border="1">
<tr>
<th>Тема</th><th>Novice</th><th>Medium</th><th>Advanced</th>
</tr>
<tr>
<td><b>Processes, Methodologies</b></td>
<td>Может перечислить методологии:<br>- agile<br>- scrum<br>- kanban<br>- waterfall<br>- kaskad<br>- bdd<br>- tdd<br>Может рассказать об отличиях между методологиями</td>
<td>Имеет опыт работы с одним из Agile фреймворков (методологий)<br>Может перечислить атрибуты:<br>- Scrum<br>- Kanban</td>
<td>Имеет опыт внедрения микропроцессов тестирования<br>Может описать моменты, которые можно улучшить в текущем проекте</td>
</tr>
<tr>
<td><b>Estimations</b></td>
<td>Опыт оценки личных задач</td>
<td>Опыт оценки задач<br>Участие в командной оценке задач:<br>- planning poker</td>
<td>Опыт общей оценки проекта<br>Планирование релизов</td>
</tr>
<tr>
<td><b>Test documentation and bug tracking systems</b></td>
<td>Артефакты тестирования:<br>- test cases<br>- check lists<br>- bug reports<br>Опыт работы с баг-трекингом</td>
<td>Разница между test case и check list<br>Severity и priority (определяет для frontend или backend бага)<br>Test plan<br>Test strategy<br>Опыт создания сложных запросов и выборок в баг-трекинге</td>
<td>Test plan vs test strategy — организационная документация<br>Опыт создания и работы с дашбордами</td>
</tr>
</table>

## Automation testing

<table border="1">
<tr>
<th>Тема</th><th>Novice</th><th>Medium</th><th>Advanced</th>
</tr>
<tr>
<td><b>Automation testing, basic theory</b></td>
<td>Что такое test automation<br>Какие проблемы решает<br>Цели<br>Применимость</td>
<td>Test automation для QA/QC/testing<br>Test pyramid<br>Виды тестирования</td>
<td>Test strategy<br>Внедрение automation<br>Фигура тестирования для frontend/backend</td>
</tr>
<tr>
<td><b>Version Control System - Git</b></td>
<td>Что такое VCS, зачем нужна<br>Как клонировать проект<br>Основные git-команды<br>git branch<br>git config</td>
<td>'--hard'<br>Перенос изменений между ветками<br>rebase<br>reset<br>stash<br>.gitignore<br>git log<br>pull/merge requests</td>
<td>Cherry-pick<br>submodules<br>hooks</td>
</tr>
<tr>
<td><b>CI, CD</b></td>
<td>Что такое CI<br>Слышал о CI инструментах:<br>- Jenkins<br>- TeamCity<br>- TFS</td>
<td>Опыт работы с CI<br>Pipeline<br>Разница Continuous Delivery/Deployment</td>
<td>Настройка CI/CD<br>Инфраструктура как код<br>Sonar<br>linter</td>
</tr>
<tr>
<td><b>Automation Tools (frameworks)</b></td>
<td>Рассказать об инструменте<br>Из каких блоков состоит тест<br>Запуск/пропуск теста</td>
<td>Критерии выбора<br>hooks<br>конфиг<br>Запуск по тегам<br>Параллельность<br>reporter</td>
<td>Интеграция с CI/TMS<br>Расширение возможностей</td>
</tr>
<tr>
<td><b>Project management and comprehension tool (package manager)</b></td>
<td>Зачем нужны npm, nodeJS<br>Какие инструменты<br>Как установить библиотеку</td>
<td>package.json<br>Запуск скриптов<br>Зависимости<br>lock-файл<br>SemVer</td>
<td>Внешние репозитории<br>Параметризация</td>
</tr>
<tr>
<td><b>Locators</b></td>
<td>Различия CSS/XPath<br>Что использовать для поиска</td>
<td>Задачи с :not<br>XPath axes<br>document.querySelector<br>jQuery</td>
<td>Условный XPath<br>Составные локаторы<br>shadow DOM</td>
</tr>
<tr>
<td><b>Browser initialization</b></td>
<td>Selenium WebDriver<br>Пути к драйверам<br>Реализация</td>
<td>Singleton<br>abstract factory<br>capabilities<br>remote webdriver<br>headless</td>
<td>Собственная обёртка<br>multiton/prototype<br>headless mode<br>logging</td>
</tr>
<tr>
<td><b>BDD</b></td>
<td>Gherkin стиль<br>Feature<br>Scenario<br>Step</td>
<td>Смысл BDD<br>Обзор случаев<br>Правила для сценариев</td>
<td>Разработка и автоматизация сценариев<br>Архитектура BDD-фреймворка</td>
</tr>
<tr>
<td><b>Waiters</b></td>
<td>Типы waiters<br>Различия</td>
<td>explicit/implicit wait<br>Примеры<br>Почему sleep плохо</td>
<td>fluent wait<br>Ожидание DOM/AJAX<br>Свои expected conditions</td>
</tr>
<tr>
<td><b>REST, SOAP, WebSockets</b></td>
<td>Что такое REST/SOAP<br>Методы<br>Идемпотентность<br>Инструменты</td>
<td>JSON/XML<br>Сериализация<br>Библиотеки<br>WebSocket<br>CORS</td>
<td>GraphQL<br>requests pipeline</td>
</tr>
<tr>
<td><b>Framework architecture</b></td>
<td>Page Object<br>3-слойная архитектура</td>
<td>Опыт с 3-4-5-слойной архитектурой<br>Page Element<br>Слои для Gherkin</td>
<td>Опыт применения разных архитектур<br>Компоненты<br>Микросервисы</td>
</tr>
<tr>
<td><b>Loggers, reporters, metrics</b></td>
<td>Что такое reporter<br>Зачем нужны<br>HTML reporter</td>
<td>Опыт с Allure/Report Portal<br>Паттерны<br>Метрики</td>
<td>Code coverage<br>Хранение отчётов<br>Переопределение reporter</td>
</tr>
<tr>
<td><b>Virtualization, containerization</b></td>
<td>Разница виртуализации/контейнеризации<br>Зачем нужна<br>Преимущества</td>
<td>Жизненный цикл Docker<br>Dockerfile<br>Hub<br>Контейнеры</td>
<td>Оркестрация<br>Docker Swarm<br>Kubernetes<br>Недостатки</td>
</tr>
<tr>
<td><b>Test OPS</b></td>
<td>Что такое TestOps<br>Отличие от DevOps</td>
<td>Test coverage<br>Zero Bug Policy<br>Инструменты для CI/CD</td>
<td>Мониторинг<br>synthetic tests<br>Тесты в production<br>A/B<br>destructive</td>
</tr>
<tr>
<td><b>Mobile Automation</b></td>
<td>Типы приложений<br>Appium<br>Локаторы<br>test scope<br>XCUIApplication<br>XCTest</td>
<td>Capabilities<br>AppiumDriver<br>UiAutomator2<br>Настройка среды</td>
<td>Внешние фермы<br>CI для мобильных<br>Параллельные тесты</td>
</tr>
<tr>
<td><b>Mobile device farms</b></td>
<td>Эмулятор/симулятор<br>Когда использовать<br>Плюсы/минусы</td>
<td>Настройка среды<br>Конфигурация устройств<br>Логирование<br>Скриншоты</td>
<td>Параллельные тесты<br>CI интеграция<br>Сбор метрик</td>
</tr>
<tr>
<td><b>Message Brokers, Monitoring, Logs</b></td>
<td>Что такое message broker<br>Примеры<br>Инструменты логирования</td>
<td>Topic<br>Kafka vs RabbitMQ<br>Мониторинг</td>
<td>Подключение<br>Чтение/запись сообщений<br>Компоненты Kafka</td>
</tr>
<tr>
<td><b>Databases</b></td>
<td>Типы БД<br>Ключи<br>CRUD<br>distinct/order by</td>
<td>Опыт работы с БД<br>Подключение<br>joins<br>Группировка</td>
<td>PL/SQL<br>views<br>procedures<br>triggers<br>indexes</td>
</tr>
<tr>
<td><b>Software Engineering Practices</b></td>
<td>FP vs OOP<br>SOLID<br>Паттерны<br>Структуры данных</td>
<td>Паттерны<br>Структуры<br>Сложности<br>hash table</td>
<td>B-trees<br>Fibonacci heap<br>Red-black trees<br>skip lists</td>
</tr>
<tr>
<td><b>TypeScript</b></td>
<td>Типы<br>Модификаторы<br>interface</td>
<td>Составные типы<br>enums<br>generics<br>implements</td>
<td>File declaration<br>namespaces<br>Продвинутые generics</td>
</tr>
</table>

## Programming languages

<table border="1">
<tr>
<th>Тема</th><th>Novice</th><th>Medium</th><th>Advanced</th>
</tr>
<tr>
<td><b>JavaScript</b></td>
<td>Типы данных<br>Переменные<br>scoping<br>closures<br>функции<br>массивы<br>async</td>
<td>Prototypes<br>classes<br>call/bind/apply<br>spread/rest<br>destructuring<br>RegExp<br>ошибки</td>
<td>Modules<br>пользовательские ошибки<br>fibers<br>современные возможности</td>
</tr>
</table>