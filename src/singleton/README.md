## Singleton

Singleton violates the SRP (Single Responsibility Principle), in addition to fulfilling its immediate responsibilities, it also controls the number of its instances.

Global state. When we access an instance of a class, we don't know the current state of that class or who changed it or when, and that state may not be what we expect.

The dependency of a regular class on a singleton is not visible in the class's public contract. Since usually a singleton instance is not passed in method parameters, but is obtained directly, through getInstance(), to identify the class’s dependence on the singleton, you need to look into the body of each method - simply viewing the public contract of the object is not enough.

The presence of a singleton reduces the testability of the application as a whole and of classes that use singletons in particular. Firstly, you cannot push a Mock object instead of a singleton, and secondly, if a singleton has an interface for changing its state, then the tests begin to depend on each other. To put it simply, a singleton increases connectivity, and all of the above, in one form or another, is a consequence of increased connectivity.
