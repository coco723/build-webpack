
const assert = require('assert');

// eslint-disable-next-line no-undef
describe('webpack.base.js test case', () => {
  // eslint-disable-next-line global-require
  const baseConfig = require('../../lib/webpack.base.js');

  // eslint-disable-next-line no-undef
  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf('build-webpack/test/smoke/template/src/index/index.js') !== -1, true);
    assert.equal(baseConfig.entry.search.indexOf('build-webpack/test/smoke/template/src/search/index.js') !== -1, true);
  });
});
