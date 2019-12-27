import React, {useRef, useContext, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {isEqual} from 'lodash';
import MapContext from './MapContext';

const Marker = ({position, iconStyle, labelOptions}) => {
  const {googleAPI, mapInstance} = useContext(MapContext);
  const marker = useRef();
  useEffect(() => {
    marker.current = new googleAPI.Marker({
      position,
      title: labelOptions.title,
      map: mapInstance,
      label: {text: labelOptions.label, color: labelOptions.color},
      icon: {
        path: googleAPI.SymbolPath.CIRCLE,
        ...iconStyle,
      },
    });
    return () => {
      marker.current.setMap(null);
    };
  }, [
    googleAPI,
    mapInstance,
    position,
    iconStyle,
    labelOptions.title,
    labelOptions.label,
    labelOptions.color,
  ]);

  return <Fragment />;
};

Marker.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  labelOptions: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  iconStyle: PropTypes.shape({
    strokeWeight: PropTypes.number,
    scale: PropTypes.number,
    fillColor: PropTypes.string,
    fillOpacity: PropTypes.number,
  }).isRequired,
};

// Protecting component from unnecessary rerenders since we are using objects as props
export default React.memo(Marker, (prevProps, nextProps) =>
  isEqual(prevProps, nextProps)
);
