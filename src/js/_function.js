import { objects, zdObjects, pkObjects } from '../main';

// Общая функция StopCon.
export function offLine() {
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
    for (let i = 0; i < pkObjects.length; i++) {
        pkObjects[i].img.style.boxShadow = 'none';
        // Удаление элементов кнопки
        var idPk = document.querySelectorAll("#butPk");
        for (let i = 0; i < idPk.length; i++) {
            idPk[i].remove();
        }
    }
}