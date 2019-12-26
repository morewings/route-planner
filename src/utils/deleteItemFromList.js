const deleteItemFromList = (id, list) => list.filter(item => item.id !== id);

export default deleteItemFromList;
