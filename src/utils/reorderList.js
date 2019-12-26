const reorderList = (startIndex, endIndex, list) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1); // eslint-disable-line fp/no-mutating-methods
  result.splice(endIndex, 0, removed); // eslint-disable-line fp/no-mutating-methods
  return result;
};

export default reorderList;
