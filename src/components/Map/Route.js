import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {parseCoordinates} from '../../utils/coordinates';
import {PolyLine, Marker} from '../GoogleMap';

const Route = () => {
  const coordinates = useSelector(state => state.route.coordinates);
  return (
    <Fragment>
      {coordinates.map((coordinate, i) => (
        <Marker
          labelOptions={{
            color: 'white',
            label: `${i + 1}`,
            title: `Waypoint ${i + 1}`,
          }}
          position={coordinate}
          key={coordinate.id}
          iconStyle={{
            strokeWeight: 0,
            scale: 16,
            fillColor: '#000',
            fillOpacity: 1,
          }}
        />
      ))}
      <PolyLine
        coordinates={parseCoordinates(coordinates)}
        polylineOptions={{
          strokeColor: '#1086E7',
          strokeOpacity: 1.0,
          strokeWeight: 5,
        }}
      />
    </Fragment>
  );
};

export default Route;
