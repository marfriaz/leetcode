/* Elevator

Design an elevator that picks up passengers and takes them to their destinations

Press button => add to travelqueue => drop off or pick up
- Gets hard when we add logic to travel

If travel is all the way up, then all the way down. And passenger must board, before adding requested floor. 
- TravelQueue = [curFloor, destinationfloor]. Once picked up, remove currFloor from queue and add destinationFloor to queue
- Travel = iterate up and down floors. If TravelQueue[0] = floor, remove and add destination floor if it has

O(N^2)
- TravelQueue.some(floor => floor === floors[i]), then TravelQueue = TravelQueue.filter(floor => floor !== floors[i])

If just following the buttons pressed, no [curFloor, destinationfloor] 
- downQueue and upQueue sorted? iterate up and down

*/

// Press button => add to travelqueue => drop off or pick up
class Elevator {
  constructor(floors) {
    this.upQueue = [];
    this.downQueue = [];
    this.currFloor = 1;
    this.floors = floors;
    this.direction = null;
  }

  pressButton(currFloor, nextFloor) {
    this.direction = currFloor > this.floor ? "Up" : "Down";
  }

  stop() {}
}
