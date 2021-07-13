/*
Questions:
- How many elevators are there?
- What is the capacity of each elevator?
- How many floors are there
- Does elevator visit floors based on a queue or whichever floor is closest?
    - Prioritize wait time of passenger or system?
- Do we want to consider state? moving or standstill?
- Do we want to consider floors with their own button panel with up or down?
- Do we want to consider doors?
- Do we want to add dispatchers? Handle updating the queue.

Single Elevator
- Elevator: 
- ButtonPanel: Button_Floors, 
- Passenger
- Floors
- Doors
- Button Panels

- Group: # of People 

SCAN/ Elevator aglo: 
- Two boolean arrays
- Scan's whole building
- Goes all the way up, then all the way down- Every floor it checks entry there
Schedulor:

*/

class Elevator {
  constructor(capacity, floors) {
    this.capacity = capacity;
    this.floors = floors;
    // this.travelQueue = [];
    // this.currentFloor = 0;
    this.currentDirection = null;
    this.buttons = [];
    this.waitingPassengers = new Map();
    this.currentPassengers = new Map();
    // can look up against currentFloor and drop them

    this.ButtonPanel = new ButtonPanel(floors);

    /* this.requests can be 3 queues: 
        For the current direction with entries past the current point ??????
        For the opposite direction, and
        for the current direction prior to the current point.

        Your implementation would first decide the direction, then pick a queue into which to place the requested pair of {from, to} values.
    */
    /*
    this.state = move up, down or standstill.- passengers can board or leave at standstill
    this.currentDirection = null;

    this.name = name
    */
  }

  passengerRequestPickUp(passenger) {
    this.ButtonPanel.buttons[passenger.currFloor].placeRequest(this);
    this.waitingPassengers.set(passenger.currFloor, passenger);
  }

  addPassenger(passenger) {
    for (let [currFloor, desiredFloor] of passenger) {
      this.currentPassengers.set(desiredFloor, passenger);
      this.ButtonPanel.buttons[currFloor].placeRequest(this);
    }
  }

  removePassenger(floor) {
    this.currentPassengers.delete(floor);
  }

  move(elevator) {
    // if currentDirection = null, say up

    while (
      this.waitingPassengers.size() > 0 &&
      this.currentPassengers.size() > 0
    ) {
      if (this.direction === "Up") {
        for (let i = 0; i <= this.floors; i++) {
          if (this.waitingPassengers.has(i)) {
            this.addPassenger(this.waitingPassengers[i]);
          }
          if (this.currentPassengers.has(i)) {
            this.removePassenger(this.currentPassengers[i]);
          }
        }
        this.direction = "Down";
      }
      if (this.direction === "Down") {
        for (let i = this.floors; i >= 0; i--) {
          if (this.waitingPassengers.has(i)) {
            this.addPassenger(this.waitingPassengers[i]);
          }
          if (this.currentPassengers.has(i)) {
            this.removePassenger(this.currentPassengers[i]);
          }
        }
      }
      this.direction = "Up";
    }

    if (elevator.travelQueue.length) {
      elevator.currentDirection =
        elevator.travelQueue[0] < elevator.currentFloor ? "down" : "up";

      elevator.currentFloor = elevator.travelQueue.shift();
      console.log(`Elevator : Elevator Moved To ${elevator.currentFloor}`);

      if (this.currentPassengers.has(elevator.currentFloor)) {
        this.currentPassengers.delete(elevator.currentFloor);
      }
    }
  }
}

class ButtonPanel {
  constructor(numbers) {
    this.numbers = numbers;
    this.buttons = [];
  }
  // Passes to buttons
  createButtons() {
    for (let num = 0; num <= this.numbers; num++) {
      this.buttons.push(new Button(num));
    }
  }
}

class Button {
  constructor(number) {
    this.number = number;
  }

  placeRequest(elevator) {
    elevator.travelQueue.push(this.number);
    // ????
    elevator.move(elevator);
  }
}

class Passenger {
  constructor(currFloor, desiredFloor) {
    this.currFloor = currFloor;
    this.desiredFloor = desiredFloor;
    // this.floorButton = [];
    /*this.name*/
  }

  //Assume they automatically press button when entering
  //   placeFloorRequest(elevator) {
  //     elevator.travelQueue.push(this.number);
  //     elevator.move(elevator);
  //   }
}

// class Doors {
//   constructor(number) {
//     this.state = [open, closed];
//   }
// }

let newElevator = new Elevator(10, 12);
let fred = new Passenger(0, 5);
console.log(newElevator);
console.log(newElevator.addPassenger(fred));
