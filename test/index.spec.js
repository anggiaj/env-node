const expect = require('chai').expect;
const env = require('../');

describe('env', function () {
  beforeEach(function () {
    process.env.NODE_ENV = 'test';
  });

  it('behave like a string', function () {
    // eslint-disable-next-line eqeqeq
    expect(env == process.env.NODE_ENV).to.be.true;
    expect(env === process.env.NODE_ENV).to.be.false; // i do say behave

    expect(env.toString()).to.eq(process.env.NODE_ENV);
    expect(`${env}`).to.eq(process.env.NODE_ENV);
    expect(String(env)).to.eq(process.env.NODE_ENV);
  });

  describe('is*', function () {
    it('strictly compare `NODE_ENV` value', function () {
      expect(env[`is${process.env.NODE_ENV}`]).to.be.true;
      expect(env[`IS${process.env.NODE_ENV}`]).to.be.undefined;

      process.env.NODE_ENV = 'integration-test';
      expect(env.isIntegrationTest).to.be.true;
      expect(env.isTest).to.be.false;

      process.env.NODE_ENV = undefined;
      expect(env.isUndefined).to.be.true;
    });
  });

  describe('satisfy*', function () {
    it('loosely compare `NODE_ENV` value', function () {
      expect(env[`satisfy${process.env.NODE_ENV}`]).to.be.true;
      expect(env[`SATISFY${process.env.NODE_ENV}`]).to.be.undefined;

      process.env.NODE_ENV = 'test:integration';
      expect(env.satisfyTest).to.be.true;

      process.env.NODE_ENV = 'some-test';
      expect(env.satisfyTest).to.be.true;
    });
  });
});
