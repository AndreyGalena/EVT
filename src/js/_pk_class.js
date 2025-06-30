import { deleteButtonPk } from './_function';


export class Pk {
    constructor(top, left, className, namePk,
        idBlock, imgList, wayLeft, wayRiget) {
        this.topPk = top;
        this.leftPk = left;
        this.className = className;
        this.id = namePk;
        this.namePk = namePk;
        this.idBlock = idBlock;
        this.list = imgList;
        this.wayLeft = wayLeft;
        this.wayRiget = wayRiget;
        this.flagLeft = false;
        this.flagRight = true;

        this.drawPk();
        this.setup();
    }
    drawPk() { // создаём Пк
        this.img = document.createElement('img');
        this.img.className = this.className;
        this.img.id = this.id;
        this.img.src = this.list[0];
        this.img.alt = this.namePk;
        this.img.style.top = `${this.topPk}px`;
        this.img.style.left = `${this.leftPk}px`;
        document.getElementById(this.idBlock).append(this.img);
    }

    setup() { // Запускает событие "Клик по Пк"
        this.clickHandler = this.clickHandler.bind(this);
        this.img.addEventListener('click', this.clickHandler);
    }

    drawName() { // Выводит название в Раб. область
        this.nameRp = document.createElement('h2');
        this.nameRp.id = "nameRp";
        this.nameRp.innerHTML = `${this.namePk}`;
        document.getElementById("name-element").append(this.nameRp);
    }

    clickHandler(event) { // действие после нажатия на Пк
        deleteButtonPk();
        this.drawLeftAndRiget(event);
        event.stopPropagation();
        this.img.style.boxShadow = '0px 0px 10px Green';
        this.drawName();
        // Клик по кнопкам
        this.clickLeft = this.clickLeft.bind(this);
        this.buLeft.addEventListener('click', this.clickLeft);

        this.clickRight = this.clickRight.bind(this);
        this.buRight.addEventListener('click', this.clickRight);
    }

    listingOr() { // отображение Пк в среднем положении
        this.img.src = this.list[1];
        this.buLeft.style.backgroundColor = "orange";
        this.buRight.style.backgroundColor = "orange";
    }

    // Исполнительные методы при нажатии на кнопки Пк
    clickLeft(event) {
        event.stopPropagation();
        if (this.flagLeft) {
            setTimeout(() => { this.listingOr(); }, 100); // Or

            setTimeout(() => {
                this.img.src = this.list[0]; // это клапан
                this.buRight.style.backgroundColor = "green";
                this.buLeft.style.backgroundColor = "red";
                this.flagRight = true;
                this.flagLeft = false;
            }, 1000); // Left
        }
    }
    clickRight(event) {
        event.stopPropagation();
        if (this.flagRight) {
            setTimeout(() => { this.listingOr(); }, 100); // Or

            setTimeout(() => {
                this.img.src = this.list[2];
                this.buLeft.style.backgroundColor = "green"; // это кнопка
                this.buRight.style.backgroundColor = "red";
                this.flagLeft = true;
                this.flagRight = false;
            }, 1000); // Right
        }
    }

    // Создание кнопок
    drawLeftAndRiget(event) {
        event.stopPropagation();
        this.buLeft = document.createElement('div');
        this.buLeft.className = 'button-left';
        this.buLeft.innerHTML = `<h3>${this.wayLeft}</h3>`;
        this.buLeft.id = 'butPk';
        if (this.flagLeft) {
            this.buLeft.style.backgroundColor = "green";
        } else {
            this.buLeft.style.backgroundColor = "red";
        }
        document.getElementById("consol").append(this.buLeft);

        this.buRight = document.createElement('div');
        this.buRight.className = 'button-riget';
        this.buRight.innerHTML = `<h3>${this.wayRiget}</h3>`;
        this.buRight.id = 'butPk';
        if (this.flagRight) {
            this.buRight.style.backgroundColor = "green";
        } else {
            this.buRight.style.backgroundColor = "red";
        }
        document.getElementById("consol").append(this.buRight);
    }
}