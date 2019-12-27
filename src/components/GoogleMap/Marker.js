import React, {useRef, useContext, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import MapContext from './MapContext';

const Marker = ({position, title, titleColor}) => {
  const {googleAPI, mapInstance} = useContext(MapContext);
  const marker = useRef();
  useEffect(() => {
    marker.current = new googleAPI.Marker({
      position,
      title,
      map: mapInstance,
      label: {text: title, color: titleColor},
    });
    return () => {
      marker.current.setMap(null);
    };
  }, [googleAPI, mapInstance, position, title, titleColor]);

  return <Fragment />;
};

Marker.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
};

export default Marker;
