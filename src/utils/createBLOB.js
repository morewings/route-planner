const createBlob = string =>
  new Blob([string], {type: 'text/xml;charset=utf-8'});

export default createBlob;
