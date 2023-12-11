## Singleton

Singleton violates the SRP (Single Responsibility Principle), in addition to fulfilling its immediate responsibilities, it also controls the number of its instances.

Global state. When we access an instance of a class, we don't know the current state of that class or who changed it or when, and that state may not be what we expect.
