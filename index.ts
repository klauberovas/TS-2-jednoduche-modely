console.log('Hello world');

// Čas
// Vytvořte typ Time pro reprezentaci času v hodinách, minutách a vteřinách. Použijte pro to objekt s třemi číselnými vlastnostmi hours, minutes a seconds. Vytvořte objekt reprezentující čas 12:34:56 a vypište ho pomocí console.log.

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

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
// Vytvořte výčtový typ ColorName pro základní barvy jako yellow, pink, orange apod. Vytvořte funkci colorFromName, která bude mít parametr typu ColorName a vrátí objekt typu Color s odpovídajícími hodnotami. Vyzkoušejte funkci na několika různých barvách a výsledky vypište pomocí console.log.

//-------------------------------------------------------------

// Adresa
// Vytvořte typ Address pro reprezentaci adresy tak, aby na tuto addresu bylo možné doručit balík například pomocí České pošty nebo Zásilkovny. Rozmyslete si, jaké vlastnosti má adresa mít, jakého mají být typu a které z nich jsou nepovinné. Vytvořte objekt reprezentující adresu a vypište ji pomocí console.log.
