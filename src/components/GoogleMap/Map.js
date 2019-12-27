import React, {useRef, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import MapContext from './MapContext';
import useGoogleMap from './useGoogleMap';

const MapContainer = ({center, zoom, onClick, children, className}) => {
  const mapNode = useRef();
  const contextStorage = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [isMapReady, setIsMapReady] = useState(false);
  const onSuccess = useCallback(
    googleAPI => {
      const handleClick = e => {
        onClick(e.latLng);
      };
      setIsLoading(false);
      contextStorage.current = {
        googleAPI,
        mapInstance: new googleAPI.Map(mapNode.current, {
          zoom,
          center,
          mapTypeId: 'terrain',
        }),
      };
      contextStorage.current.mapInstance.addListener('click', handleClick);
      setIsMapReady(true);
      return () => {
        // We can't destroy map instance, so we are just removing event listeners
        contextStorage.current.googleAPI.event.clearListeners(
          contextStorage.current.mapInstance,
          'click'
        );
      };
    },
    [center, zoom, onClick]
  );

  useGoogleMap(onSuccess);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={className} ref={mapNode}>
      {isMapReady && (
        <MapContext.Provider value={contextStorage.current}>
          {children}
        </MapContext.Provider>
      )}
    </div>
  );
};

MapContainer.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  polyLineOptions: PropTypes.shape({
    strokeColor: PropTypes.string.isRequired,
    strokeOpacity: PropTypes.number.isRequired,
    strokeWeight: PropTypes.number.isRequired,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

export default MapContainer;
