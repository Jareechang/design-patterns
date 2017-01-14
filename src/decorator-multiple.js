import { prettyPrintJSON } from './util'

function MacBook() {
    this.cost = function() { return 997 }
    this.screenSize = function() { return 11.6 }
}

/* first decorator */
function memory(macbook) {
    var v = macbook.cost()
    macbook.cost = function() { return v + 75 }
}

/* second decorator */
function engraving(macbook) {
    var v = macbook.cost()
    macbook.cost = function() { return v + 200 }
}


/* third decorator */
function insurance(macbook) {
    var v = macbook.cost()
    macbook.cost = function() { return v + 250 }
}

var mb = new MacBook()
console.log('total base cost %s', mb.cost())

/* Additional features (decorators) */
memory(mb)
engraving(mb)
insurance(mb)

console.log('total cost with memory, engraving and insurance: %s', mb.cost())

for (let k in mb) {
    if (mb.hasOwnProperty(k)) {
        console.log(mb[k].toString())
    }
}


