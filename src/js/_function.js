import { objects } from './_creation_con';
import { pkObjects } from './_creation_pk';
import { zdObjects } from './_creation_zd';


// Общая функция StopCon.
export function offLine() {
    // Если список ещё не создан.
    if (!objects) {
        return;
    }
    for (let i = 0; i < objects.length; i++) {
        objects[i].img.style.boxShadow = 'none';
        objects[i].flageBu = true;
        // Удаление html элемента.
        var description = document.querySelectorAll("#but");
        for (let i = 0; i < description.length; i++) {
            description[i].remove();
        }
    }
}

// Функция перехода от задвижки к задвижки
export function deleteButton() {
    offLine();
    // Если список ещё не создан.
    if (!zdObjects) {
        return;
    }
    for (let i = 0; i < zdObjects.length; i++) {
        zdObjects[i].img.style.boxShadow = 'none';
        // Удаление элементов кнопки
        var idZd = document.querySelectorAll("#butZd");
        var nameElement = document.querySelectorAll("#nameRp");
        for (let i = 0; i < idZd.length; i++) {
            idZd[i].remove();
        }
        for (let i = 0; i < nameElement.length; i++) {
            nameElement[i].remove(); // удаляет
        }
    }
}

// Функция перехода от клапана к клапану
export function deleteButtonPk() {
    offLine();
    deleteButton()
    // Если список ещё не создан.
    if (!pkObjects) {
        return;
    }
    for (let i = 0; i < pkObjects.length; i++) {
        pkObjects[i].img.style.boxShadow = 'none';
        // Удаление элементов кнопки
        var idPk = document.querySelectorAll("#butPk");
        for (let i = 0; i < idPk.length; i++) {
            idPk[i].remove();
        }
    }
}