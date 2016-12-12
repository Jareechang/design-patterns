const events = {
    listeners: [],
    subscribe: function(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || []
        this.listeners[eventName].push(fn)
    },
    remove: function(eventName, fn) {
        if(this.listeners[eventName]) {
            this.listeners.forEach((emitters, index) => {
                if(emitters == fn) {
                    this.listeners.splice(index, 1)
                }
            })
        }
    },
    emit: function(eventName, data) {
        if(this.listeners[eventName]) {
            this.listeners[eventName].forEach((fn) => {
                fn(data);
            })
        }
    }
}

events.subscribe('ready', (data) => {
    console.log('ready log', data);
})

events.subscribe('hello', (data) => {
    console.log('hello', data);
})

events.emit('ready', 'data')
events.emit('hello', 'world')
