// test.js

import handleError from "./index.js";

try {
  // Simulate an error
  throw new Error("Simulated error occurred");
} catch (error) {
  handleError(error);
}
