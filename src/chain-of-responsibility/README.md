## Chain of Responsibility pattern

Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

On example we made chain of filters that each handler decides either to pass it to the next handler or to throw exception if request didn't pass a condition.
