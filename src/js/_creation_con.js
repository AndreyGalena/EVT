import * as utils from "./_function"; // функции в объекте что-бы избежать цикличности. 
import { Con } from './_con_class';
import { creation } from '../main';


// Виды конвееров.
var lk_49_XA = "img/details_img/pixil-Lk_49-32_14_XA.png";
var lk_100_XA = "img/details_img/pixil-Lk_100-32_14_XA.png";
var lk_100_XB = "img/details_img/pixil-Lk_100-32_14_XB.png";
var lk_133_XA = "img/details_img/pixil-Lk_133-32_14_XA.png";
var lk_133_YB = "img/details_img/pixil-Lk_133-32_14_YB.png";
var lk_175_XA = "img/details_img/pixil-Lk_175-32_14_XA.png";
var lk_189_XA = "img/details_img/pixil-Lk_189-32_14_XA.png";
var lk_221_YA = "img/details_img/pixil-Lk_221-32_14_YA.png";
var lk_221_YB = "img/details_img/pixil-Lk_221-32_14_YB.png";
var lk_235_XA = "img/details_img/pixil-Lk_235-32_14_XA.png";
var lk_298_XA = "img/details_img/pixil-Lk_298-32_14_XA_min.png";
var lk_313_XA = "img/details_img/pixil-Lk_313-32_14_XA.png";
var lk_453_YB = "img/details_img/pixil-Lk_453-32_14_YB_min.png";
var lk_503_YB = "img/details_img/pixil-Lk_503-32_14_YB_min.png";
var lk_517_XB = "img/details_img/pixil-Lk_517-32_14_XB_min.png";
var lk_517_YA = "img/details_img/pixil-Lk_517-32_14_YA_min.png";
var lk_555_XA = "img/details_img/pixil-Lk_555-32_14_XA_min.png";
var lk_600_XB = "img/details_img/pixil-Lk_600-32_14_XB_min.png";
var lk_682_XA = "img/details_img/pixil-Lk_682-32_14_XA_min.png";
var lk_766_YA = "img/details_img/pixil-Lk_766-32_14_YA_min.png";
var lk_989_YB = "img/details_img/pixil-Lk_989-32_14_YB_min.png";

/* 
  !!! При создании экземпляров "con" в аргументы передаём внешние функции упакованые в объект utils 
      для избежания цикличности.
*/

//               (topCo, leftCo, className, nameLk, nameID, url, topName, leftName, block, liStart, liFinish, utils)
//      (top, left, num, con, block, idLi=, direction=, urlLi=)

