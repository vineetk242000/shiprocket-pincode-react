# Shiprocket React Pincode

Shiprocket React Pincode is a published NPM module that can be integrated inside any ReactJS application. It is used to fetch delivery time through shiprocket when user enters valid Pin-Code. On entering a valid Pin-Code, a GET request is made to the Shiprocket API and the useful information is extracted and result is displayed to the user.

<div align="center">
    <img src="https://forthebadge.com/images/badges/powered-by-responsibility.svg" >
    <img src="https://forthebadge.com/images/badges/built-with-love.svg" >
    <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" >
</div>

## Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
  - [Note](#note)
- [Working](#working)
  - [JS](#js)
- [Pincode props](#pincode-props)
- [Example](#example)
  - [JS](#js-1)
  - [Development and Testing](#development-and-testing)
- [Owner](#owner)

## About

The four input fields are wrapped inside an `<div>` element and each input field is also wrapped inside `<div>`. So that a user can style it according to the need in the project.

Whenever the wrong Pincode/non serviceable PinCode is entered red border appears on the pin code input field and on entering a right pin code the delivery time is shown below the input field

### Note

This will only work for Indian Pincodes.

## Working

```js
import Pincode from "shiprocket-react-pincode";
```

### JS

```js
import React, { useState, useEffect } from "react";
import Pincode from "shiprocket-react-pincode";

function App() {
  return (
    <div className="App">
      <Pincode
        pickupPincode="Your pickup pincode"
        email="the registered email with shiprocket api services"
        password="password of the api user"
      />
    </div>
  );
}
```

## Pincode Props

1. Props for changing CSS properties

| Name         | Description                                                              |
| ------------ | ------------------------------------------------------------------------ |
| pickupPinode | Props to fetch delivery time according to your pickup location(required) |
| email        | Props to feed registered email with shiprocket api services (required)   |
| password     | Props for the password of the api user                                   |

```

### Development and Testing

1. Set-up the Shiprocket-React-Pincode module by dowloading its dependencies, using `npm install` command.
2. Build the module using `npm run build`
3. Link the module for testing using `npm link` command.
4. Change your directory to `test-server` directory, using `cd test-server`
5. Install the dependecies using `npm install`
6. Now run `npm link shiprocket-react-pincode`
7. Congratulations! You have set-up the test server for shiprocket-react-pincode.
   Now just run `npm start` from `test-server` directory to launch the test-server.
8. You don't need to stop this server, the changes made in the module will be reflected automatically each time you build them using `npm run build`


## Owner

[Vineet Kumar](https://github.com/vineetk242000) <img src="https://img.shields.io/twitter/follow/vineetk242000?label=Follow&style=social" />
```
