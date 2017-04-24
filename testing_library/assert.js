var assert = {
  isTrue: function(assertionToCheck, message) {
    if (!assertionToCheck) {
      // var errorMessage = message || "Expected true but got false"
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      // var passedMessage = message || "Truthy PASSED"
      console.log("Truthy PASSED");
    }
  },
  isFalse: function(assertionToCheck) {
    if( assertionToCheck ) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    } else {
      console.log('Falsey PASSED');
    }
  },
  isEqual: function(actual, expected) {
    // this.isTrue(
    //   actual === expected,
    //   "Expected " + expected + "but got " + actual
    // );

    if (actual === expected) {
      console.log(actual + ' equals ' + expected);
    } else {
      throw new Error("Expected " + expected + "but got " + actual);
    }
  }
};
