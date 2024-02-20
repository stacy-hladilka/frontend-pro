class Hamburger {
  static SIZE_SMALL = "small";
  static SIZE_LARGE = "large";
  static STUFFING_CHEESE = "cheese";
  static STUFFING_SALAD = "salad";
  static STUFFING_FRIES = "fries";
  static TOPPING_MAYO = "mayo";
  static TOPPING_SEASONING = "seasoning";
  size;
  stuffing;
  toppings = [];
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }
  addTopping(topping) {
    this.toppings.unshift(topping);
  }
  calculateCalories() {
    let calories = 0;
    switch (this.size) {
      case Hamburger.SIZE_SMALL:
        calories += 20;
        break;
      case Hamburger.SIZE_LARGE:
        calories += 40;
        break;
      default:
        break;
    }
    switch (this.stuffing) {
      case Hamburger.STUFFING_CHEESE:
        calories += 20;
        break;
      case Hamburger.STUFFING_SALAD:
        calories += 5;
        break;
      case Hamburger.STUFFING_FRIES:
        calories += 10;
        break;
      default:
        break;
    }
    this.toppings.forEach((element) => {
      switch (element) {
        case Hamburger.TOPPING_MAYO:
          calories += 5;
          break;
        default:
          break;
      }
    });
    return calories;
  }
  calculatePrice() {
    let price = 0;
    switch (this.size) {
      case Hamburger.SIZE_SMALL:
        price += 50;
        break;
      case Hamburger.SIZE_LARGE:
        price += 100;
        break;
      default:
        break;
    }
    switch (this.stuffing) {
      case Hamburger.STUFFING_CHEESE:
        price += 10;
        break;
      case Hamburger.STUFFING_SALAD:
        price += 20;
        break;
      case Hamburger.STUFFING_FRIES:
        price += 15;
        break;
      default:
        break;
    }
    this.toppings.forEach((element) => {
      switch (element) {
        case Hamburger.TOPPING_MAYO:
          price += 20;
          break;
        case Hamburger.TOPPING_SEASONING:
          price += 15;
          break;
        default:
          break;
      }
    });
    return price;
  }
}

const firstHamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);
firstHamburger.addTopping(Hamburger.TOPPING_SEASONING);
console.log(`Calories: ${firstHamburger.calculateCalories()}`);
console.log(`Price: ${firstHamburger.calculatePrice()}`);
firstHamburger.addTopping(Hamburger.TOPPING_SEASONING);
console.log(`New price: ${firstHamburger.calculatePrice()}`);
