import deleteItemFromList from './deleteItemFromList';

describe('deleteItemFromList', () => {
  const list = [
    {id: 'id1', name: 'name1'},
    {id: 'id2', name: 'name2'},
    {id: 'id3', name: 'name3'},
  ];
  it('deletes item from array, based on provided params', () => {
    expect(deleteItemFromList(list[1].id, list)).toEqual([
      {id: 'id1', name: 'name1'},
      {id: 'id3', name: 'name3'},
    ]);
  });
  it('does not mutate given array', () => {
    const result = deleteItemFromList(list[1].id, list);
    expect(list).not.toEqual(result);
    expect(list).toEqual([
      {id: 'id1', name: 'name1'},
      {id: 'id2', name: 'name2'},
      {id: 'id3', name: 'name3'},
    ]);
  });
});
