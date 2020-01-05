import React from 'react';
import {useSelector} from 'react-redux';
import {saveAs} from 'file-saver';
import {selectors} from '../../Redux/route';
import createBLOB from '../../utils/createBLOB';
import renderGPX from '../GPX';
import './Download.scss';

const Download = () => {
  const coordinates = useSelector(selectors.getRouteCoordinates);
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
