// let command = window.prompt ("Ваша любимая игра:\n1.Танки\n2.Дота\n3.Рыбинский аллигатор\n(выберите цифру)", "");

// if (command == null) {
//     document.write ("Неправильный ответ");
// }
// else
//     switch (parseInt (command)) {
//         case 1: alert ("Тебя зовут Эдвард"); break;
//         case 2: alert ("Тебя зовут Никита"); break;
//         case 3: alert ("Тебя зовут Женя"); break;
//         default: alert ("Неправильный ответ")
//     }
// только нечетные числа
// for (i=1; i<21; i++) {
//     if (i % 2 == 0) continue;
//     else document.write(i + "");
// }

// let j = 1;
// while (j < 69) {
//     for (k=0; k<j; k++) document.write ("dick");
//     document.write("<br>");
//     j++;
// }


// массив
// let M = [9, 56, 1, 4, 99, 3, 2, 33, 3];

// Min = M[0];
// Min_ind = 0;

// document.write ("Массив: <br>" + Min + "");

// for (i=1; i<M.length; i++) {
//     if (M[i] < Min) {
//         Min = M[i];
//         Min__ind = i;
//     }
//     document.write(M[i] + "")
// }
// document.write("<br>Минимум:" + Min);
// document.write("<br>Индекс:" + Min__ind);

// массив2
// let M = [0, 0, 0];

// M[0] = [3, 2, 1];
// M[1] = [7, 8, 9];
// M[2] = [5, 6, 7];

// Max = M[0] [0];
// Ind = [0, 0];

// for (i=0; i<M.length; i++) {
//     for (j=0; j<M[i].length; j++) {
//         if (M[i] [j] > Max) {
//             Max = M [i] [j];
//             Ind[0] = i;
//             Ind[1] = j;
//         }
//     }
// }

// document.write("Максимум" + Max);
// document.write("<br>Ind [" + Ind[0] + "][" + Ind[1] +"]")

// let x = function() {
//     return function() {
//         window.alert("Привет");
//     };
// };
// x() ();

// class Human {
//     constructor(year, hname) {
//         this.year = year;
//         this.hname = hname;
//     }
//     static displayName = "Человек";
// }

// const p1 = new Human(1983, "Den");
// p1.displayName;
// console.log(Human.displayName);


// function Human(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.getFullName = function() {
//         let fname = this.firstname + this.lastname;
//         return fname;
//     }
// }

// let Jena = new Human ("Jena", "Nelox");
// let Ivan = new Human ("Ivan", "Ivanov");

// if ("firstname" in Jena) window.alert(Jena.firstname);

// if ((typeof Jena == "object") && (Jena instanceof Human))
// window.alert("Jena - экземпляр Human")



// function Human(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
// }

// Human.prototype.getFullName = function() {
//     let fname = this.firstname + this.lastname;
//     return fname;
// }

// let Jena = new Human("Jena", "Nelox");
// document.write(John.getFullName());

// let Ivan = new Human("Ivan", "Ivanov");
// document.write(Ivan.getFullName());


// document.write(M.length);

// for (let i=0, c=M.length; i<c; i++) {
//     document.write(M[i] + "<br>");
// }

// let b = new Date();
// document.write(b.toString());



function getStrMonth(m) {

    let d = new Date();

    let MonthsArray = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен\n", "Окт", "Ноя", "Дек" ];

    let currentMonth = d.getMonth();

    if ((m<0) || (m>11)) return
    MonthsArray[currentMonth];
    
    return MonthsArray[m];
}

let d = new Date();
document.write(getStrMonth(d.getMonth()));

function getStrDay(d) {
    let a = new Date();

    let DaysArray = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс\n" ];

    let currentDay = a.getDay();

    if ((d<0) || (d>6)) return
    DaysArray[currentDay];

    return DaysArray[d];
}

let a = new Date();
document.write(getStrDay(a.getDay()))

// let reg = new RegExp("abc[de]");

// let p = new RegExp("abc[de]", "g");
// let Str = "abc, abcd, abce, abcf";
// let M = [];
// M = Str.match(reg);

// for (let i=0, c=M.length; i<c; i++)
// console.log(M[i] + "");

let reg = new RegExp("abc[e]", "g");
let Str = "abc, abcd, abce, abcf";
let S = Str.replace(reg, "detect!!!");
document.write(S);

