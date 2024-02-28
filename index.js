console.log('Hello world');
var time = {
    hours: 12,
    minutes: 34,
    seconds: 56,
};
var hours = time.hours, minutes = time.minutes, seconds = time.seconds;
console.log("".concat(hours, ":").concat(minutes, ":").concat(seconds));
// Napište funkci formatTime, která bude mít parametr typu Time a vrátí řetězec s formátovaným časem ve tvaru HH:MM:SS například "12:34:56". Vyzkoušejte funkci na několika různých časech a výsledky vypište pomocí console.log.
var formatTime = function (value) {
    var hours = value.hours, minutes = value.minutes, seconds = value.seconds;
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
};
console.log(formatTime(time));
var red = {
    red: 1,
    green: 0,
    blue: 0,
};
var blue = {
    red: 0,
    green: 0,
    blue: 1,
};
console.log('Červená:', red);
console.log('Modrá:', blue);
var colorFromName = function (value) {
    if (value === 'yellow') {
        var yellow = {
            red: 255,
            green: 255,
            blue: 0,
        };
        return yellow;
    }
    else if (value === 'orange') {
        var orange = {
            red: 255,
            green: 165,
            blue: 0,
        };
        return orange;
    }
    else if (value === 'pink') {
        var pink = {
            red: 255,
            green: 192,
            blue: 203,
        };
        return pink;
    }
    else {
        console.error('neznámá barva:', value);
        return undefined;
    }
};
console.log('Žlutá:', colorFromName('yellow'));
console.log('Růžová:', colorFromName('pink'));
console.log('Oranžová:', colorFromName('orange'));
//-------------------------------------------------------------
// Adresa
// Vytvořte typ Address pro reprezentaci adresy tak, aby na tuto addresu bylo možné doručit balík například pomocí České pošty nebo Zásilkovny. Rozmyslete si, jaké vlastnosti má adresa mít, jakého mají být typu a které z nich jsou nepovinné. Vytvořte objekt reprezentující adresu a vypište ji pomocí console.log.
