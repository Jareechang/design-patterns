function Vehicle(vehicleType) {
    this.vehicleType = vehicleType || 'car'
    this.model = 'default'
    this.license = '000-000-234'
}

const truck = new Vehicle('truck')

truck.setModel = function(modelName) {
    this.model = modelName
}

truck.setColor = function(color) {
    this.color = color
}

/* truck instance - decorated  */
truck.setModel('RAM')
truck.setColor('gray')
console.log(truck)

/* car instance — no decorate */
const car = new Vehicle('car')
console.log(car)
