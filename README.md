# Shiprocket Pincode React

Shiprocket Pincode React is a published NPM module that can be integrated inside any ReactJS application. It is used to fetch delivery time through shiprocket when user enters valid Pin-Code. On entering a valid Pin-Code, a GET request is made to the Shiprocket API and the useful information is extracted and result is displayed to the user.

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

Whenever the wrong Pincode/non serviceable PinCode is entered red border appears on the pin code input field and on entering a right pin code the delivery time is shown below the input field

### Note

This will only work for Indian Pincodes.

## Working

```js
import Pincode from "shiprocket-pincode-react";
```

### JS

```js
import React from "react";
import Pincode from "shiprocket-pincode-react";

function App() {
  return (
    <div className="App">
      <Pincode
        pickupPincode="your pickup pincode"
        email="the registered email with shiprocket api service"
        password="password of the registered api user"
      />
    </div>
  );
}
```

## Pincode Props

1. Required Props

| Name          | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| pickupPincode | Props to fetch delivery time according to your pickup location |
| email         | Props to feed registered email with shiprocket api services    |
| password      | Props for the password of the api user                         |

### Development and Testing

1. Set-up the Shiprocket-Pincode-React module by dowloading its dependencies, using `npm install` command.
2. Build the module using `npm run build`
3. Link the module for testing using `npm link` command.
4. Change your directory to `test-server` directory, using `cd test-server`
5. Install the dependecies using `npm install`
6. Now run `npm link shiprocket-pincode-react`
7. Congratulations! You have set-up the test server for shiprocket-pincode-react.
   Now just run `npm start` from `test-server` directory to launch the test-server.
8. You don't need to stop this server, the changes made in the module will be reflected automatically each time you build them using `npm run build`

## Owner

[Vineet Kumar](https://github.com/vineetk242000) <img src="https://img.shields.io/twitter/follow/vineetk242000?label=Follow&style=social" />
