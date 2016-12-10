function Car(options) {
    this.door = options.door || 4
    this.state = options.state || 'brand new'
    this.color = options.color || 'silver'
}

function Truck(options) {
    this.state = options.state || 'used'
    this.wheelSize = options.wheelSize || 'large' 
    this.color = options.color || 'blue'
}

/** vehicle factory */

function VehicleFactory() {}

// default car class
VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function(options) {
    switch(options.vehicleType) {
        case 'truck':
            this.vehicleClass = Truck
            break;
        case 'car':
            this.vehicleClass = Car
            break;
    }

    return new this.vehicleClass(options)
}

let carFactory = new VehicleFactory()

let car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 5
})

console.log(car instanceof Car)
console.log(car)

/*  --- Approach # 1 - modify VehicleFactory instance to use the Truck Class ---  */

let truck = carFactory.createVehicle({
    vehicleType: 'truck',
    state: 'new',
    color: 'red',
    wheelSize: 'XL'
})

console.log(truck instanceof Truck)
console.log(truck)

/*  --- Approach # 2 - subclass Vehicle factory to create factory class for Trucks ---  */

function TruckFactory() {}

TruckFactory.prototype = new VehicleFactory()
TruckFactory.prototype.vehicleClass = Truck

let truckFactory = new TruckFactory()

let bigTruck = truckFactory.createVehicle({
    state: 'excellent',
    color: 'silver',
    wheelSize: 'XXXL'
})

console.log(bigTruck instanceof Truck)
console.log(bigTruck)
