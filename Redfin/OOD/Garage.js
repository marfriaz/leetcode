/*
Questions:
- How many parking spots?
- Are there different floor sizes?
- Are there multiple floors?
- How many parking spots, per floor?
- Do we need a ticketing system?

Garage
- Garage: ParkingSpots (diff sizes), occupiedSpots, zipcode?
- ParkingSpot: Occupied, Number (id), size?
- Car: License, size

- Spots = stack (O(1) removal and add)
- occupiedSpots = HasMap (O(1) get and delete)

// PlaceVehicle
// Search = O(1)
// Stacks
// put in a hashMap
// Number of stacks depend on number of sizes

// removeVehicle(car)- spot id
// lookup hasmap (fast look) = has info about the vehicle

Could be in med, large, small stacks
// Fast look = hashmap
*/

class Garage {
  constructor() {
    this.smallSpots = [];
    this.largeSpots = [];
    this.parking = new Map();
  }
  createSmallSpots(numberSpots) {
    for (let i = 1; i <= numberSpots; i++) {
      this.smallSpots.push(new ParkingSpot(i, "Small"));
    }
  }
  createLargeSpots(numberSpots) {
    for (let i = 1; i <= numberSpots; i++) {
      this.largeSpots.push(new ParkingSpot(i, "Large"));
    }
  }
}

class ParkingSpot {
  constructor(id, size) {
    this.id = id;
    this.size = size;
    // this.occupied = false;
  }
}

class Car {
  constructor(license, size) {
    this.license = license;
    this.size = size;
    this.parked = false;
  }

  park(garage) {
    let spot;
    if (this.size === "Small") {
      spot = garage.smallSpots.pop();
    } else {
      spot = garage.largeSpots.pop();
    }

    garage.parking.set(this.license, spot);
  }

  exit(garage) {
    let spot = garage.parking.get(this.license);
    if (spot.size === "Small") {
      garage.smallSpots.push(spot);
    } else {
      garage.largeSpots.push(spot);
    }
    garage.parking.delete(this.license);
  }
}

let test = new Garage();
test.createSmallSpots(5);
test.createLargeSpots(4);

let car1 = new Car(123, "Small");
let car2 = new Car(5555, "Large");
car1.park(test);
car2.park(test);
car1.exit(test);
console.log(test);
