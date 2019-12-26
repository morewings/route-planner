import React from 'react';
import ReactDomServer from 'react-dom/server';
import GPXRoute from './GPXRoute';

const renderGPX = coordinates => {
  const gpx = ReactDomServer.renderToStaticMarkup(
    <GPXRoute coordinates={coordinates} />
  );
  return `<?xml version="1.0"?>\n${gpx}`;
};

export default renderGPX;
