const assert = require('assert');
const { getIndexFile } = require('./utils');

describe('index.html', () => {
  let indexFile;
  before(async () => {
    indexFile = await getIndexFile();
  });

  it('should have a DOCTYPE', () => {
    assert(/<!doctype html>/i.test(indexFile));
  });
});
