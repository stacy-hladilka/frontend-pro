class Human {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showHumanInfo() {
    console.log(`Human name is: ${this.name}, Human age is: ${this.age}`);
  }
}
const firstHuman = new Human("Victor", 19);
const secondHuman = new Human("Liza", 16);

class Auto {
  brand;
  model;
  releaseYear;
  numberplate;
  owner;
  constructor(brand, model, releaseYear, numberplate) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
    this.numberplate = numberplate;
  }
  assignOwner(ownerParam) {
    if (ownerParam.age > 18) {
      this.owner = ownerParam;
    } else {
      console.log("Age is inappropriate to drive a vehicle");
    }
  }
  showAutoInfo() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year of release: ${this.releaseYear}, Numberplate: ${this.numberplate}.`
    );
    this.owner?.showHumanInfo(firstAuto);
  }
}
const firstAuto = new Auto("Ford", "Kuga", 2018, "AX2378CT");
firstAuto.assignOwner(firstHuman);
const secondAuto = new Auto("Porsche", "Macan", 2010, "AA1111KK");
secondAuto.assignOwner(secondHuman);
firstAuto.showAutoInfo();
secondAuto.showAutoInfo();
