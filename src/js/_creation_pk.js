import { Pk } from './_pk_class';


// Перекидные клапана
var pk = [
    [
        "img/details_img/pixil-Pk_33-15_L_YA.png",
        "img/details_img/pixil-Pk_33-15_or_YA.png",
        "img/details_img/pixil-Pk_33-15_R_YA.png"
    ],
    [
        "img/details_img/pixil-Pk_33-15_L_XA.png",
        "img/details_img/pixil-Pk_33-15_or_XA.png",
        "img/details_img/pixil-Pk_33-15_R_XA.png"
    ],
    [
        "img/details_img/pixil-Pk_33-15_L_YB.png",
        "img/details_img/pixil-Pk_33-15_or_YB.png",
        "img/details_img/pixil-Pk_33-15_R_YB.png"
    ]
];
//         (top, left, className, namePk, idBlock, imgList, wayLeft, wayRiget)
// Лк-10
var pk_2 = new Pk(50, 321, "pk", "Пк-2", "avto", pk[1], "Пк-7", "Пк-9");
var pk_7 = new Pk(94, 453, "pk", "Пк-7", "avto", pk[0], "Лк-16", "Лк-15");
var pk_9 = new Pk(41, 350, "pk", "Пк-9", "avto", pk[1], "Лк-59", "Лк-60");
// Лк-8
var pk_1 = new Pk(1, 321, "pk", "Пк-1", "avto", pk[1], "Пк-6", "Пк-8", pk_1);
var pk_6 = new Pk(45, 453, "pk", "Пк-6", "avto", pk[0], "Лк-16", "Лк-15");
var pk_8 = new Pk(-8, 350, "pk", "Пк-8", "avto", pk[1], "Лк-59", "Лк-60");
// Лк-13
var pk_48 = new Pk(61, 374, "pk", "Пк-48", "one-block", pk[2], "Лк-59", "Лк-16");
// Лк-14
var pk_50 = new Pk(309, 337, "pk", "Пк-50", "one-block", pk[0], "Лк-15", "Лк-60");

// Список перекедных клапанов
export var pkObjects = [pk_2, pk_7, pk_9, pk_1, pk_6, pk_8, pk_50, pk_48];