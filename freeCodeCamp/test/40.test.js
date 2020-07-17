const assert = require('assert');
const { getIndexFile } = require('./utils');

describe('index.html', () => {
  let indexFile;
  before(async () => {
    indexFile = await getIndexFile();
  });

  it('should have head tags', () => {
    assert(/<\s*head\s*>/i.test(indexFile));
  });
});
