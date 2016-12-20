/**  SUBCLASSING - mixin using subclass
 *
 * */

let Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    return (_gender = "male") => {
        this.gender = _gender;
        return this;
    }
}

let disneyCharacter = function(firstName, lastName, abilities) {
    const gender = "Male";
    Person.call(this, firstName, lastName)(gender);
    this.abilities = abilities;
}

disneyCharacter.prototype = Object.create(Person.prototype);

const mickyMouse = new disneyCharacter("Micky", "Mouse", ["Smiling", "Magic", "Waving"]);

//console.log(mickyMouse);

/**  MIXIN - mixin using _.extend 
 *
 * */

import _ from 'lodash';

var actions = {
    wave: function() {
        console.log('wave');
    },
    jump: function() {
        console.log('jump');
    },
    smile: function() {
        console.log('smile');
    }
};

// skeleton for scoobydoo
function ScoobyDoo() {
    this.saySomething = function() {
        console.log('yabba doo');
    };
};

// skeleton for Goofy 
function Goofy() {
    this.saySomething = function() {
        console.log('Hi, i\'m Goofy');
    };
};

_.extend(ScoobyDoo.prototype, actions);
_.extend(Goofy.prototype, actions);

let scooby = new ScoobyDoo();


scooby.wave();
scooby.jump();
scooby.saySomething();
