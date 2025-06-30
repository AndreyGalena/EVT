import { Li } from './js/_con_class';
import { offLine, deleteButton, deleteButtonPk } from "./js/_function";
import { objects } from './js/_creation_con';


// Функция создания всех элементов конвеера.
export function creation(top, left, num, con, block, idLi = 'li', direction = 'XA', urlLi = "img/details_img/pixil-Lk_3-12-li_Y.png") {
    if (direction == 'YA' || direction == 'YB') {
        urlLi = "img/details_img/pixil-Lk_3-12-li_X.png";
    }
    for (let i = 0; i < num; i++) {
        let li = new Li(top, left, block, direction, urlLi, idLi);
        con.list.push(li);
        li.drawLi();
        if (direction == 'XA' || direction == 'XB') {
            left += 3;
        } else {
            top += 3;
        }
    }
}

// Закрытие меню и кнопок при клик body.
var clickBody = document.body;

// Если кликнул по body.
clickBody.addEventListener('click', function () {
    offLine();
    deleteButton();
    deleteButtonPk();
});

// Если список конвееров не пуст.
if (objects) {
    // Цикол движения конвеера.
    setInterval(function () {
        for (let i = 0; i < objects.length; i++) {
            if (objects[i].flage) objects[i].set();
        };
    }, 100);
}