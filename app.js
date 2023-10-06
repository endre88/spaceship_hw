const spaceShip = {
  fuel: 400,
  Passengers: ["John", "Steve", "Sam", "Danielle"],
  Shields: true,
  Speedometer: 0,
  listPassengers: function () {
    let passenger = this.Passengers;
    for (let i = 0; i < passenger.length; i++) {
      console.log(`Passengers ${i}: ${passenger[i]}`);
    }
  },
  addPassengers: function (newPassenger) {
    this.Passengers.push(newPassenger);
    console.log(newPassenger + " was added to the ship");
  },
  travel: function (distance) {
    console.log("Trying to travel " + distance);
    if (this.fuel == 0) {
      return console.log("Can't go further, tank is empty");
    } else {
      this.fuel = this.fuel - distance / 2;
      if (this.fuel <= 0) {
        distance = distance - this.fuel * -2;
        this.fuel = 0;
        console.log("Can only travel " + distance);
        this.Speedometer += distance;
      } else {
        this.Speedometer += distance;
      }
      if (this.fuel < 30) {
        this.Shields = false;
        console.log("Fuel is Low, turning off shields...");
        console.log("the SpaceShip is at: " + this.Speedometer);
        console.log("the SpaceShip has: " + this.fuel + " fuel");
      }
    }
  },
};

spaceShip.listPassengers();
spaceShip.addPassengers("Lindsay");
spaceShip.listPassengers();
spaceShip.travel(750);
spaceShip.travel(200);
spaceShip.travel(100);
