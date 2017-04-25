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
      throw new Error("Expected " + expected + " but got " + actual);
    }
  },

  isNotEqual: function(actual, expected) {
    if (actual !== expected) {
      console.log(actual + "doesn't equal" + expected);
    } else {
      throw new Error(actual + " & " + expected + " are the same value")
    }
  },

  doesInclude: function(container, item) {
    if (container.includes(item)) {
      console.log(container + " includes " + item)
    } else {
      throw new Error(container + " does not include " + item)
    }
  },

  arraysEqual: function(array1, array2) {
    for (var i = 0; i < array1.length; ++i) {
      if (array1[i] === array2[i]) {
        console.log(array1 + " is the same as " + array2)
      } else {
        throw new Error("Assertion Failed: " + array1 + " Does not Equal " + array2);
      }
    }
  }
};
