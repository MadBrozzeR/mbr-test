const { test } = require('./index.js');

test({
  'Should succeed': function (success, fail) {
    const result = 2 * 2;

    if (result === 4) {
      success();
    } else {
      fail(result.toString());
    }
  }
});
