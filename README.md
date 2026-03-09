# Fast-web-Kit

`Fast-web-Kit` is a lightweight and flexible collection of utility functions that simplifies common development tasks, allowing developers to write applications more quickly and efficiently. This package is suitable for both beginners and experienced developers alike, as it helps save time and reduce development costs.

## Support Development

If you find my work valuable and would like to support its continued development, consider buying me a coffee! Your support goes a long way in helping me maintain and improve this project.

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-%E2%98%95-brightgreen)](https://www.buymeacoffee.com/hekimapro)


## Installation

You can install `Fast-web-Kit` via NPM

```bash
npm install fast-web-kit
```

## Usage

To use `Fast-web-Kit`, you need to import the package and destructure the function that you want to use.
For example, to use the array object:

```typescript
import { array } from "fast-web-kit"
// or
const { array } = require("fast-web-kit")

// example
console.log(array.hasElements([1, 2, 3, 4, 5, 1]))

// returns true
```

## Other Objects and Few Examples

### Email

```typescript
import { email } from "fast-web-kit"
// or
const { email } = require("fast-web-kit")

// example
console.log(email.getUsername("hekima.dev@gmail.com"))

// returns hekima.dev
```

### Number

```typescript
import { number } from "fast-web-kit"
// or
const { number } = require("fast-web-kit")

// example
console.log(number.toWord(10522))

// returns "ten thousand five hundred and twenty two"
```

### Object

```typescript
import { object } from "fast-web-kit"
// or
const { object } = require("fast-web-kit")

// example
console.log(object.isEmpty({}))

// returns true
```

### Password

```typescript
import { password } from "fast-web-kit"
// or
const { password } = require("fast-web-kit")

// example
console.log(password.isStrongPassword("myPassword"))

// returns false
```

### String

```typescript
import { string } from "fast-web-kit"
// or
const { string } = require("fast-web-kit")

// example
console.log(string.removeSpecialCharacters("Hello, World!"))

// returns "Hello World"
```

### Time

```typescript
import { time } from "fast-web-kit"
// or
const { time } = require("fast-web-kit")

// example
console.log(time.relativeTime(new Date()))

// returns "just now"
```

## Crypto Encryption and Decryption

This module provides functions to encrypt and decrypt data using `AES-CBC` encryption algorithm from the `fast-web-kit` library. It supports encryption types of base64 and hex.

## Usage

### encryption.encrypt(data, key, iv, encryptionType)

Encrypts the provided data using the specified parameters.

#### Parameters:

- `data`: The data to encrypt.
- `key`: The encryption key.
- `iv`: The initialization vector.
- `encryptionType`: The type of encryption (`base64` or `hex`).

#### Returns:

An object containing the encrypted payload.

#### Throws:

- `Error` if validation fails or encryption fails.

### encryption.decrypt(encryptedData, key, iv, encryptionType)

Decrypts the provided encrypted data using the specified parameters.

#### Parameters:

- `encryptedData`: The encrypted payload.
- `key`: The encryption key.
- `iv`: The initialization vector.
- `encryptionType`: The type of encryption (`base64` or `hex`).

#### Returns:

The decrypted data.

#### Throws:

- `Error` if validation fails or decryption fails.

## Example

```typescript
import encryption from "fast-web-kit";

const data = { username: "john_doe", password: "p@ssw0rd" };
const key = "secretKey123456";
const iv = "initialVector7890";
const encryptionType = "base64";

const encryptedData = encryption.encrypt(data, key, iv, encryptionType);
console.log("Encrypted data:", encryptedData.payload);

const decryptedData = encryption.decrypt(encryptedData, key, iv, encryptionType);
console.log("Decrypted data:", decryptedData);
```

## Contributing

`Fast-web-Kit` is an open-source project, and we welcome contributions from anyone. If you have an idea for a new helper function or would like to improve an existing one, please feel free to submit a pull request.

In addition, there are more helper functions available in the package than the ones documented here. Please refer to the source code for a complete list of functions and their documentation.

We appreciate your contributions to make `Fast-web-Kit` a more comprehensive and useful tool for developers.