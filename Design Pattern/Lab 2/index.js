//////////////////////////////////////TASK 1/////////////////////////////////////////////////////////////////

// class Vehicle {
//     constructor(milage, price) {
//         this.milage = milage;
//         this.price = price;
//     }
// }

// class Car extends Vehicle {
//     constructor(milage, price, cost, warranty, capacity, fuelType) {
//         super(milage, price);
//         this.cost = cost;
//         this.warranty = warranty;
//         this.capacity = capacity;
//         this.fuelType = fuelType;
//     }
// }

// class Audi extends Car {
//     constructor(milage, price, cost, warranty, capacity, fuelType, model) {
//         super(milage, price, cost, warranty, capacity, fuelType);
//         this.model = model;
//     }
//     displayAudi() {
//         console.log(`This is a Audi car and it's details:
//         Milage: ${a1.milage}
//         Price: ${a1.price}
//         Cost: ${a1.cost}
//         Warranty: ${a1.warranty}
//         Capacity: ${a1.capacity}
//         Fuel Type: ${a1.fuelType}
//         Model: ${a1.model}
//         `);
//     }
// }

// class Ford extends Car {
//     constructor(milage, price, cost, warranty, capacity, fuelType, model) {
//         super(milage, price, cost, warranty, capacity, fuelType);
//         this.model = model;
//     }
//     displayFord() {
//         console.log(`This is a Ford car and it's details:
//         Milage: ${f1.milage}
//         Price: ${f1.price}
//         Cost: ${f1.cost}
//         Warranty: ${f1.warranty}
//         Capacity: ${f1.capacity}
//         Fuel Type: ${f1.fuelType}
//         Model: ${f1.model}
//         `);
//     }
// }

// class Bike extends Vehicle {
//     constructor(milage, price, cylindersNum, gearsNum, coolingType, wheelType, fuelTankSize) {
//         super(milage, price);
//         this.cylindersNum = cylindersNum;
//         this.gearsNum = gearsNum;
//         this.coolingType = coolingType;
//         this.wheelType = wheelType;
//         this.fuelTankSize = fuelTankSize;
//     }
// }

// class Bajaj extends Bike {
//     constructor(milage, price, cylindersNum, gearsNum, coolingType, wheelType, fuelTankSize, makeType) {
//         super(milage, price, cylindersNum, gearsNum, coolingType, wheelType, fuelTankSize);
//         this.makeType = makeType;
//     }
//     displayBajaj() {
//         console.log(`This is a Bajaj bike and it's details:
//             Milage: ${bajaj1.milage}
//             Price: ${bajaj1.price}
//             cylindersNum: ${bajaj1.cylindersNum}
//             gearsNum: ${bajaj1.gearsNum}
//             coolingType: ${bajaj1.coolingType}
//             wheelType: ${bajaj1.wheelType}
//             fuelTankSize: ${bajaj1.fuelTankSize}
//             makeType: ${bajaj1.makeType}
//             `);
//     }
// }
// class TVS extends Bike {
//     constructor(milage, price, cylindersNum, gearsNum, coolingType, wheelType, fuelTankSize, makeType) {
//         super(milage, price, cylindersNum, gearsNum, coolingType, wheelType, fuelTankSize);
//         this.makeType = makeType;
//     }
//     displayTVS() {
//         console.log(`This is a TVS bike and it's details:
//             Milage: ${tvs1.milage}
//             Price: ${tvs1.price}
//             cylindersNum: ${tvs1.cylindersNum}
//             gearsNum: ${tvs1.gearsNum}
//             coolingType: ${tvs1.coolingType}
//             wheelType: ${tvs1.wheelType}
//             fuelTankSize: ${tvs1.fuelTankSize}
//             makeType: ${tvs1.makeType}
//             `);
//     }
// }
// let a1 = new Audi("25.4 kmpl", "$240", "$320000", "Manufacturer", "6 seats", "1.8 liter", "2023 ESCAPE");
// let f1 = new Ford("22.4 kmpl", "$540", "$380000", "Single", "12 seats", "1.4 liter", "2023 FORD");
// let bajaj1 = new Bajaj("25.4 kmpl", "$240", "2", "34", "liquid", "spokes", "1.4 liter", "AVENGER");
// let tvs1 = new TVS("22.4 kmpl", "$540", "5", "32", "Air", "alloys ", "1.9 liter", "Direct-View");

