---
layout: default
title: Занятие 1
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

<a href="{{ site.baseurl }}" class="main-link-arrow">&#8592;</a> [На главную]({{ site.baseurl }})

# Занятие 1

---

## Тема 1: Node.js & NPM

| Вопросы |
|---------|
| Что такое Node.js? |
| Что такое NPM? |
| Для чего нужны NPM и Node.js в автоматизации тестирования? |
| Как установить зависимости: `npm i` и `npm ci` (в чем разница?) |

**Работа с package.json:**
- Из каких блоков состоит файл package.json и за что они отвечают?
- Блок scripts: для чего нужен, как использовать?
- Блоки dependencies и devDependencies — для чего нужны, в чем отличия?
- Как установить зависимость в dependencies или devDependencies?
- Что такое package-lock.json, для чего используется, нужно ли добавлять его в .gitignore?
- Что такое семантическое версионирование? Что означают символы (^, ~, *)?

**Дополнительно (если останется время):**
- .npmrc — что это и для чего используется?

---

## Тема 2: Git & Git Flow

| Вопросы |
|---------|
| Для чего нужна система контроля версий и какие задачи она решает? |
| Основные команды: `git clone`, `git pull`, `git push`, `git commit` — для чего нужны и когда применяются? |
| Какие состояния бывают у файлов в git? |
| `git config` — что это и для чего используется? |

**Работа с git:**
- Флаг `--hard` (для `git fetch` или `git reset`)
- Различия между git merge, rebase и cherry-pick — когда и что использовать?
- git stash — для чего нужен?
- .gitignore — зачем нужен и как работает?
- git log — как просматривать историю изменений?
- Что такое Merge Request/Pull Request, как проходит код-ревью?

**Дополнительно:**
- Git flow — что это такое и какие бывают варианты ([статья Atlassian](https://www.atlassian.com/ru/git/tutorials/comparing-workflows))

**Рекомендуемые материалы:**
- [Pro Git (книга, начало)](https://git-scm.com/book/ru/v2)
- [Видео с практикой](https://www.youtube.com/watch?v=zZBiln_2FhM) 