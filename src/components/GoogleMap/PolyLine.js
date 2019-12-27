import React, {Fragment, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import MapContext from './MapContext';

const PolyLine = ({polylineOptions, coordinates}) => {
  const {googleAPI, mapInstance} = useContext(MapContext);
  useEffect(() => {
    const Polyline = new googleAPI.Polyline(polylineOptions);
    Polyline.setMap(mapInstance);
    const path = Polyline.getPath();
    coordinates.forEach(coordinate => {
      path.push(coordinate); // eslint-disable-line fp/no-mutating-methods
    });
    return () => {
      Polyline.setMap(null);
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
