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


### Decorator 

Decorators are essentially a princple of higher order programming. Where they take in a function as argument
and return a new function. They are very useful for pre- and/or post- processing of methods in your code or extending (decorating)
the target class with additional functionality.

It is similar to sub-classing, except in sub-classing, functionality must be added on compile time. Whereas, for decorators
they are run-time. Very useful in making extensions dynamically for individual objects.  

**useful links:**

- [Stackoverflow - decorator pattern versus sub classing](http://stackoverflow.com/a/4843039/5699700)  
- [Reddit - ELI5 decorator in python](https://www.reddit.com/r/Python/comments/2lrhp5/could_someone_give_me_an_eli5_for_decorators/clxgkce/)  








