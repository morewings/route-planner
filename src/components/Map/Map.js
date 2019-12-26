import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {ADD_COORDINATES} from 'Redux/constants';
import {serializeCoordinates} from 'utils/coordinates';
import {GoogleMap} from 'components/GoogleMap';
import Route from 'components/Map/Route';
import './Map.scss';

const area51 = {
  lat: 37.234332396,
  lng: -115.80666344,
};

const Map = () => {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    coordinates =>
      dispatch({
        type: ADD_COORDINATES,
        payload: serializeCoordinates(coordinates),
      }),
    [dispatch]
  );

  return (
    <div className="map">
      <GoogleMap
        className="map-container"
        onClick={handleClick}
        center={area51}
        polyLineOptions={{
          strokeColor: '#000000',
          strokeOpacity: 1.0,
          strokeWeight: 3,
        }}
        zoom={9}>
        <Route />
      </GoogleMap>
    </div>
  );
};

export default Map;
