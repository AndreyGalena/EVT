// import { deleteButton, deleteButtonPk } from './_function';

export class Zd {
    constructor(top, left, nameZd, idBlock, className = "zd") {
        this.topZd = top;
        this.leftZd = left;
        this.className = className;
        this.id = nameZd;
        this.nameZd = nameZd;
        this.idBlock = idBlock;
        this.flagOpen = true;
        this.flagClosed = false;
        this.list = [
            "img/details_img/pixil-Zd_off_20x20.png",
            "img/details_img/pixil-Zd_or_20x20.png",
            "img/details_img/pixil-Zd_on_20x20.png"
        ]

        this.drawZd();
        this.setup();
    }
    drawZd() { // создание Зд
        this.img = document.createElement('img');
        this.img.className = this.className;
        this.img.id = this.id;
        this.img.src = this.list[0];
        this.img.alt = this.nameZd;
        this.img.style.top = `${this.topZd}px`;
        this.img.style.left = `${this.leftZd}px`;
        document.getElementById(this.idBlock).append(this.img);
    }

    setup() { // Запускает событие "Клик по Зд"
        this.clickHandler = this.clickHandler.bind(this);
        this.img.addEventListener('click', this.clickHandler);
    }

    drawName() { // Выводит название в Раб. облость
        this.nameRp = document.createElement('h2');
        this.nameRp.id = "nameRp";
        this.nameRp.innerHTML = `Зд-${this.nameZd}`;
        document.getElementById("name-element").append(this.nameRp);
    }

    clickHandler(event) { // действие после нажатия на Зд
        // deleteButton();
        // deleteButtonPk();
        this.drawOpenAndClosed(event);
        event.stopPropagation();
        this.img.style.boxShadow = '0px 0px 10px Green';
        this.drawName();
        // Клик по кнопкам
        this.clickOpen = this.clickOpen.bind(this);
        this.buOpen.addEventListener('click', this.clickOpen);

        this.clickClosed = this.clickClosed.bind(this);
        this.buClosed.addEventListener('click', this.clickClosed);
    }

    listingOr() { // отображение Зд в среднем положении
        this.img.src = this.list[1];
        this.buOpen.style.backgroundColor = "orange";
        this.buClosed.style.backgroundColor = "orange";
    }

    // Исполнительные методы при нажатии на кнопки Зд
    clickOpen(event) {
        event.stopPropagation();
        if (this.flagOpen) {
            setTimeout(() => { this.listingOr(); }, 100); // Or

            setTimeout(() => {
                this.img.src = this.list[2];
                this.buOpen.style.backgroundColor = "red";
                this.buClosed.style.backgroundColor = "green";
            }, 1000); // On
            this.flagOpen = false;
            this.flagClosed = true;
        }
    }
    clickClosed(event) {
        event.stopPropagation();
        if (this.flagClosed) {
            setTimeout(() => { this.listingOr(); }, 100); // Or

            setTimeout(() => {
                this.img.src = this.list[0];
                this.buOpen.style.backgroundColor = "green"; // это кнопка
                this.buClosed.style.backgroundColor = "red";
            }, 1000); // Off
            this.flagOpen = true;
            this.flagClosed = false;
        }
    }

    // Создание кнопок
    drawOpenAndClosed(event) {
        event.stopPropagation();
        this.buOpen = document.createElement('div');
        this.buOpen.className = 'button-open';
        this.buOpen.innerHTML = '<h3>Открыть</h3>';
        this.buOpen.id = 'butZd';
        if (this.flagOpen) {
            this.buOpen.style.backgroundColor = "green";
        } else {
            this.buOpen.style.backgroundColor = "red";
        }
        document.getElementById("consol").append(this.buOpen);

        this.buClosed = document.createElement('div');
        this.buClosed.className = 'button-closed';
        this.buClosed.innerHTML = '<h3>Закрыть</h3>';
        this.buClosed.id = 'butZd';
        if (this.flagClosed) {
            this.buClosed.style.backgroundColor = "green";
        } else {
            this.buClosed.style.backgroundColor = "red";
        }
        document.getElementById("consol").append(this.buClosed);
    }
}