/*eslint-disable*/
const reorderList = (startIndex, endIndex, list) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default reorderList;
