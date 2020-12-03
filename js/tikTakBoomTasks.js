const tasks = `

    [
        {
            "question": "JavaScript–это",
            "answer1": { "result": true, "value": "Язык программирования" },
            "answer2": { "result": false, "value": "Язык разметки" }
        },
        {
            "question": "Одна из основных функций JavaScript–это",
            "answer1": { "result": false, "value": "Оформление внешнего вида веб-страниц" },
            "answer2": { "result": true, "value": "Организация интерактива с пользователем" }
        },
        {
            "question": "Функция alert()отвечает за",
            "answer1": { "result": false, "value": "Вывод поля для ввода пользователем информации" },
            "answer2": { "result": true, "value": "Вывод информации в виде сообщения пользователю" }
        },
        {
            "question": "Наибольшее число (Number), которое может быть представлено в JavaScript",
            "answer1": { "result": true, "value": "2⁵³-1" },
            "answer2": { "result": false, "value": "2³⁴-1" }
        },
        {
            "question": "Если в функции toPrecision()не указан аргумент, то",
            "answer1": { "result": true, "value": "Функция возвращает изначальное число" },
            "answer2": { "result": false, "value": "Функция возвращает целое число" }
        },
        {
            "question": "Функция Math.asin(x) вычисляет",
            "answer1": { "result": true, "value": "Арксинус x" },
            "answer2": { "result": false, "value": "Гиперболический синусx" }
        },
        {
            "question": "Если функция indexOf()не находит указанную в аргументе подстроку, то",
            "answer1": { "result": false, "value": "Она выдаст ошибку" },
            "answer2": { "result": true, "value": "Она вернёт значение -1" }
        },
        {
            "question": "Суррогатная пара –это",
            "answer1": { "result": true, "value": "Два однобайтных символа, которые в кодировке Юникод считаются как один символ" },
            "answer2": { "result": false, "value": "4-байтный символ, который в кодировке Юникод считается как два символа" }
        },
        {
            "question": "В функции substr()счёт начинается с конца, если",
            "answer1": { "result": true, "value": "Первый аргумент отрицателен" },
            "answer2": { "result": false, "value": "Оба указанных аргумента отрицательны" }
        },
        {
            "question": "Какой из языков програмирования стал основой для JavaScript?",
            "answer1": { "result": true, "value": "ECMAScript" },
            "answer2": { "result": false, "value": "JScript" }
        },
        {
            "question": "Что делает функция console.clear()?",
            "answer1": { "result": false, "value": "Делает консоль прозрачной и удобной для работы" },
            "answer2": { "result": true, "value": "Очищает консоль" }
        },
        {
            "question": "К какому типу данных относится true?",
            "answer1": { "result": false, "value": "String" },
            "answer2": { "result": true, "value": "Boolean" }
        },
        {
            "question": "Между let и var нет существенных различий",
            "answer1": { "result": false, "value": "Правда" },
            "answer2": { "result": true, "value": "Не правда" }
        },
        {
            "question": "Какой из методов поиска элемента веб-страницы считается устаревшим?",
            "answer1": { "result": true, "value": "document.getElementById()" },
            "answer2": { "result": false, "value": "document.querySelector()" }
        },
        {
            "question": "Что такое Событие?",
            "answer1": { "result": true, "value": "Это сигнал от браузера о том, что что-то произошло" },
            "answer2": { "result": false, "value": "Это функция, которая сработает при щелчке мыши" }
        },
        {
            "question": "Что в JavaScript записывается с помощью знака &&?",
            "answer1": { "result": false, "value": "Дизъюнкция или «логическая сумма»" },
            "answer2": { "result": true, "value": "Конъюнкция или «логическое умножение»" }
        },
        {
            "question": "О чём гласит Закон исключения третьего?",
            "answer1": { "result": true, "value": "Что два противоположных значения не могут быть одновременно ложными" },
            "answer2": { "result": false, "value": "Что два противоположных выражения не могут быть одновременно истинными" }
        },
        {
            "question": "Сколько аргументов может принимать функция?",
            "answer1": { "result": true, "value": "Любое количество аргументов" },
            "answer2": { "result": false, "value": "Не более двух аргументов" }
        },
        {
            "question": "Что делает метод массива push?",
            "answer1": { "result": true, "value": "Добавляет элемент в конец массива" },
            "answer2": { "result": false, "value": "Удаляет элемент из конца массива" }
        },
        {
            "question": "Сколько элементов в тернарном операторе?",
            "answer1": { "result": true, "value": "Три" },
            "answer2": { "result": false, "value": "Два" }
        },
        {
            "question": "Какое количество значений может иметь 'null'?",
            "answer1": { "result": true, "value": "Лишь одно" },
            "answer2": { "result": false, "value": "Любое количество" }
        },
        {
            "question": "Как найти наибольшее из двух чисел?",
            "answer1": { "result": false, "value": "Math.ceil(x, y)" },
            "answer2": { "result": true, "value": "Math.max(x, y)" }
        },
        {
            "question": "Как правильно вставить внешний скрипт?",
            "answer1": { "result": false, "value": "<script href='sample1.js'>" },
            "answer2": { "result": true, "value": "<script src='sample1.js'>" }
        },
        {
            "question": "Как вызвать функцию 'myFunction'?",
            "answer1": { "result": false, "value": "call function myFunction()" },
            "answer2": { "result": true, "value": "myFunction()" }
        },
        {
            "question": "Что делает оператор === ?",
            "answer1": { "result": false, "value": "Сравнивает по ссылке, а не по значению." },
            "answer2": { "result": true, "value": "Сравнивает без приведения типа." }
        },
        {
            "question": "Что содержит не инициализированная переменная?",
            "answer1": { "result": false, "value": "null" },
            "answer2": { "result": true, "value": "undefined" }
        },
        {
            "question": "Функции могут быть вложены внутри других функций",
            "answer1": { "result": true, "value": "Правда" },
            "answer2": { "result": false, "value": "Неправда" }
        },
        {
            "question": "Стрелочные функции анонимные",
            "answer1": { "result": true, "value": "Правда" },
            "answer2": { "result": false, "value": "Неправда" }
        },
        {
            "question": "Что такое Арность?",
            "answer1": { "result": true, "value": "Это количество аргументов функции" },
            "answer2": { "result": false, "value": "Это длинна массива" }
        },
        {
            "question": "Функция parseFloat()преобразуеттекст в",
            "answer1": { "result": false, "value": "Целое число" },
            "answer2": { "result": true, "value": "Вещественное число" }
        }
    ]
`;
