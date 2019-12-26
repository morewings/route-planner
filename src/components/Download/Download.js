import React from 'react';
import {useSelector} from 'react-redux';
import {saveAs} from 'file-saver';
import createBLOB from 'utils/createBLOB';
import renderGPX from 'components/GPX';
import './Download.scss';

const Download = () => {
  const coordinates = useSelector(state => state.route.coordinates);
  const hasRoute = coordinates.length !== 0;
  const handleClick = () => {
    if (hasRoute) {
      const GPXString = renderGPX(coordinates);
      saveAs(createBLOB(GPXString), 'route.gpx');
    }
  };
  return (
    <div>
      <button
        type="button"
        disabled={!hasRoute}
        onClick={handleClick}
        className="download-button">
        Download your Route
      </button>
    </div>
  );
};

export default Download;
