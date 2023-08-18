[![Tests](../../actions/workflows/tests-13-sprint.yml/badge.svg)](../../actions/workflows/tests-13-sprint.yml) [![Tests](../../actions/workflows/tests-14-sprint.yml/badge.svg)](../../actions/workflows/tests-14-sprint.yml)

# Бэкенд проекта Mesto на Express

### Описание
Mesto - это компактная интеррактивная страница, где можно размещать информацию о себе, загружать фотографии, лайкать их и удалять. Также доступна регистрация и авторизация пользователей.

Этот проект - продолжение проекта Mesto на React.js, в который входят следущие работы :
* Взаимодействие с Express и MongoDB;
* Создание схем и моделей;
* Создание контроллеров и роутов;
* Работа с CORS. Обработка ошибок.
  
  ### Функционал:
* Роуты для пользователей:
    - **GET /users** — возвращает всех пользователей из БД;
    - **GET /users/:userId** — возвращает пользователя по _id;
    - **POST /users** — создаёт пользователя с переданными в теле запроса name, about и avatar.
* Роуты для карточек:
    - **GET /cards** — возвращает все карточки из БД; 
    - **POST /cards** — создаёт карточку с переданными в теле запроса name и link, устанавливает поле owner для карточки;
    - **DELETE /cards/:cardId** — удаляет карточку по _id.

### **Какие технологии использовались**
* JavaScript:
    - Промисы (Promise);
    - Асинхронность и оптимизация;
    - Rest API;
* Node.js;
* Express - реализация роутинга;
* Mongoose - взаимодействие с БД MongoDB;
* Celebrate - валидация запросов;
* bcryptjs - шифрование данных пользователя

### **Директории**
`/routes` — папка с файлами роутера;
`/controllers` — папка с файлами контроллеров пользователя и карточки;
`/models` — папка с файлами описания схем пользователя и карточки;
`/errors` – описание ошибок.

### **Установка и запуск проекта**

1. Склонируйте репозиторий на свой компьютер:

`git@github.com:Ksenia-Beznos/express-mesto-gha.git`

2. Установите зависимости:

`npm install`

3. Запустить сервер:

`npm run start`

4. Запустить сервер с hot-reload:

`npm run dev`

**Если при запуске возникает ошибка**
`[nodemon] app crashed - waiting for file changes before starting...`:

1. Остановите все Node.js процессы и перезапустите Nodemon: 

`pkill -f node`  - для macOS и Linux;

2. Запустите nodemon заново:

`npx nodemon app.js`


**Повторите шаги:**

3. Запустить сервер:

`npm run start`

4. Запустить сервер с hot-reload:

`npm run dev`
