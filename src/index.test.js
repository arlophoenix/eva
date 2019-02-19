import {expect} from 'goodeggs-test-helpers';
import {describe, it} from 'mocha';

import eva from '.';

describe('eva entrypoint', function() {
  it('works', function() {
    expect(() => eva.helloWorld()).not.to.throw();
  });
});
