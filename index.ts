function howMany(word: string): number {
    const letters = word.split("")
    let counter = 0;
    letters.forEach(letter => {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            counter++;
        }
    })
    return counter;
}

function arrayToConsole(numArray: number[]): void {
    for (let _i = 0; _i < numArray.length; _i++) {
        console.log(`tab[${_i}]=${numArray[_i]}`);
    }
}

function isSorted(numArray: number[]): boolean {
    for (let _i = 1; _i < numArray.length; _i++) {
        if (numArray[_i] < numArray[_i - 1]) {
            return false;
        }
    }
    return true;
}

function logMapElements(value: string, key: number) {
    console.log(`m[${key}] = ${value}`);
}

function howManyReps(word: string): void {
    const lettersMap = new Map();
    const letters = word.split("");
    letters.forEach(letter => {
        if (lettersMap.has(letter)) {
            let counter = lettersMap.get(letter)
            lettersMap.set(letter, counter + 1);
        } else {
            lettersMap.set(letter, 1);
        }
    })
    lettersMap.forEach(logMapElements)
}

class Szyfr {

    private historiaSzyfrowaniaArr: { slowo1: string, slowo2: string }[] = [];

    constructor(protected nazwa: string, protected autor: string, protected data_stworzenia: string, protected klucz: number) { }

    getNazwa(): string {
        return this.nazwa;
    }

    setNazwa(nazwa: string): void {
        this.nazwa = nazwa;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    getDataStworzenia(): string {
        return this.data_stworzenia;
    }

    setDataStworzenia(data_Stworzenia: string): void {
        this.data_stworzenia = data_Stworzenia;
    }

    getKlucz(): number {
        return this.klucz;
    }

    setKlucz(klucz: number): void {
        this.klucz = klucz;
    }

    zaszyfruj(slowo: string) {
        const noweSlowo: string[] = [];
        const litery: string[] = slowo.split("");
        litery.forEach(litera => {
            const literaASCII = litera.charCodeAt(0);
            let nowaLiteraASCII;
            if (literaASCII + this.klucz > 90 && literaASCII + this.klucz < 97) {
                nowaLiteraASCII = 65 + (literaASCII + this.klucz - 90);
            } else if (literaASCII + this.klucz > 122) {
                nowaLiteraASCII = 97 + (literaASCII + this.klucz - 122);
            } else {
                nowaLiteraASCII = literaASCII + this.klucz;
            }
            noweSlowo.push(String.fromCharCode(nowaLiteraASCII));
        })
        const noweSlowoString = noweSlowo.join('');
        this.historiaSzyfrowaniaArr.push({ slowo1: slowo, slowo2: noweSlowoString })
    }

    historiaSzyfrowania() {
        return this.historiaSzyfrowaniaArr;
    }
}

//Zadanie 1
//a)
console.log(howMany("aeiou"));
console.log(howMany("test"));
//b)
arrayToConsole([1, 2, 3, 4]);
//c)
console.log(isSorted([1, 2, 5, 4]));
//d)
howManyReps("normalnie");

//Zadanie 2
const szyfrCezara = new Szyfr("Szyfr Cezara", "Juliusz Cezar", "54 r. p.n.e", 3);
console.log(szyfrCezara.getNazwa());
console.log(szyfrCezara.getAutor());
console.log(szyfrCezara.getDataStworzenia());
console.log(szyfrCezara.getKlucz());
szyfrCezara.zaszyfruj("abc");
szyfrCezara.zaszyfruj("def");
szyfrCezara.zaszyfruj("z");
szyfrCezara.zaszyfruj("Z");
console.log(szyfrCezara.historiaSzyfrowania());