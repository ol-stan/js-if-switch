// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
const age = +prompt('Сколько вам лет?');
if (age < 0) {
    alert('Вас еще не существует');
} else if (age <= 12) {
    alert('Поздравляем вы ребенок!');
} else if (age <= 18) {
    alert('Вы подросток');
} else if (age <= 60) {
    alert('Вы взрослый');
} else if (age > 60) {
    alert('Вы пенсионер');
} else {
    alert('Что-то пошло не так :(\nПрограмма не предусматривала такое значение');
};

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const num = +prompt('Enter number 0-9');
switch (num) {
    case 0:
        alert(')')
        break;
    case 1:
        alert('!')
        break;
    case 2:
        alert('@')
        break;
    case 3:
        alert('#')
        break;
    case 4:
        alert('$')
        break;
    case 5:
        alert('%')
        break;
    case 6:
        alert('^')
        break;
    case 7:
        alert('&')
        break;
    case 8:
        alert('*')
        break;
    case 9:
        alert('(')
        break;
    default:
        alert('enter number 0-9');
}

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
const num3 = +prompt('Введите трехзначное число', 123);
const digit1 = num3 % 10;
const digit2 = Math.trunc(num3 / 10) % 10;
const digit3 = Math.trunc(num3 / 100);
if (digit1 == digit2 || digit2 == digit3 || digit1 == digit3) {
    alert('В числе ' + num3 + ' есть одинаковые цифры');
} else {
    alert('В числе ' + num3 + ' нет одинаковых цифр');
}

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
const year = +prompt('Введите год', 2019);
if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    alert(year + ' высокосный год');
} else {
    alert(year + ' не высокосный год');
}

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
const num5 = +prompt('Введите пятиразрядное число', 12345);
const digit4 = Math.trunc(num5 / 10000);
const digit5 = Math.trunc(num5 / 1000) % 10;
const digit6 = Math.trunc(num5 / 100) % 10;
const digit7 = Math.trunc(num5 / 10) % 10;
const digit8 = num5 % 10;
if (num5 == '' + digit8 + digit7 + digit6 + digit5 + digit4) {
    alert('Число ' + num5 + ' является палиндромом');
} else {
    alert('Число ' + num5 + ' не является палиндромом');
}

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const usd = +prompt('Введите количество USD');
const valuta = +prompt('В какую валюту хотите перевести?\nEUR - введите 1\nUAH - введите 2\nAZN - введите 3', 1);
switch (valuta) {
    case 1:
        alert('При обмене ' + usd + ' USD вы получите ' + usd * 0.9 + ' EUR')
        break;
    case 2:
        alert('При обмене ' + usd + ' USD вы получите ' + usd * 23.96 + ' UAH')
        break;
    case 3:
        alert('При обмене ' + usd + ' USD вы получите ' + usd * 1.7 + ' AZN')
        break;
    default:
        alert('enter number 1-3');
}

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
const orderSum = +prompt('Введите сумму покупки');
if (orderSum < 200) {
    alert('Сумма к оплате ' + orderSum);
} else if (orderSum < 300) {
    alert('Сумма к оплате ' + (orderSum - orderSum * 3 / 100));
} else if (orderSum < 500) {
    alert('Сумма к оплате ' + (orderSum - orderSum * 5 / 100));
} else if (orderSum >= 500) {
    alert('Сумма к оплате ' + (orderSum - orderSum * 7 / 100));
} else {
    alert('Что-то пошло не так :(\nПрограмма не предусматривала такое значение');
}

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
const pKruga = +prompt('Введите длину окружности');
const pKvadrata = +prompt('Введите периметр квадрата');
if (pKvadrata / 4 > pKruga / Math.PI) {
    alert('Окружность ' + pKruga + ' поместиться в указанный квадрат');
} else {
    alert('Ніт!\nВаша окружность не влазит');
};

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
let result = 0;
const q1 = +prompt('В каком году появился JavaScript?\n1 - 1985\n2 - 1995\n3 - 1998');
switch (q1) {
    case 1:
        alert('Ніт!')
        break;
    case 2:
        alert('Верно!\nВы получаете 2 балла')
        result += 2;
        break;
    case 3:
        alert('Ніт!')
        break;
    default:
        alert('enter number 1-3');
}
const q2 = +prompt('Автор JavaScript?\n1 - Билл Гейтс\n2 - компания Microsoft\n3 - Брендан Эйх');
switch (q2) {
    case 1:
        alert('Ніт!')
        break;
    case 2:
        alert('Ніт!')
        break;
    case 3:
        alert('Верно!\nВы получаете 2 балла')
        result += 2;
        break;
    default:
        alert('enter number 1-3');
}
const q3 = +prompt('Какое место в рейтиге Tiobe занимает JavaScript на ноябрь 2019?\n1 - 1 место\n2 - 2 место\n3 - 7 место');
switch (q3) {
    case 1:
        alert('Ніт!')
        break;
    case 2:
        alert('Ніт!')
        break;
    case 3:
        alert('Верно!\nВы получаете 2 балла')
        result += 2;
        break;
    default:
        alert('enter number 1-3');
}
alert('Вы набрали ' + result + ' баллов');


// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
let dayA = +prompt('Введите день', 2);
let monthA = +prompt('Введите месяц', 12);
let yearA = +prompt('Введите год', 2019);
if (dayA <= 0 || monthA <= 0 || dayA > 31 || monthA > 12) {
    alert('Дата введена не верно!');
} else if (dayA <= 27 || dayA == 28 && monthA == 2 && yearA % 400 == 0 || yearA % 4 == 0 && yearA % 100 != 0) {
    dayA++;
    alert('Следующая дата ' + dayA + '.' + monthA + '.' + yearA);
} else if (dayA == 28 && monthA == 2 && yearA % 400 != 0 || yearA % 4 != 0 && yearA % 100 == 0) {
    dayA = 1;
    monthA++;
    alert('Следующая дата ' + dayA + '.' + monthA + '.' + yearA);
} else if (dayA == 29 && monthA == 2) {
    dayA = 1;
    monthA++;
    alert('Следующая дата ' + dayA + '.' + monthA + '.' + yearA);
} else if (dayA == 29) {
    dayA++;
    alert('Следующая дата ' + dayA + '.' + monthA + '.' + yearA);
} else if (dayA == 30 && monthA == 4 || monthA == 6 || monthA == 9 || monthA == 11) {
    dayA = 1;
    monthA++;
    alert('Следующая дата ' + dayA + '.' + monthA + '.' + yearA);
} else if (dayA == 30) {
    dayA++;
    alert('Следующая дата ' + dayA + '.' + monthA + '.' + yearA);
} else if (dayA == 31 && monthA < 12) {
    dayA = 1;
    monthA++;
    alert('Следующая дата ' + dayA + '.' + monthA + '.' + yearA);
} else if (dayA == 31 && monthA == 12) {
    dayA = 1;
    monthA = 1;
    yearA++;
    alert('Следующая дата ' + dayA + '.' + monthA + '.' + yearA);
} else {
    alert('Что-то пошло не так :(\nПрограмма не предусматривала такое значение');
}