### Deterministic Uniform Assignment in Nodejs

Deterministically select an index for accessing an array. Primarily used for a/b testing.

Implementation adapted from Facebook's `planout` library.

#### Example

```js
import assign from "assign-uniform";

const myArray = ["a", "b", "c"];

// a consistent identifier to be used for future assignment
const userId = "my-user-id";

// a unique salt for this array to assure independent assignments
const saltString = "myArray";

const i = assign(`${userId}.${saltString}`, myArray.length);

const deterministicAssignment = myArray[i];
```

### Assuring independent assignments

If you are running uniform assignment across multiple arrays, for example running multiple a/b tests, and would like the arrays to be independent from each other (and probably you do); then it is important that each independent array has a unique salt that is part of the hash string.