// a1.displayAudi();
// f1.displayFord();
// bajaj1.displayBajaj();
// tvs1.displayTVS();

////////////////////////////////////////////////////////TASK 2/////////////////////////////////////////////////////////////////////
// class Computer {
//     constructor(screen, storage, ram) {
//         this.screen = screen;
//         this.storage = storage;
//         this.ram = ram;
//     }
//     displayScreen() {
//         // console.log(`the size of the screen to this computer is  ${this.screen}`);
//     }
//     displayStorage() {
//         // console.log(`the storage of the computer is ${this.storage}`);
//     }
//     displayRam() {
//         // console.log(`the ram of this computer is ${this.ram}`);
//     }
//     displayComputer() {
//         console.log(`
//         The details of this computer:
//         Screen: ${this.screen}
//         Storage: ${this.storage}
//         Ram: ${this.ram}
//         `);
//     }
// }
// class Labtop extends Computer {
//     constructor(screen, storage, ram, touchpad) {
//         super(screen, storage, ram);
//         this.touchpad = touchpad;
//     }
//     displayTouchpad() {
//         // console.log(`this method makes you ${this.touchpad}`);
//     }
//     displayLabtop() {
//         console.log(`
//         The details of this Labtop:
//         Screen: ${this.screen}
//         Storage: ${this.storage}
//         Ram: ${this.ram}
//         Touchpad: ${this.touchpad}
//         `);
//     }
// }

// class SmartPhone extends Computer {
//     constructor(screen, storage, ram, fingerprint) {
//         super(screen, storage, ram);
//         this.fingerprint = fingerprint;
//     }
//     displaySmartPhone() {
//         // console.log(`this method makes you ${this.fingerprint}`);
//     }
//     displaySmartPhone() {
//         console.log(`
//         The details of this computer:
//         Screen: ${this.screen}
//         Storage: ${this.storage}
//         Ram: ${this.ram}
//         Fingerprint: ${this.fingerprint}
//         `);
//     }
// }
// let c1 = new Computer("20 inch", "128 GB", "8 GB");
// c1.displayComputer();

// let l1 = new Labtop("15.4 inch", "560 GB", "16 GB", "go through the taps");
// l1.displayLabtop();

// let s1 = new SmartPhone("4.3 inch", "64 GB", "32 GB", "move around the screen with your fingers");
// s1.displaySmartPhone();

//////////////////////////////////////////////////////////TASK 3//////////////////////////////////////////////////////////
class Employee {
    constructor(name, jobTitle) {
        this.name = name;
        this.jobTitle = jobTitle;
    }

    calculateWeeklyPay() {
        throw new Error("You have to implement the method first!");
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTitle() {
        return this.jobTitle;
    }

    setTitle(title) {
        this.jobTitle = title;
    }
}

class HourlyEmployee extends Employee {
    constructor(name, jobTitle, payRate, hoursWorked) {
        super(name, jobTitle);
        this.payRate = payRate;
        this.hoursWorked = hoursWorked;
    }
    calculateWeeklyPay() {
        console.log(`${this.name}'s weekly pay is ${this.payRate * this.hoursWorked}`);
    }
}

class SalaryEmployee extends Employee {
    constructor(name, jobTitle, weeklySalary) {
        super(name, jobTitle);
        this.weeklySalary = weeklySalary;
    }

    calculateWeeklyPay() {
        console.log(`${this.name}'s weekly pay is ${this.weeklySalary}`);
    }

    getTitle() {
        return this.weeklySalary;
    }

    getTitle(salary) {
        this.weeklySalary = salary;
    }
}

let hager = new HourlyEmployee("Hager", "FED", 500, 8);
let sarah = new SalaryEmployee("Sarah", "BEd", 1000, 12);
 
 hager.calculateWeeklyPay();
 sarah.calculateWeeklyPay();

