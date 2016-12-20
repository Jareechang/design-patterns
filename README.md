## Design patterns

playing around with some design patterns 
  


### Factory pattern
        
Defines a interface for creating objects, but let subclasses decide which class to
instantiate.

useful when:  

- Generating different instances of objects (depending on environment we're in)
- Objects or components that share properties  
- Composing objects with instances of other objects  
  


### Observer / PubSub pattern

##### Differences between observer and PubSub

**Observer** 
- send one, received by one
- Async
- From sender to recipient directly

**PubSub (variation of observer)**

- A middleware between sender and receiver (they don't know who is sending or receiving messages)
- Multicast, send one, and multiple receive
- Async

using an event based pattern allows for decoupling of the program.

This promotes loose coupling when multiple objects require use of an object
method when change has occured. Rather than having object directly calling on methods
directly, they subscribe to specific *task or activity* of another object and are 
notified when it occurs.
  


### Mixin 

A mixin is a class that contains methods for use by other classes without having to be
the parent of those other classes. They are typically described as "included" rather than "inherited".

**Advantages:**  

- Allows for multiple inheritance without semantics of multiple inheritance
- Code reusability


