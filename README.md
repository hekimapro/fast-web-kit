# Fast-Kit

`Fast-Kit` is a lightweight and flexible collection of utility functions that simplifies common development tasks, allowing developers to write applications more quickly and efficiently. This package is suitable for both beginners and experienced developers alike, as it helps save time and reduce development costs.

## Installation

You can install `Fast-Kit` via NPM

```
npm install fast-kit
```

## Usage

To use `Fast-Kit`, you need to import the package and destructure the function that you want to use. For example, to use the array object:

```ts
import { array } from "fast-kit"
// or
const { array } = require("fast-kit")

// example
console.log(array.hasElements([1, 2, 3, 4, 5, 1]))

// returns true
```

## Examples

### Email

```ts
import { email } from "fast-kit"
// or
const { email } = require("fast-kit")

// example
console.log(email.getUsername("hekima.dev@gmail.com"))

// returns hekima.dev
```

### Number

```ts
import { number } from "fast-kit"
// or
const { number } = require("fast-kit")

// example
console.log(number.toWord(10522))

// returns "ten thousand five hundred and twenty two"
```

### Object

```ts
import { object } from "fast-kit"
// or
const { object } = require("fast-kit")

// example
console.log(object.isEmpty({}))

// returns true
```

### Password

```ts
import { password } from "fast-kit"
// or
const { password } = require("fast-kit")

// example
console.log(password.isStrongPassword("myPassword"))

// returns false
```

### String

```ts
import { string } from "fast-kit"
// or
const { string } = require("fast-kit")

// example
console.log(string.removeSpecialCharacters("Hello, World!"))

// returns "Hello World"
```

### Time

```ts
import { time } from "fast-kit"
// or
const { time } = require("fast-kit")

// example
console.log(time.relativeTime(new Date()))

// returns "just now"
```

## Contributing

`Fast-Kit` is an open-source project, and we welcome contributions from anyone. If you have an idea for a new helper function or would like to improve an existing one, please feel free to submit a pull request.

In addition, there are more helper functions available in the package than the ones documented here. Please refer to the source code for a complete list of functions and their documentation.

We appreciate your contributions to make `Fast-Kit` a more comprehensive and useful tool for developers.
