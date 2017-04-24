var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('PASSED')
    }
  },
  isFalse: function(assertionToCheck) {
    if( assertionToCheck ) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    } else {
      console.log('PASSED');
    }
  }
};
