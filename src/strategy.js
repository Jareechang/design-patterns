var Movement = function(func) {
    this.move = func
}

Movement.prototype.execute = function() {
    this.move()
}

/* 
 * Strategy Pattern 
 * */

var running = new Movement( _ => console.log('i\'m running'))
var walking = new Movement( _ => console.log('i\'m walking'))

const Character = function(name) {
    this.name = name
}

Character.prototype.changeMovementType = function(movement) {
    this.movement = movement
}

Character.prototype.move = function() {
    this.movement.execute()
}

const hero = new Character('bob')

hero.changeMovementType(walking);
hero.move()

hero.changeMovementType(running);
hero.move()


