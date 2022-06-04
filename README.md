Demonstration of how we could re-use tests in other projects.

If you leave the tests in the test file itself, any functions that run (so the tests are run in the core project) will also run in the project that imports that. So, you end up with duplicates in a sense: the core test runs and then yours on top.

This could be useful if you extend a component in a project and want to make sure the core tests still work with your new component.

`yarn jest --verbose` will give you a list of all the tests including the passing ones to see what happens.
