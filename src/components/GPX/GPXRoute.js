import React from 'react';
import PropTypes from 'prop-types';
import {GPX, Route, RoutePoint} from './elements';

const GPXRoute = ({coordinates}) => (
  <GPX version="1.1" creator="route-planner">
    <Route name="Your route">
      {coordinates.map(({lat, lng, id}) => (
        <RoutePoint lat={lat} lng={lng} key={id} />
      ))}
    </Route>
  </GPX>
);

GPXRoute.propTypes = {
  coordinates: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GPXRoute;
