// Функция создания всех элементов конвеера.
function creation(top, left, num, con, block, idLi = 'li', direction = 'XA', urlLi = "img/details_img/pixil-Lk_3-12-li_Y.png") {
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


//               (topCo, leftCo, className, nameLk, nameID, url, topName, leftName, block, liStart, liFinish)
//      (top, left, num, con, block, idLi=, direction=, urlLi=)

// con-1
var con1 = new Con(200, 2, "con-1", "Лк-1", "name1", lk_100_XA, 224, 30, "avto", 8, 85);
creation(210, 9, 26, con1, "avto"); // "li"
// con-2
var con2 = new Con(344, 2, "con-2", "Лк-2", "name2", lk_100_XA, 368, 30, "avto", 8, 85);
creation(354, 9, 26, con2, "avto");
// con-3
var con3 = new Con(498, 2, "con-3", "Лк-3", "name3", lk_100_XA, 522, 30, "avto", 8, 85);
creation(508, 9, 26, con3, "avto");
// con-4
var con4 = new Con(200, 197, "con-4", "Лк-4", "name4", lk_100_XB, 224, 230, "avto", 212, 289);
creation(210, 214, 26, con4, "avto", 'li', 'XB');
// con-5
var con5 = new Con(344, 197, "con-5", "Лк-5", "name5", lk_100_XB, 368, 230, "avto", 212, 289);
creation(354, 214, 26, con5, "avto", 'li', 'XB');
// con-6
var con6 = new Con(498, 197, "con-6", "Лк-6", "name6", lk_100_XB, 522, 230, "avto", 212, 289);
creation(508, 214, 26, con6, "avto", 'li', 'XB');
// con-7
var con7 = new Con(28, 97, "con-7", "Лк-7", "name7", lk_503_YB, 532, 96, "avto", 45, 524);
creation(45, 107, 160, con7, "avto", 'li', 'YB');
// con-8
var con8 = new Con(2, 85, "con-8", "Лк-8", "name8", lk_235_XA, 26, 182, "avto", 90, 302);
creation(12, 90, 71, con8, "avto");
// con-9
var con9 = new Con(77, 170, "con-9", "Лк-9", "name9", lk_453_YB, 532, 170, "avto", 94, 522);
creation(94, 180, 143, con9, "avto", 'li', 'YB');
// con-10
var con10 = new Con(50, 144, "con-10", "Лк-10", "name10", lk_175_XA, 74, 228, "avto", 149, 301);
creation(60, 149, 51, con10, "avto");
// con-11
var con11 = new Con(250, 25, "con-11", "Лк-11", "name11", lk_298_XA, 280, 146, "one-block", 30, 305);
creation(260, 30, 92, con11, "one-block");
// con-12
var con12 = new Con(100, 25, "con-12", "Лк-12", "name12", lk_298_XA, 130, 146, "one-block", 30, 305);
creation(110, 30, 92, con12, "one-block");
// con-13
var con13 = new Con(78, 375, "con-13", "13", "name13", lk_221_YB, 80, 382, "one-block", 92, 289);
creation(92, 385, 66, con13, "one-block", "li", 'YB');
// con-14
var con14 = new Con(86, 337, "con-14", "14", "name14", lk_221_YA, 291, 344, "one-block", 91, 288);
creation(93, 347, 66, con14, "one-block", "li", "YA");
// con-15
var con15 = new Con(75, 184, "con-15", "15", "name15", lk_766_YA, 826, 191, "in-out", 81, 830);
creation(81, 194, 250, con15, "in-out", 'li', 'YA');
// con-16
var con16 = new Con(75, 134, "con-16", "16", "name16", lk_766_YA, 826, 142, "in-out", 81, 830);
creation(81, 144, 250, con16, "in-out", 'li', 'YA');
// con-17
var con17 = new Con(707, 257, "con-17", "17", "name17", lk_133_YB, 710, 265, "in-out", 723, 830);
creation(725, 267, 36, con17, "in-out", 'li', 'YB');
// con-18
var con18 = new Con(707, 224, "con-18", "18", "name18", lk_133_YB, 710, 232, "in-out", 723, 830);
creation(725, 234, 36, con18, "in-out", 'li', 'YB');
// con-19
var con19 = new Con(531, 257, "con-19", "19", "name19", lk_133_YB, 533, 265, "in-out", 547, 654);
creation(549, 267, 36, con19, "in-out", 'li', 'YB');
// con-20
var con20 = new Con(531, 224, "con-20", "20", "name20", lk_133_YB, 533, 232, "in-out", 547, 654);
creation(549, 234, 36, con20, "in-out", 'li', 'YB');
// con-21
var con21 = new Con(354, 257, "con-21", "21", "name21", lk_133_YB, 356, 265, "in-out", 370, 477);
creation(372, 267, 36, con21, "in-out", 'li', 'YB');
// con-22
var con22 = new Con(354, 224, "con-22", "22", "name22", lk_133_YB, 356, 232, "in-out", 370, 477);
creation(372, 234, 36, con22, "in-out", 'li', 'YB');
// con-23
var con23 = new Con(175, 240, "con-23", "23", "name23", lk_133_YB, 177, 248, "in-out", 192, 299);
creation(193, 250, 36, con23, "in-out", 'li', 'YB');
// con-24
var con24 = new Con(30, 100, "con-24", "Лк-24", "name24", lk_298_XA, 23, 225, "sclad-1", 103, 381);
creation(40, 105, 93, con24, "sclad-1");
// con-25
var con25 = new Con(205, -18, "con-25", "Лк-25", "name25", lk_517_XB, 229, 225, "sclad-1", -1, 490);
creation(215, 0, 164, con25, "sclad-1", 'li', 'XB');
// con-26
var con26 = new Con(151, -18, "con-26", "Лк-26", "name26", lk_517_XB, 175, 225, "sclad-1", -1, 490);
creation(161, 0, 164, con26, "sclad-1", 'li', 'XB');
// con-27
var con27 = new Con(326, -109, "con-27", "Лк-27", "name27", lk_133_XA, 350, -36, "tank", -104, 6);
creation(336, -104, 37, con27, "tank");
// con-28
var con28 = new Con(326, 46, "con-28", "Лк-28", "name28", lk_49_XA, 358, 49, "tank", 50, 79);
creation(336, 51, 10, con28, "tank", 'li', 'XA');
// con-29
var con29 = new Con(326, 116, "con-29", "Лк-29", "name29", lk_49_XA, 358, 120, "tank", 120, 149);
creation(336, 121, 10, con29, "tank", 'li', 'XA');
// con-30
var con30 = new Con(326, 186, "con-30", "Лк-30", "name30", lk_49_XA, 358, 190, "tank", 190, 219);
creation(336, 191, 10, con30, "tank", 'li', 'XA');
// con-31
var con31 = new Con(326, 256, "con-31", "Лк-31", "name31", lk_313_XA, 350, 410, "tank", 260, 550);
creation(336, 261, 97, con31, "tank", 'li', 'XA');
// con-32
var con32 = new Con(151, -109, "con-32", "Лк-32", "name32", lk_133_XA, 175, -36, "tank", -104, 6);
creation(161, -104, 37, con32, "tank", 'li', 'XA');
// con-33
var con33 = new Con(151, 46, "con-33", "Лк-33", "name33", lk_189_XA, 175, 119, "tank", 50, 217);
creation(161, 51, 56, con33, "tank", 'li', 'XA');
// con-34
var con34 = new Con(151, 256, "con-34", "Лк-34", "name34", lk_313_XA, 175, 410, "tank", 260, 550);
creation(161, 261, 97, con34, "tank", 'li', 'XA');
// con-35
var con35 = new Con(-27, -109, "con-35", "Лк-35", "name35", lk_133_XA, -3, -36, "tank", -104, 6);
creation(-17, -104, 37, con35, "tank", 'li', 'XA');
// con-36
var con36 = new Con(-27, 46, "con-36", "Лк-36", "name36", lk_189_XA, -3, 119, "tank", 50, 217);
creation(-17, 51, 56, con36, "tank", 'li', 'XA');
// con-37
var con37 = new Con(-27, 256, "con-37", "Лк-37", "name37", lk_313_XA, -3, 410, "tank", 260, 550);
creation(-17, 261, 97, con37, "tank", 'li', 'XA');
// con-51
var con51 = new Con(442, -16, "con-51", "Лк-51", "name51", lk_600_XB, 466, 264, "tank", 0, 575);
creation(452, 0, 193, con51, "tank", 'li', 'XB');
// con-52
var con52 = new Con(267, -16, "con-52", "Лк-52", "name52", lk_600_XB, 291, 264, "tank", 0, 575);
creation(277, 0, 193, con52, "tank", 'li', 'XB');
// con-53
var con53 = new Con(88, -16, "con-53", "Лк-53", "name53", lk_600_XB, 112, 264, "tank", 0, 575);
creation(98, 0, 193, con53, "tank", 'li', 'XB');
// con-54
var con54 = new Con(30, 100, "con-54", "Лк-54", "name54", lk_298_XA, 23, 225, "sclad-2", 103, 381);
creation(40, 105, 93, con54, "sclad-2");
// con-55
var con55 = new Con(151, -18, "con-55", "Лк-55", "name55", lk_517_XB, 175, 225, "sclad-2", -1, 490);
creation(161, 0, 164, con55, "sclad-2", 'li', 'XB');
// con-56
var con56 = new Con(205, -18, "con-56", "Лк-56", "name56", lk_517_XB, 229, 225, "sclad-2", -1, 490);
creation(215, 0, 164, con56, "sclad-2", 'li', 'XB');
// con-57
var con57 = new Con(83, 337, "con-57", "57", "name57", lk_989_YB, 86, 345, "in-out", 98, 1060);
creation(100, 347, 321, con57, "in-out", 'li-F', 'YB');
// con-58
var con58 = new Con(83, 295, "con-58", "58", "name58", lk_989_YB, 86, 303, "in-out", 98, 1060);
creation(100, 305, 321, con58, "in-out", 'li-F', 'YB');
// con-59
var con59 = new Con(34, 70, "con-59", "Лк-59", "name59", lk_555_XA, 60, 133, "out-pirs", 75, 605);
creation(44, 77, 177, con59, "out-pirs", 'li', 'XA');
// con-60
var con60 = new Con(1, 2, "con-60", "Лк-60", "name60", lk_682_XA, 24, 133, "out-pirs", 8, 664);
creation(11, 10, 219, con60, "out-pirs", 'li', 'XA');
// con-61
var con61 = new Con(120, 616, "con-61", "Лк-61", "name61", lk_100_XA, 144, 639, "out-pirs", 622, 696);
creation(130, 624, 25, con61, "out-pirs", 'li', 'XA');
// con-62
var con62 = new Con(89, 677, "con-62", "Лк-62", "name62", lk_100_XA, 75, 722, "out-pirs", 683, 760);
creation(99, 683, 26, con62, "out-pirs", 'li', 'XA');
// con-63
var con63 = new Con(117, 711, "con-63", "63", "name63", lk_766_YA, 865, 719, "out-pirs", 123, 863);
creation(122, 721, 247, con63, "out-pirs", 'li', 'YA');
// con-64
var con64 = new Con(77, 771, "con-64", "64", "name64", lk_517_YA, 576, 779, "out-pirs", 83, 574);
creation(82, 781, 164, con64, "out-pirs", 'li', 'YA');

// Задвижки         (top, left, nameZd, idBlock, className = "zd")
var zd300_1 = new Zd(78, 30, "33-44", "one-block");
var zd300_2 = new Zd(78, 50, "33-43", "one-block");
var zd300_3 = new Zd(78, 70, "33-42", "one-block");
var zd300_4 = new Zd(78, 100, "33-41", "one-block");
var zd300_5 = new Zd(78, 120, "33-40", "one-block");
var zd300_6 = new Zd(78, 140, "33-39", "one-block");
var zd300_7 = new Zd(78, 170, "33-38", "one-block");
var zd300_8 = new Zd(78, 190, "33-37", "one-block");
var zd300_9 = new Zd(78, 210, "33-36", "one-block");
var zd300_10 = new Zd(78, 240, "33-35", "one-block");
var zd300_11 = new Zd(78, 260, "33-34", "one-block");
var zd300_12 = new Zd(78, 280, "33-33", "one-block");
var zd12_13 = new Zd(106, 362, "КП-49", "one-block");
var zd12_14 = new Zd(106, 324, "КП-49", "one-block");

var zd200_1 = new Zd(228, 30, "33-32", "one-block");
var zd200_2 = new Zd(228, 50, "33-31", "one-block");
var zd200_3 = new Zd(228, 70, "33-30", "one-block");
var zd200_4 = new Zd(228, 100, "33-29", "one-block");
var zd200_5 = new Zd(228, 120, "33-28", "one-block");
var zd200_6 = new Zd(228, 140, "33-27", "one-block");
var zd200_7 = new Zd(228, 170, "33-26", "one-block");
var zd200_8 = new Zd(228, 190, "33-25", "one-block");
var zd200_9 = new Zd(228, 210, "33-24", "one-block");
var zd200_10 = new Zd(228, 240, "33-23", "one-block");
var zd200_11 = new Zd(228, 260, "33-22", "one-block");
var zd200_12 = new Zd(228, 280, "33-21", "one-block");
var zd11_13 = new Zd(256, 362, "КП-47", "one-block");
var zd11_14 = new Zd(256, 324, "КП-47", "one-block");
// Avto 1-6         (top, left, nameZd, idBlock, className = "zd")
var zdAvto_1_8 = new Zd(186, 20, "33-8", "avto");
var zdAvto_1_9 = new Zd(186, 40, "33-9", "avto");
var zdAvto_1_10 = new Zd(186, 60, "33-10", "avto");
var zdAvto_2_5 = new Zd(330, 20, "33-5", "avto");
var zdAvto_2_6 = new Zd(330, 40, "33-6", "avto");
var zdAvto_2_7 = new Zd(330, 60, "33-7", "avto");
var zdAvto_3_1 = new Zd(478, 10, "33-1", "avto");
var zdAvto_3_2 = new Zd(478, 30, "33-2", "avto");
var zdAvto_3_3 = new Zd(478, 50, "33-3", "avto");
var zdAvto_3_4 = new Zd(478, 70, "33-4", "avto");
var zdAvto_4_18 = new Zd(186, 220, "33-18", "avto");
var zdAvto_4_19 = new Zd(186, 240, "33-19", "avto");
var zdAvto_4_20 = new Zd(186, 260, "33-20", "avto");
var zdAvto_5_15 = new Zd(330, 220, "33-15", "avto");
var zdAvto_5_16 = new Zd(330, 240, "33-16", "avto");
var zdAvto_5_17 = new Zd(330, 260, "33-17", "avto");
var zdAvto_6_11 = new Zd(478, 210, "33-11", "avto");
var zdAvto_6_12 = new Zd(478, 230, "33-12", "avto");
var zdAvto_6_13 = new Zd(478, 250, "33-13", "avto");
var zdAvto_6_14 = new Zd(478, 270, "33-14", "avto");
// in-out
var zd17_27 = new Zd(686, 263, "17-27", "in-out");
var zd17_19 = new Zd(666, 263, "17-19", "in-out");
var zd18_27 = new Zd(686, 230, "18-27", "in-out");
var zd18_20 = new Zd(666, 230, "18-20", "in-out");
var zd19_32 = new Zd(510, 263, "19-32", "in-out");
var zd19_21 = new Zd(490, 263, "19-21", "in-out");
var zd20_32 = new Zd(510, 230, "20-32", "in-out");
var zd20_22 = new Zd(490, 230, "20-22", "in-out");
var zd21_35 = new Zd(332, 263, "21-35", "in-out");
var zd21_23 = new Zd(312, 263, "21-23", "in-out");
var zd22_35 = new Zd(332, 230, "22-35", "in-out");
var zd22_23 = new Zd(312, 230, "22-23", "in-out");
var zd15_24 = new Zd(842, 180, "15-24", "in-out");
var zd15_17 = new Zd(842, 200, "15-17", "in-out");
var zd16_24 = new Zd(842, 130, "16-24", "in-out");
var zd16_18 = new Zd(842, 150, "16-18", "in-out");
// 57-59 57-15
var zd57_59 = new Zd(62, 352, "57-59", "in-out");
var zd57_15 = new Zd(62, 332, "57-15", "in-out");
// out-pirs
var zdIs_61 = new Zd(107, 639, "51", "out-pirs");
var zdIs_62 = new Zd(76, 699, "52", "out-pirs");
// Склад-1
var zd26_57 = new Zd(157, -39, "26-57", "sclad-1");
var zd26_58 = new Zd(157, -80, "26-58", "sclad-1");
var zd25_57 = new Zd(211, -39, "25-57", "sclad-1");
var zd25_58 = new Zd(211, -80, "25-58", "sclad-1");

var zd1_26 = new Zd(139, 10, "1_26", "sclad-1");
var zd2_26 = new Zd(139, 30, "2_26", "sclad-1");
var zd3_26 = new Zd(139, 50, "3_26", "sclad-1");
var zd4_26 = new Zd(139, 70, "4_26", "sclad-1");
var zd5_26 = new Zd(139, 90, "5_26", "sclad-1");
var zd6_26 = new Zd(139, 110, "6_26", "sclad-1");
var zd7_26 = new Zd(139, 130, "7_26", "sclad-1");
var zd8_26 = new Zd(139, 150, "8_26", "sclad-1");
var zd9_26 = new Zd(139, 170, "9_26", "sclad-1");
var zd10_26 = new Zd(139, 190, "10_26", "sclad-1");
var zd11_26 = new Zd(139, 210, "11_26", "sclad-1");
var zd12_26 = new Zd(139, 230, "12_26", "sclad-1");
var zd13_26 = new Zd(139, 250, "13_26", "sclad-1");
var zd14_26 = new Zd(139, 270, "14_26", "sclad-1");
var zd15_26 = new Zd(139, 290, "15_26", "sclad-1");
var zd16_26 = new Zd(139, 310, "16_26", "sclad-1");
var zd17_26 = new Zd(139, 330, "17_26", "sclad-1");
var zd18_26 = new Zd(139, 350, "18_26", "sclad-1");
var zd19_26 = new Zd(139, 370, "19_26", "sclad-1");
var zd20_26 = new Zd(139, 390, "20_26", "sclad-1");
var zd21_26 = new Zd(139, 410, "21_26", "sclad-1");
var zd22_26 = new Zd(139, 430, "22_26", "sclad-1");
var zd23_26 = new Zd(139, 450, "23_26", "sclad-1");
var zd24_26 = new Zd(139, 470, "24_26", "sclad-1");

var zd1_25 = new Zd(192, 10, "1_25", "sclad-1");
var zd2_25 = new Zd(192, 30, "2_25", "sclad-1");
var zd3_25 = new Zd(192, 50, "3_25", "sclad-1");
var zd4_25 = new Zd(192, 70, "4_25", "sclad-1");
var zd5_25 = new Zd(192, 90, "5_25", "sclad-1");
var zd6_25 = new Zd(192, 110, "6_25", "sclad-1");
var zd7_25 = new Zd(192, 130, "7_25", "sclad-1");
var zd8_25 = new Zd(192, 150, "8_25", "sclad-1");
var zd9_25 = new Zd(192, 170, "9_25", "sclad-1");
var zd10_25 = new Zd(192, 190, "10_25", "sclad-1");
var zd11_25 = new Zd(192, 210, "11_25", "sclad-1");
var zd12_25 = new Zd(192, 230, "12_25", "sclad-1");
var zd13_25 = new Zd(192, 250, "13_25", "sclad-1");
var zd14_25 = new Zd(192, 270, "14_25", "sclad-1");
var zd15_25 = new Zd(192, 290, "15_25", "sclad-1");
var zd16_25 = new Zd(192, 310, "16_25", "sclad-1");
var zd17_25 = new Zd(192, 330, "17_25", "sclad-1");
var zd18_25 = new Zd(192, 350, "18_25", "sclad-1");
var zd19_25 = new Zd(192, 370, "19_25", "sclad-1");
var zd20_25 = new Zd(192, 390, "20_25", "sclad-1");
var zd21_25 = new Zd(192, 410, "21_25", "sclad-1");
var zd22_25 = new Zd(192, 430, "22_25", "sclad-1");
var zd23_25 = new Zd(192, 450, "23_25", "sclad-1");
var zd24_25 = new Zd(192, 470, "24_25", "sclad-1");
// Склад-2
var zd56_57 = new Zd(211, -39, "56-57", "sclad-2");
var zd56_58 = new Zd(211, -80, "56-58", "sclad-2");
var zd55_57 = new Zd(157, -39, "55-57", "sclad-2");
var zd55_58 = new Zd(157, -80, "55-58", "sclad-2");

var zd1_55 = new Zd(139, 10, "1_55", "sclad-2");
var zd2_55 = new Zd(139, 30, "2_55", "sclad-2");
var zd3_55 = new Zd(139, 50, "3_55", "sclad-2");
var zd4_55 = new Zd(139, 70, "4_55", "sclad-2");
var zd5_55 = new Zd(139, 90, "5_55", "sclad-2");
var zd6_55 = new Zd(139, 110, "6_55", "sclad-2");
var zd7_55 = new Zd(139, 130, "7_55", "sclad-2");
var zd8_55 = new Zd(139, 150, "8_55", "sclad-2");
var zd9_55 = new Zd(139, 170, "9_55", "sclad-2");
var zd10_55 = new Zd(139, 190, "10_55", "sclad-2");
var zd11_55 = new Zd(139, 210, "11_55", "sclad-2");
var zd12_55 = new Zd(139, 230, "12_55", "sclad-2");
var zd13_55 = new Zd(139, 250, "13_55", "sclad-2");
var zd14_55 = new Zd(139, 270, "14_55", "sclad-2");
var zd15_55 = new Zd(139, 290, "15_55", "sclad-2");
var zd16_55 = new Zd(139, 310, "16_55", "sclad-2");
var zd17_55 = new Zd(139, 330, "17_55", "sclad-2");
var zd18_55 = new Zd(139, 350, "18_55", "sclad-2");
var zd19_55 = new Zd(139, 370, "19_55", "sclad-2");
var zd20_55 = new Zd(139, 390, "20_55", "sclad-2");
var zd21_55 = new Zd(139, 410, "21_55", "sclad-2");
var zd22_55 = new Zd(139, 430, "22_55", "sclad-2");
var zd23_55 = new Zd(139, 450, "23_55", "sclad-2");
var zd24_55 = new Zd(139, 470, "24_55", "sclad-2");

var zd1_56 = new Zd(192, 10, "1_56", "sclad-2");
var zd2_56 = new Zd(192, 30, "2_56", "sclad-2");
var zd3_56 = new Zd(192, 50, "3_56", "sclad-2");
var zd4_56 = new Zd(192, 70, "4_56", "sclad-2");
var zd5_56 = new Zd(192, 90, "5_56", "sclad-2");
var zd6_56 = new Zd(192, 110, "6_56", "sclad-2");
var zd7_56 = new Zd(192, 130, "7_56", "sclad-2");
var zd8_56 = new Zd(192, 150, "8_56", "sclad-2");
var zd9_56 = new Zd(192, 170, "9_56", "sclad-2");
var zd10_56 = new Zd(192, 190, "10_56", "sclad-2");
var zd11_56 = new Zd(192, 210, "11_56", "sclad-2");
var zd12_56 = new Zd(192, 230, "12_56", "sclad-2");
var zd13_56 = new Zd(192, 250, "13_56", "sclad-2");
var zd14_56 = new Zd(192, 270, "14_56", "sclad-2");
var zd15_56 = new Zd(192, 290, "15_56", "sclad-2");
var zd16_56 = new Zd(192, 310, "16_56", "sclad-2");
var zd17_56 = new Zd(192, 330, "17_56", "sclad-2");
var zd18_56 = new Zd(192, 350, "18_56", "sclad-2");
var zd19_56 = new Zd(192, 370, "19_56", "sclad-2");
var zd20_56 = new Zd(192, 390, "20_56", "sclad-2");
var zd21_56 = new Zd(192, 410, "21_56", "sclad-2");
var zd22_56 = new Zd(192, 430, "22_56", "sclad-2");
var zd23_56 = new Zd(192, 450, "23_56", "sclad-2");
var zd24_56 = new Zd(192, 470, "24_56", "sclad-2");
// Ёмкасти 1-24
// 51 52 53
var zd51_57 = new Zd(448, -37, "51-57", "tank");
var zd51_58 = new Zd(448, -79, "51-58", "tank");
var zd52_57 = new Zd(273, -37, "52-57", "tank");
var zd52_58 = new Zd(273, -79, "52-58", "tank");
var zd53_57 = new Zd(94, -37, "53-57", "tank");
var zd53_58 = new Zd(94, -79, "53-58", "tank");
// 1-8
var zd1_1 = new Zd(351, 25, "1-1", "tank");
var zd1_2 = new Zd(429, 25, "1-2", "tank");
var zd1_3 = new Zd(331, 25, "1-3", "tank");
var zd2_1 = new Zd(351, 95, "2-1", "tank");
var zd2_2 = new Zd(429, 95, "2-2", "tank");
var zd2_3 = new Zd(331, 95, "2-3", "tank");
var zd3_1 = new Zd(351, 165, "3-1", "tank");
var zd3_2 = new Zd(429, 165, "3-2", "tank");
var zd3_3 = new Zd(331, 165, "3-3", "tank");
var zd4_1 = new Zd(351, 235, "4-1", "tank");
var zd4_2 = new Zd(429, 235, "4-2", "tank");
var zd4_3 = new Zd(331, 235, "4-3", "tank");
var zd5_1 = new Zd(351, 315, "5-1", "tank");
var zd5_2 = new Zd(429, 315, "5-2", "tank");
var zd6_1 = new Zd(351, 385, "6-1", "tank");
var zd6_2 = new Zd(429, 385, "6-2", "tank");
var zd7_1 = new Zd(351, 455, "7-1", "tank");
var zd7_2 = new Zd(429, 455, "7-2", "tank");
var zd8_1 = new Zd(351, 525, "8-1", "tank");
var zd8_2 = new Zd(429, 525, "8-2", "tank");
// 9-16
var zd9_1 = new Zd(176, 25, "9-1", "tank");
var zd9_2 = new Zd(254, 25, "9-2", "tank");
var zd9_3 = new Zd(156, 25, "9-3", "tank");
var zd10_1 = new Zd(176, 95, "10-1", "tank");
var zd10_2 = new Zd(254, 95, "10-2", "tank");
var zd11_1 = new Zd(176, 165, "11-1", "tank");
var zd11_2 = new Zd(254, 165, "11-2", "tank");
var zd12_1 = new Zd(176, 235, "12-1", "tank");
var zd12_2 = new Zd(254, 235, "12-2", "tank");
var zd12_3 = new Zd(156, 235, "12-3", "tank");
var zd13_1 = new Zd(176, 315, "13-1", "tank");
var zd13_2 = new Zd(254, 315, "13-2", "tank");
var zd14_1 = new Zd(176, 385, "14-1", "tank");
var zd14_2 = new Zd(254, 385, "14-2", "tank");
var zd15_1 = new Zd(176, 455, "15-1", "tank");
var zd15_2 = new Zd(254, 455, "15-2", "tank");
var zd16_1 = new Zd(176, 525, "16-1", "tank");
var zd16_2 = new Zd(254, 525, "16-2", "tank");
// 17-24
var zd17_1 = new Zd(-3, 25, "17-1", "tank");
var zd17_2 = new Zd(75, 25, "17-2", "tank");
var zd17_3 = new Zd(-23, 25, "17-3", "tank");
var zd18_1 = new Zd(-3, 95, "18-1", "tank");
var zd18_2 = new Zd(75, 95, "18-2", "tank");
var zd19_1 = new Zd(-3, 165, "19-1", "tank");
var zd19_2 = new Zd(75, 165, "19-2", "tank");
var zd20_1 = new Zd(-3, 235, "20-1", "tank");
var zd20_2 = new Zd(75, 235, "20-2", "tank");
var zd20_3 = new Zd(-23, 235, "20-3", "tank");
var zd21_1 = new Zd(-3, 315, "21-1", "tank");
var zd21_2 = new Zd(75, 315, "21-2", "tank");
var zd22_1 = new Zd(-3, 385, "22-1", "tank");
var zd22_2 = new Zd(75, 385, "22-2", "tank");
var zd23_1 = new Zd(-3, 455, "23-1", "tank");
var zd23_2 = new Zd(75, 455, "23-2", "tank");
var zd24_1 = new Zd(-3, 525, "24-1", "tank");
var zd24_2 = new Zd(75, 525, "24-2", "tank");

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


// Список объектов.
var objects = [con1, con2, con3, con4, con5, con6, con7, con8, con9,
    con10, con11, con12, con13, con14, con15, con16, con17, con18, con19, con20, con21,
    con22, con23, con24, con26, con25, con27, con28, con29, con30,
    con31, con32, con33, con34, con35, con36, con37, con51, con52, con53,
    con54, con55, con56, con57, con58, con59, con60, con61, con62, con63, con64,
];

// Список задвижек.
var zdObjects = [zd300_1, zd300_2, zd300_3, zd300_4, zd300_5,
    zd300_6, zd300_7, zd300_8, zd300_9, zd300_10, zd300_11, zd300_12,
    zd12_14, zd12_13, zd11_13, zd11_14,
    zd200_1, zd200_2, zd200_3, zd200_4, zd200_5,
    zd200_6, zd200_7, zd200_8, zd200_9, zd200_10, zd200_11, zd200_12,
    zdAvto_1_8, zdAvto_1_9, zdAvto_1_10, zdAvto_2_5, zdAvto_2_6, zdAvto_2_7,
    zdAvto_3_1, zdAvto_3_2, zdAvto_3_3, zdAvto_3_4, zdAvto_4_18, zdAvto_4_19, zdAvto_4_20,
    zdAvto_5_15, zdAvto_5_16, zdAvto_5_17, zdAvto_6_11, zdAvto_6_12, zdAvto_6_13, zdAvto_6_14,
    zd17_27, zd17_19, zd18_27, zd18_20, zd19_32, zd19_21, zd20_32, zd20_22, zd21_35, zd21_23,
    zd22_35, zd22_23, zd15_24, zd15_17, zd16_24, zd16_18, zd57_59, zd57_15,
    zdIs_61, zdIs_62,
    zd25_57, zd25_58, zd26_57, zd26_58,
    zd1_26, zd2_26, zd3_26, zd4_26, zd5_26, zd6_26, zd7_26, zd8_26, zd9_26, zd10_26, zd11_26, zd12_26,
    zd13_26, zd14_26, zd15_26, zd16_26, zd17_26, zd18_26, zd19_26, zd20_26, zd21_26, zd22_26, zd23_26, zd24_26,
    zd1_25, zd2_25, zd3_25, zd4_25, zd5_26, zd6_25, zd7_25, zd8_25, zd9_25, zd10_25, zd11_25, zd12_25,
    zd13_25, zd14_25, zd15_25, zd16_25, zd17_25, zd18_25, zd19_25, zd20_25, zd21_25, zd22_25, zd23_25, zd24_25,
    zd55_57, zd55_58, zd56_57, zd56_58,
    zd1_55, zd2_55, zd3_55, zd4_55, zd5_55, zd6_55, zd7_55, zd8_55, zd9_55, zd10_55, zd11_55, zd12_55,
    zd13_55, zd14_55, zd15_55, zd16_55, zd17_55, zd18_55, zd19_55, zd20_55, zd21_55, zd22_55, zd23_55, zd24_55,
    zd1_56, zd2_56, zd3_56, zd4_56, zd5_56, zd6_56, zd7_56, zd8_56, zd9_56, zd10_56, zd11_56, zd12_56,
    zd13_56, zd14_56, zd15_56, zd16_56, zd17_56, zd18_56, zd19_56, zd20_56, zd21_56, zd22_56, zd23_56, zd24_56,
    zd51_57, zd51_58, zd52_57, zd52_58, zd53_57, zd53_58,
    zd1_1, zd1_2, zd1_3, zd2_1, zd2_2, zd2_3, zd3_1, zd3_2, zd3_3, zd4_1, zd4_2, zd4_3, zd5_1, zd5_2, zd6_1, zd6_2,
    zd7_1, zd7_2, zd8_1, zd8_2,
    zd9_1, zd9_2, zd9_3, zd10_1, zd10_2, zd11_1, zd11_2, zd12_1, zd12_2, zd12_3, zd13_1, zd13_2, zd14_1, zd14_2,
    zd15_1, zd15_2, zd16_1, zd16_2,
    zd17_1, zd17_2, zd17_3, zd18_1, zd18_2, zd19_1, zd19_2, zd20_1, zd20_2, zd20_3, zd21_1, zd21_2, zd22_1, zd22_2,
    zd23_1, zd23_2, zd24_1, zd24_2,
];

// Список перекедных клапанов
var pkObjects = [pk_2, pk_7, pk_9, pk_1, pk_6, pk_8, pk_50, pk_48];

// Общая функция StopCon.
function offLine() {
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
function deleteButton() {
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
function deleteButtonPk() {
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

// Закрытие меню и кнопок при клик body.
var clickBody = document.body;
// Если кликнул по body.
clickBody.addEventListener('click', function () {
    offLine();
    deleteButton();
    deleteButtonPk();
});


// Цикол движения конвеера.
setInterval(function () {
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].flage) objects[i].set();
    };
}, 100);