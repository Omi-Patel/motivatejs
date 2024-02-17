## What Actually It Is ?

It is a simple package which can be used while coding,
Using this package, it will help to staying motivated while coding.
It just print the Motivational Quote while you got the error, so that you can not Demotivate yourself !

# MotivateJS

MotivateJS is a simple npm package designed to help beginners stay motivated while coding. It provides a function that prints motivational quotes when an error occurs during coding.

## Installation !

You can install MotivateJS using npm:

```bash

npm install motivatejs

```

Example :

```javascript
import handleError from "motivatejs";

try {
  // Simulate an error
  throw new Error("Simulated error occurred");
} catch (error) {
  handleError(error);
}
```

Use `"type": "module"` in Your package.json file.

## Parameters

You can use `handleError(error)` function, so that you can get Motivational Quote while you got an error!

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

## Contributor

Om Patel -> IT Student @ SVIT, Vasad.
