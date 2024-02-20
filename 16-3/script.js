class Student {
  name;
  surname;
  yearOfBirth;
  grades;
  attendance = new Array(25).fill(undefined);
  constructor(name, surname, yearOfBirth, grades) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.grades = grades;
  }
  getAge() {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - this.yearOfBirth;
    return age;
  }
  getAverageGrade() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum = sum + this.grades[i];
    }
    return sum / this.grades.length;
  }
  absent() {
    const indexOfUndefined = this.attendance.indexOf(undefined);
    if (indexOfUndefined === -1) {
      console.log("Error");
      return;
    }
    this.attendance[indexOfUndefined] = false;
  }
  present() {
    const indexOfUndefined = this.attendance.indexOf(undefined);
    if (indexOfUndefined === -1) {
      console.log("Error");
      return;
    }
    this.attendance[indexOfUndefined] = true;
  }
  getAverageAttendance() {
    const totalDays = this.attendance.filter(
      (elem) => elem !== undefined
    ).length;
    const attendedDays = this.attendance.filter((elem) => elem === true).length;
    return attendedDays / totalDays;
  }
  summary() {
    if (this.getAverageAttendance() > 0.9 && this.getAverageGrade() > 90) {
      return "Well Done!";
    }
    if (this.getAverageAttendance() < 0.9 && this.getAverageGrade() < 90) {
      return "Radish!";
    }
    return "Could've been done better.";
  }
}
const firstStudent = new Student(
  "Austin",
  "Soyper",
  2001,
  [95, 88, 76, 99, 100]
);
const secondStudent = new Student("Greg", "Stillette", 2003, [60, 84, 76, 63]);
console.log(
  `${firstStudent.name} : ${firstStudent.getAverageGrade()}, ${
    secondStudent.name
  } : ${secondStudent.getAverageGrade()}`
);
console.log(
  `${firstStudent.name} : ${firstStudent.getAge()}, ${
    secondStudent.name
  } : ${secondStudent.getAge()}`
);
firstStudent.present();
firstStudent.present();
firstStudent.present();
firstStudent.present();
firstStudent.present();
firstStudent.present();
secondStudent.present();
secondStudent.absent();
secondStudent.absent();
secondStudent.absent();
secondStudent.absent();
console.log(
  `${firstStudent.name} : ${firstStudent.summary()}, ${
    secondStudent.name
  } : ${secondStudent.summary()}`
);
