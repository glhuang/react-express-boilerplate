import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';

import { sumTest } from 'src/client/testFile';

chai.use(dirtyChai);

describe('Example Test', () => {
  it('should be true', () => {
    expect(true).to.be.true();
  });
});
