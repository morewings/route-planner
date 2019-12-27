import deleteItemFromList from './deleteItemFromList';

describe('deleteItemFromList', () => {
  const list = Object.freeze([
    {id: 'id1', name: 'name1'},
    {id: 'id2', name: 'name2'},
    {id: 'id3', name: 'name3'},
  ]);
  it('deletes item from array, based on provided params', () => {
    expect(deleteItemFromList(list[1].id, list)).toEqual([
      {id: 'id1', name: 'name1'},
      {id: 'id3', name: 'name3'},
    ]);
  });
});
