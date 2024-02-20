class Person {
  personName;
  personGender;
  constructor(name, gender) {
    this.personName = name;
    this.personGender = gender;
  }
}
const firstPerson = new Person("Stacey", "female");
const secondPerson = new Person("Stefan", "male");
const thirdPerson = new Person("Max", "male");

class Apartment {
  residentsArray = [];
  addResident(personParam) {
    this.residentsArray.push(personParam);
  }
}
const firstApartm = new Apartment();
firstApartm.addResident(firstPerson);
const secondApartm = new Apartment();
secondApartm.addResident(secondPerson);

class Building {
  apartmentsArray = [];
  apartmentsMaxNumber;
  constructor(apartmentsMaxNumber) {
    this.apartmentsMaxNumber = apartmentsMaxNumber;
  }
  addApartment(apartParam) {
    if (this.apartmentsArray.length < this.apartmentsMaxNumber) {
      this.apartmentsArray.push(apartParam);
    } else {
      console.log("Impossible to add another apartment");
    }
  }
}
const building = new Building(3);
building.addApartment(firstApartm);
building.addApartment(secondApartm);
