console.log('Hello world');

// Čas
// Vytvořte typ Time pro reprezentaci času v hodinách, minutách a vteřinách. Použijte pro to objekt s třemi číselnými vlastnostmi hours, minutes a seconds. Vytvořte objekt reprezentující čas 12:34:56 a vypište ho pomocí console.log.

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

const time: Time = {
  hours: 12,
  minutes: 34,
  seconds: 56,
};
const { hours, minutes, seconds } = time;
console.log(`${hours}:${minutes}:${seconds}`);

// Napište funkci formatTime, která bude mít parametr typu Time a vrátí řetězec s formátovaným časem ve tvaru HH:MM:SS například "12:34:56". Vyzkoušejte funkci na několika různých časech a výsledky vypište pomocí console.log.
const formatTime = (value: Time): string => {
  const { hours, minutes, seconds } = value;
  return `${hours}:${minutes}:${seconds}`;
};
console.log(formatTime(time));
//-------------------------------------------------------------

// Barvy
// Vytvořte typ Color, který bude představovat barvu pomocí tří číselných vlastností red, green a blue. Každá barevná složka bude mít hodnotu jako desetinné číslo mezi 0 a 1. Vytvořte objekt reprezentující sytě červenou a sytě modrou a vypište ji pomocí console.log.

type Color = {
  red: number;
  green: number;
  blue: number;
};

const red: Color = {
  red: 1,
  green: 0,
  blue: 0,
};

const blue: Color = {
  red: 0,
  green: 0,
  blue: 1,
};

console.log('Červená:', red);
console.log('Modrá:', blue);
// Vytvořte výčtový typ ColorName pro základní barvy jako yellow, pink, orange apod. Vytvořte funkci colorFromName, která bude mít parametr typu ColorName a vrátí objekt typu Color s odpovídajícími hodnotami. Vyzkoušejte funkci na několika různých barvách a výsledky vypište pomocí console.log.

type ColorName = 'yellow' | 'pink' | 'orange';

const colorFromName = (value: ColorName): Color | undefined => {
  if (value === 'yellow') {
    const yellow: Color = {
      red: 255,
      green: 255,
      blue: 0,
    };
    return yellow;
  } else if (value === 'orange') {
    const orange: Color = {
      red: 255,
      green: 165,
      blue: 0,
    };
    return orange;
  } else if (value === 'pink') {
    const pink: Color = {
      red: 255,
      green: 192,
      blue: 203,
    };
    return pink;
  } else {
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

type Address = {
  street: string;
  unitNumber: number;
  zipCode: number | string;
  city: string;
  phoneNumber?: number;
};

const zasilkovna: Address = {
  street: 'Kollárova',
  unitNumber: 12,
  zipCode: 30100,
  city: 'Plzeň',
  phoneNumber: +420737777333,
};

const ceskaPosta: Address = {
  street: 'Pražská',
  unitNumber: 5,
  zipCode: 31000,
  city: 'Praha',
};

console.log('Zásilkovna:', zasilkovna);
console.log('Česká pošta:', ceskaPosta);
