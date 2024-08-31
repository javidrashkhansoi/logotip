# Пошаговая инструкция по добавлению проектов:

Сочетание клавиш для удобства чтения инструкции: `Ctrl + K` `V`

## Страница "Наше портфолио"

- Переходите в файл **/portfolio/blocks/portfolio.html** ([ссылка на файл](/portfolio/blocks/portfolio.html))
- Найдите элемент **li.portfolios-list__item** ([ссылка на строку элемента](/portfolio/blocks/portfolio.html#14))
- Продублируйте элемент **li.portfolios-list__item**
- Заполните нужные поля:
  - Ссылка на проект: **a.portfolio__link**
  - Название проекта: **h2.portfolio__title a**
  - Краткое описание: **p.portfolio__text**
  - Иконки технологий: **li.portfolio-technologies__icon img**
    - Иконки технологий хранятся в папке **/public/images/icons/technologies** ([ссылка на папку](/public/images/icons/technologies))
  - Картинка проекта: **a.portfolio__image img**
    - Картинка проекта хранится в папке **/public/images/images/portfolio** ([ссылка на папку](/public/images/images/portfolio))


## Страница "Главная", блок "Последние работы"

- Переходите в файл **/index/blocks/projects.html** ([ссылка на файл](/index/blocks/projects.html))
- Найдите элемент **li.projects-portfolio__item** ([ссылка на строку элемента](/index/blocks/projects.html#22))
- Продублируйте элемент **li.projects-portfolio__item**
- Заполните нужные поля:
  - Иконка проекта: **div.project-card__icon img**
    - Иконки проекта хранятся в папке **/public/images/icons/index/projects** ([ссылка на папку](/public/images/icons/index/projects))
  - Ссылка на проект: **a.project-card__link**
  - Название проекта: **h3.project-card__title a**


## Команды сборки

До выполнения нижних команд необходимо установить зависимости командой `npm i`

- Режим разработки: `npm run dev`
- Режим сборки: `npm run build`
- Режим просмотра готового проекта: `npm run preview`

Готовые файлы будут в папке **/dist** ([ссылка на папку](/dist))
