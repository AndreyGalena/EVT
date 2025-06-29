// import { deleteButton, deleteButtonPk } from './_function';

export class Con {
    constructor(topCo, leftCo, className, nameLk, nameID, url,
        topName, leftName, block, liStart, liFinish) {
        this.topCo = topCo + "px";
        this.leftCo = leftCo + "px";
        this.className = className;
        this.url = url;
        this.block = block;
        this.list = [];
        this.flage = false;
        this.flageBu = true;
        this.liStart = liStart;
        this.liFinish = liFinish;

        this.name = {
            nameLk: nameLk,
            nameID: nameID,
            topName: topName,
            leftName: leftName,
        }

        this.drawCon();
        this.setup();
        this.drawName();
    }

    // Метод прорисовки конвеера
    drawCon() {
        this.img = document.createElement('img');
        this.img.className = this.className;
        this.img.src = this.url;
        this.img.alt = this.name.nameLk;
        this.img.style.top = this.topCo;
        this.img.style.left = this.leftCo;
        document.getElementById(this.block).append(this.img);
    }

    setup() { // Запускает событие "Клик по Лк"
        // Что-бы функция не теряла свойство this.
        this.clickHandler = this.clickHandler.bind(this);
        this.img.addEventListener('click', this.clickHandler);
    }

    clickHandler(event) { // действие после нажатия на Лк
        // deleteButton();
        // deleteButtonPk();
        this.addButtonOn();
        this.addButtonOff();
        event.stopPropagation();
        this.img.style.boxShadow = '0px 0px 15px green';
        this.drawNameRp();
        // Клик по Пуску.
        this.clickOn = this.clickOn.bind(this);
        this.buHtmlOn.addEventListener('click', this.clickOn);
        // Клик по Стопу.
        this.clickOff = this.clickOff.bind(this);
        this.buHtmlOff.addEventListener('click', this.clickOff);
    }

    // Флаги по запуску Лк
    clickOn(event) {
        event.stopPropagation();
        this.flage = true;
    }
    clickOff(event) {
        event.stopPropagation();
        this.flage = false;
    }

    // Создаём кнопки
    addButtonOn() {
        if (this.flageBu) {
            this.buHtmlOn = document.createElement('div');
            this.buHtmlOn.className = 'button-on';
            this.buHtmlOn.innerHTML = '<h3>Пуск</h3>';
            this.buHtmlOn.id = 'but';
            document.getElementById("consol").append(this.buHtmlOn);
        }
    }
    addButtonOff() {
        if (this.flageBu) {
            this.buHtmlOff = document.createElement('div');
            this.buHtmlOff.className = 'button-off';
            this.buHtmlOff.innerHTML = '<h3>Стоп</h3>';
            this.buHtmlOff.id = 'but';
            document.getElementById("consol").append(this.buHtmlOff);
        }
        this.flageBu = false;
    }
    drawName() { // Создаём имя конвеера
        this.nameDiv = document.createElement('div');
        this.nameDiv.innerHTML = `<h3>${this.name.nameLk}</h3>`;
        this.nameDiv.id = this.name.nameID;
        this.nameDiv.style.top = `${this.name.topName}px`;
        this.nameDiv.style.left = `${this.name.leftName}px`;
        document.getElementById(this.block).append(this.nameDiv);
    }
    drawNameRp() { // Выводит название в Раб. облость
        this.nameRp = document.createElement('h2');
        this.nameRp.id = "nameRp";
        if (this.name.nameLk.length < 3) {
            this.nameRp.innerHTML = `Лк-${this.name.nameLk}`;
        } else {
            this.nameRp.innerHTML = `${this.name.nameLk}`;
        }
        document.getElementById("name-element").append(this.nameRp);
    }

    //!!!!! Пока не задействован
    // Метод фона элементов конвеера.
    bgElement(color = "red") {
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].img.style.backgroundColor = color;
        }
    }

    // Метод запуска конвеера.
    set() {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].direction == 'XA') {
                if (this.list[i].leftLi < this.liFinish) {
                    this.list[i].muveXA(1);
                } else {
                    this.list[i].leftLi = this.liStart;
                }
            } else if (this.list[i].direction == 'XB') {
                if (this.list[i].leftLi > this.liStart) {
                    this.list[i].muveXB(1);
                } else {
                    this.list[i].leftLi = this.liFinish;
                }
            } else if (this.list[i].direction == 'YA') {
                if (this.list[i].topLi < this.liFinish) {
                    this.list[i].muveYA(1);
                } else {
                    this.list[i].topLi = this.liStart;
                }
            } else if (this.list[i].direction == 'YB') {
                if (this.list[i].topLi > this.liStart) {
                    this.list[i].muveYB(1);
                } else {
                    this.list[i].topLi = this.liFinish;
                }
            }
        }
    }
}

//--------------Li------------------------------------------------------
export class Li {
    // (top, left, block, direction, urlLi, idLi)
    constructor(top, left, block, direction, urlLi, idLi) {
        this.topLi = top;
        this.leftLi = left;
        this.block = block;
        this.direction = direction || 'XA';
        this.urlLi = urlLi;
        this.idLi = idLi;
    }

    // Метод создаёт элемент конвеера.
    drawLi() {
        this.img = document.createElement("img"); // создаём новый элемент.
        this.img.src = this.urlLi; // адрес картинки.
        this.img.id = this.idLi;
        this.img.style.top = `${this.topLi}px`; // приобразует в строку.
        this.img.style.left = `${this.leftLi}px`;
        document.getElementById(this.block).append(this.img);
    }

    // Метод вращения конвеера по X+.
    muveXA(speed) {
        this.leftLi += speed;
        this.img.style.left = `${this.leftLi}px`; // приобразует в строку.
    }

    // Метод вращения конвеера X-.
    muveXB(speed) {
        this.leftLi -= speed;
        this.img.style.left = `${this.leftLi}px`; // приобразует в строку.
    }

    // Метод вращения конвеера по Y+.
    muveYA(speed) {
        this.topLi += speed;
        this.img.style.top = `${this.topLi}px`; // приобразует в строку.
    }

    // Метод вращения конвеера Y-.
    muveYB(speed) {
        this.topLi -= speed;
        this.img.style.top = `${this.topLi}px`; // приобразует в строку.
    }
}
//---------------------------------------------------------------------