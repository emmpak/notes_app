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

  isLesserThan: function(assertionToCheck, otherNumber) {
    if(assertionToCheck < otherNumber) {
      console.log(assertionToCheck + " is less than " + otherNumber)
    } else {
      throw new Error(assertionToCheck + " is not less than " + otherNumber)
    }
  },

  isGreaterThan: function(assertionToCheck, otherNumber) {
    if(assertionToCheck > otherNumber) {
      console.log(assertionToCheck + " is greater than " + otherNumber)
    } else {
      throw new Error(assertionToCheck + " is not greater than " + otherNumber)
    }
  },


  arraysEqual: function(array1, array2) {
    if (arraysMatch(array1, array2)) {
      console.log(array1 + " is the same as " + array2);
    } else {
      throw new Error("Assertion Failed: " + array1 + " Does not Equal " + array2);
    }
  }
};

arraysMatch = function(array1, array2) {
  var arraysMatched = true
  for (var i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) {
      arraysMatched = false;
    }
  }
  return arraysMatched;
}
