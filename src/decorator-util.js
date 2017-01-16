/** 
 * Code copyright Dustin Diaz and Ross Harmes, Pro Javascript design patterns.
 *  from Addy Osmani gist (https://gist.github.com/addyosmani/1057989)
 */

var Interface = function(name, methods) {
    if (arguments.length !== 2) {
        throw new Error(`Interface constructor called with ${arguments.length} arguments, but expected exactly 2.`)
    }
    this.name = name
    this.methods = []
    const len = methods.length

    for (let i = 0; i < len; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error(`Interface constructor expects methods in as a string`)
        }
        this.methods.push(methods[i])
    }
}

Interface.ensureImplements = function(object) {

    if (arguments.length < 2) { throw new Error(`Function Interface.ensureImplements called with ${arguments.length} arguments, but expected at lesat 2 `) }

    const len = arguments.length
    const _interface = arguments[i]
    const methodsLen = _interface.methods.length
    var methods = _interface.methods[j]

    for (let i = 1; i < len; i++) {
        if (_interface.constructor !== Interface) {
            throw new Error(`Function Interface.ensureImplements expects arguments" + "two and above to be instances of Interface.`)
        }
    }

    for (let i = 0; i < methodsLen; i++) {
        if (!object[method] || typeof object[method] !== 'function') {
            throw new Error(`Function Interface.ensureImplements: object does not implement the ${_interface.name} interface. Method ${method} was not found.`);
        }
    }
}

console.log(Interface)
