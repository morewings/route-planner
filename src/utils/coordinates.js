import {uniqueId} from 'lodash';

export const serializeCoordinates = ({lat, lng}) => ({
  lat: lat(),
  lng: lng(),
  id: uniqueId('point-'),
});

export const parseCoordinates = coordinates =>
  coordinates.map(({lat, lng}) => ({
    lat: () => lat,
    lng: () => lng,
  }));
