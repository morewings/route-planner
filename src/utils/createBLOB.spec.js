import createBLOB from './createBLOB';

describe('createBlob', () => {
  it('creates BLOB from string', () => {
    expect(createBLOB('hello world!')).toBeInstanceOf(Blob);
  });
});
