import React, {Fragment, useRef, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import MapContext from './MapContext';

const PolyLine = ({polylineOptions, coordinates}) => {
  const {googleAPI, mapInstance} = useContext(MapContext);
  const polyLine = useRef();
  useEffect(() => {
    polyLine.current = new googleAPI.Polyline(polylineOptions);
    polyLine.current.setMap(mapInstance);
    const path = polyLine.current.getPath();
    coordinates.forEach(coordinate => {
      path.push(coordinate); // eslint-disable-line fp/no-mutating-methods
    });
    return () => {
      polyLine.current.setMap(null);
    };
  }, [googleAPI, mapInstance, coordinates, polylineOptions]);

  return <Fragment />;
};

PolyLine.propTypes = {
  polylineOptions: PropTypes.shape({
    strokeColor: PropTypes.string.isRequired,
    strokeOpacity: PropTypes.number.isRequired,
    strokeWeight: PropTypes.number.isRequired,
  }).isRequired,
  coordinates: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.func.isRequired,
      lng: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default PolyLine;