// con-1
var con1 = new Con(200, 2, "con-1", "Лк-1", "name1", lk_100_XA, 224, 30, "avto", 8, 85, utils);
creation(210, 9, 26, con1, "avto"); // "li"
// con-2
var con2 = new Con(344, 2, "con-2", "Лк-2", "name2", lk_100_XA, 368, 30, "avto", 8, 85, utils);
creation(354, 9, 26, con2, "avto");
// con-3
var con3 = new Con(498, 2, "con-3", "Лк-3", "name3", lk_100_XA, 522, 30, "avto", 8, 85, utils);
creation(508, 9, 26, con3, "avto");
// con-4
var con4 = new Con(200, 197, "con-4", "Лк-4", "name4", lk_100_XB, 224, 230, "avto", 212, 289, utils);
creation(210, 214, 26, con4, "avto", 'li', 'XB');
// con-5
var con5 = new Con(344, 197, "con-5", "Лк-5", "name5", lk_100_XB, 368, 230, "avto", 212, 289, utils);
creation(354, 214, 26, con5, "avto", 'li', 'XB');
// con-6
var con6 = new Con(498, 197, "con-6", "Лк-6", "name6", lk_100_XB, 522, 230, "avto", 212, 289, utils);
creation(508, 214, 26, con6, "avto", 'li', 'XB');
// con-7
var con7 = new Con(28, 97, "con-7", "Лк-7", "name7", lk_503_YB, 532, 96, "avto", 45, 524, utils);
creation(45, 107, 160, con7, "avto", 'li', 'YB');
// con-8
var con8 = new Con(2, 85, "con-8", "Лк-8", "name8", lk_235_XA, 26, 182, "avto", 90, 302, utils);
creation(12, 90, 71, con8, "avto");
// con-9
var con9 = new Con(77, 170, "con-9", "Лк-9", "name9", lk_453_YB, 532, 170, "avto", 94, 522, utils);
creation(94, 180, 143, con9, "avto", 'li', 'YB');
// con-10
var con10 = new Con(50, 144, "con-10", "Лк-10", "name10", lk_175_XA, 74, 228, "avto", 149, 301, utils);
creation(60, 149, 51, con10, "avto");
// con-11
var con11 = new Con(250, 25, "con-11", "Лк-11", "name11", lk_298_XA, 280, 146, "one-block", 30, 305, utils);
creation(260, 30, 92, con11, "one-block");
// con-12
var con12 = new Con(100, 25, "con-12", "Лк-12", "name12", lk_298_XA, 130, 146, "one-block", 30, 305, utils);
creation(110, 30, 92, con12, "one-block");
// con-13
var con13 = new Con(78, 375, "con-13", "13", "name13", lk_221_YB, 80, 382, "one-block", 92, 289, utils);
creation(92, 385, 66, con13, "one-block", "li", 'YB');
// con-14
var con14 = new Con(86, 337, "con-14", "14", "name14", lk_221_YA, 291, 344, "one-block", 91, 288, utils);
creation(93, 347, 66, con14, "one-block", "li", "YA");
// con-15
var con15 = new Con(75, 184, "con-15", "15", "name15", lk_766_YA, 826, 191, "in-out", 81, 830, utils);
creation(81, 194, 250, con15, "in-out", 'li', 'YA');
// con-16
var con16 = new Con(75, 134, "con-16", "16", "name16", lk_766_YA, 826, 142, "in-out", 81, 830, utils);
creation(81, 144, 250, con16, "in-out", 'li', 'YA');
// con-17
var con17 = new Con(707, 257, "con-17", "17", "name17", lk_133_YB, 710, 265, "in-out", 723, 830, utils);
creation(725, 267, 36, con17, "in-out", 'li', 'YB');
// con-18
var con18 = new Con(707, 224, "con-18", "18", "name18", lk_133_YB, 710, 232, "in-out", 723, 830, utils);
creation(725, 234, 36, con18, "in-out", 'li', 'YB');
// con-19
var con19 = new Con(531, 257, "con-19", "19", "name19", lk_133_YB, 533, 265, "in-out", 547, 654, utils);
creation(549, 267, 36, con19, "in-out", 'li', 'YB');
// con-20
var con20 = new Con(531, 224, "con-20", "20", "name20", lk_133_YB, 533, 232, "in-out", 547, 654, utils);
creation(549, 234, 36, con20, "in-out", 'li', 'YB');
// con-21
var con21 = new Con(354, 257, "con-21", "21", "name21", lk_133_YB, 356, 265, "in-out", 370, 477, utils);
creation(372, 267, 36, con21, "in-out", 'li', 'YB');
// con-22
var con22 = new Con(354, 224, "con-22", "22", "name22", lk_133_YB, 356, 232, "in-out", 370, 477, utils);
creation(372, 234, 36, con22, "in-out", 'li', 'YB');
// con-23
var con23 = new Con(175, 240, "con-23", "23", "name23", lk_133_YB, 177, 248, "in-out", 192, 299, utils);
creation(193, 250, 36, con23, "in-out", 'li', 'YB');
// con-24
var con24 = new Con(30, 100, "con-24", "Лк-24", "name24", lk_298_XA, 23, 225, "sclad-1", 103, 381, utils);
creation(40, 105, 93, con24, "sclad-1");
// con-25
var con25 = new Con(205, -18, "con-25", "Лк-25", "name25", lk_517_XB, 229, 225, "sclad-1", -1, 490, utils);
creation(215, 0, 164, con25, "sclad-1", 'li', 'XB');
// con-26
var con26 = new Con(151, -18, "con-26", "Лк-26", "name26", lk_517_XB, 175, 225, "sclad-1", -1, 490, utils);
creation(161, 0, 164, con26, "sclad-1", 'li', 'XB');
// con-27
var con27 = new Con(326, -109, "con-27", "Лк-27", "name27", lk_133_XA, 350, -36, "tank", -104, 6, utils);
creation(336, -104, 37, con27, "tank");
// con-28
var con28 = new Con(326, 46, "con-28", "Лк-28", "name28", lk_49_XA, 358, 49, "tank", 50, 79, utils);
creation(336, 51, 10, con28, "tank", 'li', 'XA');
// con-29
var con29 = new Con(326, 116, "con-29", "Лк-29", "name29", lk_49_XA, 358, 120, "tank", 120, 149, utils);
creation(336, 121, 10, con29, "tank", 'li', 'XA');
// con-30
var con30 = new Con(326, 186, "con-30", "Лк-30", "name30", lk_49_XA, 358, 190, "tank", 190, 219, utils);
creation(336, 191, 10, con30, "tank", 'li', 'XA');
// con-31
var con31 = new Con(326, 256, "con-31", "Лк-31", "name31", lk_313_XA, 350, 410, "tank", 260, 550, utils);
creation(336, 261, 97, con31, "tank", 'li', 'XA');
// con-32
var con32 = new Con(151, -109, "con-32", "Лк-32", "name32", lk_133_XA, 175, -36, "tank", -104, 6, utils);
creation(161, -104, 37, con32, "tank", 'li', 'XA');
// con-33
var con33 = new Con(151, 46, "con-33", "Лк-33", "name33", lk_189_XA, 175, 119, "tank", 50, 217, utils);
creation(161, 51, 56, con33, "tank", 'li', 'XA');
// con-34
var con34 = new Con(151, 256, "con-34", "Лк-34", "name34", lk_313_XA, 175, 410, "tank", 260, 550, utils);
creation(161, 261, 97, con34, "tank", 'li', 'XA');
// con-35
var con35 = new Con(-27, -109, "con-35", "Лк-35", "name35", lk_133_XA, -3, -36, "tank", -104, 6, utils);
creation(-17, -104, 37, con35, "tank", 'li', 'XA');
// con-36
var con36 = new Con(-27, 46, "con-36", "Лк-36", "name36", lk_189_XA, -3, 119, "tank", 50, 217, utils);
creation(-17, 51, 56, con36, "tank", 'li', 'XA');
// con-37
var con37 = new Con(-27, 256, "con-37", "Лк-37", "name37", lk_313_XA, -3, 410, "tank", 260, 550, utils);
creation(-17, 261, 97, con37, "tank", 'li', 'XA');
// con-51
var con51 = new Con(442, -16, "con-51", "Лк-51", "name51", lk_600_XB, 466, 264, "tank", 0, 575, utils);
creation(452, 0, 193, con51, "tank", 'li', 'XB');
// con-52
var con52 = new Con(267, -16, "con-52", "Лк-52", "name52", lk_600_XB, 291, 264, "tank", 0, 575, utils);
creation(277, 0, 193, con52, "tank", 'li', 'XB');
// con-53
var con53 = new Con(88, -16, "con-53", "Лк-53", "name53", lk_600_XB, 112, 264, "tank", 0, 575, utils);
creation(98, 0, 193, con53, "tank", 'li', 'XB');
// con-54
var con54 = new Con(30, 100, "con-54", "Лк-54", "name54", lk_298_XA, 23, 225, "sclad-2", 103, 381, utils);
creation(40, 105, 93, con54, "sclad-2");
// con-55
var con55 = new Con(151, -18, "con-55", "Лк-55", "name55", lk_517_XB, 175, 225, "sclad-2", -1, 490, utils);
creation(161, 0, 164, con55, "sclad-2", 'li', 'XB');
// con-56
var con56 = new Con(205, -18, "con-56", "Лк-56", "name56", lk_517_XB, 229, 225, "sclad-2", -1, 490, utils);
creation(215, 0, 164, con56, "sclad-2", 'li', 'XB');
// con-57
var con57 = new Con(83, 337, "con-57", "57", "name57", lk_989_YB, 86, 345, "in-out", 98, 1060, utils);
creation(100, 347, 321, con57, "in-out", 'li-F', 'YB');
// con-58
var con58 = new Con(83, 295, "con-58", "58", "name58", lk_989_YB, 86, 303, "in-out", 98, 1060, utils);
creation(100, 305, 321, con58, "in-out", 'li-F', 'YB');
// con-59
var con59 = new Con(34, 70, "con-59", "Лк-59", "name59", lk_555_XA, 60, 133, "out-pirs", 75, 605, utils);
creation(44, 77, 177, con59, "out-pirs", 'li', 'XA');
// con-60
var con60 = new Con(1, 2, "con-60", "Лк-60", "name60", lk_682_XA, 24, 133, "out-pirs", 8, 664, utils);
creation(11, 10, 219, con60, "out-pirs", 'li', 'XA');
// con-61
var con61 = new Con(120, 616, "con-61", "Лк-61", "name61", lk_100_XA, 144, 639, "out-pirs", 622, 696, utils);
creation(130, 624, 25, con61, "out-pirs", 'li', 'XA');
// con-62
var con62 = new Con(89, 677, "con-62", "Лк-62", "name62", lk_100_XA, 75, 722, "out-pirs", 683, 760, utils);
creation(99, 683, 26, con62, "out-pirs", 'li', 'XA');
// con-63
var con63 = new Con(117, 711, "con-63", "63", "name63", lk_766_YA, 865, 719, "out-pirs", 123, 863, utils);
creation(122, 721, 247, con63, "out-pirs", 'li', 'YA');
// con-64
var con64 = new Con(77, 771, "con-64", "64", "name64", lk_517_YA, 576, 779, "out-pirs", 83, 574, utils);
creation(82, 781, 164, con64, "out-pirs", 'li', 'YA');



// Список объектов.
export var objects = [con1, con2, con3, con4, con5, con6, con7, con8, con9,
    con10, con11, con12, con13, con14, con15, con16, con17, con18, con19, con20, con21,
    con22, con23, con24, con26, con25, con27, con28, con29, con30,
    con31, con32, con33, con34, con35, con36, con37, con51, con52, con53,
    con54, con55, con56, con57, con58, con59, con60, con61, con62, con63, con64,
];