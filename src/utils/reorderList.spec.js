import reorderList from './reorderList';

describe('reorderList', () => {
  const list = ['a', 'b', 'c', 'd', 'e'];
  it('reorders array based on provided params', () => {
    expect(reorderList(0, 3, list)).toEqual(['b', 'c', 'd', 'a', 'e']);
  });
  it('does not mutate given array', () => {
    const result = reorderList(0, 5, list);
    expect(list).not.toEqual(result);
    expect(list).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});
