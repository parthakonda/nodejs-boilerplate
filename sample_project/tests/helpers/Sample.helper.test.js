/**
 * @jest-environment node
 */
const { helperFunction } = require('../../src/helpers');

describe('=> should return helper function response', () => {
  test('check response', () => {
    expect(helperFunction()).toEqual('helper function response');
  });
});
