const CMD = '\x1b';

const STYLE = {
  CLEAR: CMD + '[0m',
  GREEN: CMD + '[32m',
  RED: CMD + '[31m'
};

function test(cases) {
  const caseTexts = Object.keys(cases);
  let counter = 0;
  let failed = 0;

  function resolve() {
    process.stdout.write(STYLE.GREEN + ' OK\n' + STYLE.CLEAR);
    nextTest();
  }

  function fail(reason) {
    process.stdout.write(STYLE.RED + ' FAIL\n' + reason + STYLE.CLEAR + '\n');
    ++failed;
    nextTest();
  }

  function nextTest() {
    const currentCase = caseTexts[counter];

    if (currentCase) {
      ++counter;
      process.stdout.write(currentCase);

      cases[currentCase](resolve, fail);
    } else if (failed) {
      process.stdout.write(
        '\nFailed ' + STYLE.RED + failed + STYLE.CLEAR + ' out of ' + STYLE.GREEN + counter + STYLE.CLEAR + '\n'
      );
      process.exit(1);
    }
  }
  nextTest();
}

module.exports.test = test;
