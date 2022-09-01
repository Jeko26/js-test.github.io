let command = window.prompt ("Ваша любимая игра:\n1.Танки\n2.Дота\n3.Рыбинский аллигатор\n(выберите цифру)", "");

if (command == null) {
    document.write ("Неправильный ответ");
}
else
    switch (parseInt (command)) {
        case 1: alert ("Тебя зовут Эдвард"); break;
        case 2: alert ("Тебя зовут Никита"); break;
        case 3: alert ("Тебя зовут Женя"); break;
        default: alert ("Неправильный ответ")
    }
// только нечетные числа
// for (i=1; i<21; i++) {
//     if (i % 2 == 0) continue;
//     else document.write(i + "");
// }

var j = 1;
while (j < 69) {
    for (k=0; k<j; k++) document.write ("dick");
    document.write("<br>");
    j++;
}



