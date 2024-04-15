This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Как запустить проект

-   скачиваем zip файл репозитория или клонируем репозиторий, используя команду `git clone <адрес_репозитория>`
-   переходим в терминале в скачанную папку и скачиваем npm пакеты, используя команду `npm i`
-   далее запускаем development server:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Тестовое задание **React Developer (Next.js)**

Ниже приложила задачи из Notion

-   всё, что зачеркнуто, сделано
-   осталось связать корзину с информацией из карточек товара и отправлять POST запрос при клике на кнопку "заказать" из корзины товаров

По UI:

-   названия товаров и описания не выходят за пределы своего блока
-   прилоадер добавить не успела (но у меня в gitHub есть кейсы, делала такое на React)
-   старалась всё оборачивать в функции для расширяемости, давать понятные имена переменным и функциям, чтобы была читабельность

##

-   ~~визуал по фигме [https://www.figma.com/file/XIYVl8ICFkdl3HJZcc8o8B/тестовое?type=design&node-id=0%3A1&mode=design&t=6xUI2e3VtlUzDocD-1](https://www.figma.com/file/XIYVl8ICFkdl3HJZcc8o8B/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?type=design&node-id=0%3A1&mode=design&t=6xUI2e3VtlUzDocD-1)~~
-   ~~должен быть адаптирован под мобильные устройства и планшеты~~
-   ~~наполнение контентом отзывов из html обернутого в json~~
-   ~~наполнение контентом товары по апи~~
    -   ~~показывать первую страницу сразу~~
    -   ~~остальные страницы подгружать ajax запросом, по мере прокрутки вниз~~
-   ~~при нажатии на кнопку "купить", она должна меняться на кнопки + и - и поле для ввода кол-ва товара, значение поля должно быть 1, кнопки должны добавлять отбавлять товар, так же должна быть возможность вписать в поле для ввода любое кол-во.~~
-   при изменении кол-ва какого-либо из товаров должна меняться информация в корзине (та что над полем с телефоном)
-   ~~набранные товары и введенный номер телефона должны сохраняться при перезагрузке страницы
-   ~~маска в поле для телефона~~
-   ~~при нажатии кнопки "заказать" идет проверка того что телефон полностью введен~~
    -   ~~если всё хорошо - отправлять запрос на сервер~~
    -   ~~если есть ошибки - подсветить соответствующие поля красным (поле номера телефона)~~
-   после отправки запроса и получения ответа от сервера отобразить попап что всё успешно (сделать попап в стиле самого сайта)
