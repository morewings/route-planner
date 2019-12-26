import React, {useRef, useContext, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import MapContext from './MapContext';

const Marker = ({position}) => {
  const {googleAPI, mapInstance} = useContext(MapContext);
  const marker = useRef();
  useEffect(() => {
    marker.current = new googleAPI.Marker({
      position,
      title: '#',
      map: mapInstance,
    });
    return () => {
      marker.current.setMap(null);
    };
  }, [googleAPI, mapInstance, position]);

  return <Fragment />;
};

Marker.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default Marker;
