/* Creeaza o clasa care va fi folosită pentru a crea mai multe ferme. 
Fiecare ferma va avea un id auto atribuit(un număr care se va incrementa 
de fiecare data cand instantiem o ferma), o locatie si un array de animale. 
Fiecare animal are proprietățile nume și cantitate.
Clasa va contine următoarele metode
listAnimals => metoda va afișa un string ce contine toate animalele din ferma(tip: use the join method)
listRareAnimals: metoda va afisa un string ce contine toate animalele, ale caror cantitate este mai mica decat 5
Creati 2 ferme, care sa contina cel putin 4 animale.
 */

class Ferma {

    static initialId = 1;
    locatie;
    animale;
    id;

    constructor(locatie, animale) {

        this.id = Ferma.initialId;
        this.locatie = locatie;
        this.animale = animale;

        Ferma.initialId++;
    }

    getlocatie() {
        console.log(`Locatia fermei este in: ${this.locatie}`);
    }

    listAnimals() {
        if (this.animale.length) {
            console.log(`Ferma are urmatoarele animale: ${this.animale.map(animal => animal.nume).join(",")}`);
        } else {
            console.log("Ferma nu are animale")
        }
    }

    listRareAnimals() {
        const animaleFiltrate = this.animale.filter(animal => animal.cantitate < 5).map(animal => animal.nume);

        if (animaleFiltrate.length) {
            console.log(`Ferma contine urmatoarele animale cu cantitate mai mica decat 5: ${animaleFiltrate.join(",")}`);
        } else {
            console.log("Ferma nu are animale")
        }
    }

}

const animale1 = [
    {
        nume: "vaca",
        cantitate: "4"
    },
    {
        nume: "capra",
        cantitate: 7
    },
    {
        nume: "cal",
        cantitate: 8
    },
    {
        nume: "oaie",
        cantitate: 10
    },
    {
        nume: "ied",
        cantitate: 3
    }
]
const animale2 = [
    {
        nume: "vaca",
        cantitate: 4
    },
    {
        nume: "gaina",
        cantitate: 20
    },
    {
        nume: "rata",
        cantitate: 7
    },
    {
        nume: "capra",
        cantitate: 2
    },
    {
        nume: "gasca",
        cantitate: 9
    }
]


const primaFerma = new Ferma("Bucuresti", animale1);
console.log("Id-ul primei ferme este: ", primaFerma.id);
primaFerma.getlocatie();
primaFerma.listAnimals();


const aDouaFerma = new Ferma("Suceava", animale2);
console.log("Id-ul celei de-a doua ferme este: ", aDouaFerma.id);
aDouaFerma.getlocatie();
aDouaFerma.listRareAnimals();


// 2. Fie urmatorul array
/* Creați doua metode,min si max, care sa fie disponibile pe orice array.
 Metodele vor returna minimul, respectiv maximul din array-ul curent */

const valori = [1, 2, 3, 4, 5];

Array.prototype.min = function () {
    return Math.min(...valori);
}
Array.prototype.max = function () {
    return Math.max(...valori);
}

console.log("Minimul din array este: ", valori.min());
console.log("Maximul din array este: ", valori.max());

/* Probleme avansate 
1. Folosind builder pattern, să se creeze o clasa care descrie un Animal cu proprietățile name, age si rasa. 
Clasa nu va avea un constructor, in schimb vom configura valori interne prin setters
 care vor returna o instanță a obiectului curent. */

class Animal {
    #name;
    #age;
    #race;

    setName(name) {
        this.#name = name;
        return this;
    }
    setAge(age) {
        this.#age = age;
        return this;
    }
    setRace(race) {
        this.#race = race;
        return this;
    }
    desribeAnimal() {
        console.log(`Animalul cu numele ${this.#name} are ${this.#age} ani si are rasa ${this.#race} `)
    }

}

const myAnimal = new Animal();

myAnimal
    .setName("Matz")
    .setAge(3)
    .setRace("Albastru de Rusia");

myAnimal.desribeAnimal();

