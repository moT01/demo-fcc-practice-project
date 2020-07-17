const assert = require('assert');
const { getIndexFile } = require('./utils');

describe('index.html', () => {
  let indexFile;
  before(async () => {
    indexFile = await getIndexFile();
  });

  it('should html tags', () => {
    assert(/<html>/i.test(indexFile));
  });
});
