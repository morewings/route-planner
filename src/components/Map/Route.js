import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {parseCoordinates} from 'utils/coordinates';
import {Marker, PolyLine} from 'components/GoogleMap';

const Route = () => {
  const coordinates = useSelector(state => state.route.coordinates);
  return (
    <Fragment>
      {coordinates.map(coordinate => (
        <Marker position={coordinate} key={coordinate.id} />
      ))}
      <PolyLine
        coordinates={parseCoordinates(coordinates)}
        polylineOptions={{
          strokeColor: '#000000',
          strokeOpacity: 1.0,
          strokeWeight: 3,
        }}
      />
    </Fragment>
  );
};

export default Route;
