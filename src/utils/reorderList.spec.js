import reorderList from './reorderList';

describe('reorderList', () => {
  const list = Object.freeze(['a', 'b', 'c', 'd', 'e']); // freexing mock to check if mutation happens
  it('reorders array based on provided params', () => {
    expect(reorderList(0, 3, list)).toEqual(['b', 'c', 'd', 'a', 'e']);
  });
});
