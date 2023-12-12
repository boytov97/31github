## Singleton

Singleton violates the SRP (Single Responsibility Principle), in addition to fulfilling its immediate responsibilities, it also controls the number of its instances.

Global state. When we access an instance of a class, we don't know the current state of that class or who changed it or when, and that state may not be what we expect.

The dependency of a regular class on a singleton is not visible in the class's public contract. Since usually a singleton instance is not passed in method parameters, but is obtained directly, through getInstance(), to identify the class’s dependence on the singleton, you need to look into the body of each method - simply viewing the public contract of the object is not enough.
