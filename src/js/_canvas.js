var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function arrowXA(x, y) {
    ctx.moveTo(x, y);
    ctx.lineTo(x - 3, y - 3);
    ctx.moveTo(x, y);
    ctx.lineTo(x - 3, y + 3);
}

function arrowXB(x, y) {
    ctx.moveTo(x, y);
    ctx.lineTo(x + 3, y - 3);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 3, y + 3);
}

function arrowYA(x, y) {
    ctx.moveTo(x, y);
    ctx.lineTo(x + 3, y - 3);
    ctx.moveTo(x, y);
    ctx.lineTo(x - 3, y - 3);
}

function arrowYB(x, y) {
    ctx.moveTo(x, y);
    ctx.lineTo(x - 3, y + 3);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 3, y + 3);
}
// Лк-8
// Пк-1 Пк-6
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(340, 401);
ctx.lineTo(445, 401);
ctx.moveTo(460, 401);
ctx.lineTo(476, 401);
ctx.lineTo(476, 416);
arrowYA(476, 416);
ctx.stroke();

// Пк-1 Пк-8
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(340, 380);
ctx.lineTo(356, 380);
arrowXA(356, 380);
ctx.stroke();
// Пк-8 59
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(373, 390);
ctx.lineTo(435, 390);
ctx.lineTo(435, 54);
ctx.lineTo(648, 54);
arrowXA(648, 54);
ctx.stroke();
// Пк-8 Лк-60
ctx.beginPath();
ctx.strokeStyle = "rgba(255,132,0,1)";
ctx.moveTo(373, 370);
ctx.lineTo(415, 370);
ctx.lineTo(415, 20);
ctx.lineTo(580, 20);
arrowXA(580, 20);
ctx.stroke();

// Лк-10
// Пк-2 Пк-9
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(340, 429);
ctx.lineTo(356, 429);
arrowXA(356, 429);
ctx.stroke();
// Пк-2 Пк-7
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(340, 450);
ctx.lineTo(445, 450);
ctx.moveTo(460, 450);
ctx.lineTo(476, 450);
ctx.lineTo(476, 466);
arrowYA(476, 466);
ctx.stroke();
// Пк-9 Лк-59
ctx.beginPath();
ctx.strokeStyle = "rgba(0,0,255,1)";
ctx.moveTo(373, 440);
ctx.lineTo(435, 440);
ctx.lineTo(435, 54);
ctx.lineTo(648, 54);
arrowXA(648, 54);
ctx.stroke();
// Пк-9 Лк-60
ctx.beginPath();
ctx.strokeStyle = "rgba(255,132,0,1)";
ctx.moveTo(373, 420);
ctx.lineTo(415, 420);
ctx.lineTo(415, 20);
ctx.lineTo(580, 20);
arrowXA(580, 20);
ctx.stroke();
// Лк-58 Лк-60
ctx.beginPath();
ctx.strokeStyle = "rgba(255,132,0,1)";
ctx.moveTo(612, 85);
ctx.lineTo(612, 27);
arrowYB(612, 27);
ctx.stroke();
// Лк-23 Лк-54
ctx.beginPath();
ctx.strokeStyle = "rgba(255,0,0,1)";
ctx.moveTo(557, 177);
ctx.lineTo(557, 112);
ctx.lineTo(605, 112);
ctx.moveTo(621, 112);
ctx.lineTo(648, 112);
ctx.moveTo(663, 112);
ctx.lineTo(802, 112);
arrowXA(802, 112);
ctx.stroke();
// Лк-57 Лк-15
ctx.beginPath();
ctx.strokeStyle = "rgba(100,100,255,1)";
ctx.moveTo(635, 72);
ctx.lineTo(502, 72);
ctx.lineTo(502, 77);
arrowYA(502, 77);
ctx.stroke();
// Лк-15 Лк-24
ctx.beginPath();
ctx.strokeStyle = "rgba(0,0,255,1)";
ctx.moveTo(492, 863);
ctx.lineTo(492, 875);
ctx.lineTo(605, 875);
ctx.moveTo(620, 875);
ctx.lineTo(647, 875);
ctx.moveTo(662, 875);
ctx.lineTo(801, 875);
arrowXA(801, 875);
ctx.stroke();
// Лк-15 Лк-17
ctx.beginPath();
ctx.strokeStyle = "rgba(0, 0, 0, 1)";
ctx.moveTo(512, 863);
ctx.lineTo(512, 890);
ctx.lineTo(575, 890);
ctx.lineTo(575, 843);
arrowYB(575, 843);
ctx.stroke();
// Лк-16 Лк-24
ctx.beginPath();
ctx.strokeStyle = "rgba(0,0,255,1)";
ctx.moveTo(442, 863);
ctx.lineTo(442, 875);
ctx.lineTo(605, 875);
ctx.moveTo(620, 875);
ctx.lineTo(647, 875);
ctx.moveTo(662, 875);
ctx.lineTo(801, 875);
arrowXA(801, 875);
ctx.stroke();
// Лк-16 Лк-18
ctx.beginPath();
ctx.strokeStyle = "rgba(0,128,0,1)";
ctx.moveTo(462, 863);
ctx.lineTo(462, 870);
ctx.lineTo(542, 870);
ctx.lineTo(542, 843);
arrowYB(542, 843);
ctx.stroke();
// Лк-13 Пк-50 Лк-59
ctx.beginPath();
ctx.strokeStyle = "rgba(0,0,255,1)";
ctx.moveTo(401, 62);
ctx.lineTo(401, 54);
ctx.lineTo(648, 54);
arrowXA(648, 54);
ctx.stroke();
// Лк-13 Пк-50 Лк-16
ctx.beginPath();
ctx.strokeStyle = "rgba(0,255,0,1)";
ctx.moveTo(387, 62);
ctx.lineTo(387, 40);
ctx.lineTo(453, 40);
ctx.lineTo(453, 75);
arrowYA(453, 75);
ctx.stroke();
// Лк-14 Пк-48 Лк-60
ctx.beginPath();
ctx.strokeStyle = "rgba(255,132,0,1)";
ctx.moveTo(363, 326);
ctx.lineTo(363, 335);
ctx.lineTo(415, 335);
ctx.lineTo(415, 20);
ctx.lineTo(580, 20);
arrowXA(580, 20);
ctx.stroke();
// Лк-14 Пк-48 Лк-15
ctx.beginPath();
ctx.strokeStyle = "rgba(0,255,0,1)";
ctx.moveTo(345, 326);
ctx.lineTo(345, 350);
ctx.lineTo(445, 350);
ctx.moveTo(461, 350);
ctx.lineTo(493, 350);
arrowXA(493, 350);
ctx.stroke();