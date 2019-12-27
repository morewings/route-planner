import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {REORDER_COORDINATES, DELETE_COORDINATES} from '../../Redux/constants';
import DraggableList from '../DraggableList';
import Waypoint from '../Waypoint';
import './RouteControl.scss';

const RouteControl = () => {
  const coordinates = useSelector(state => state.route.coordinates);
  const dispatch = useDispatch();
  const handleReorder = useCallback(
    (source, destination) => {
      dispatch({
        type: REORDER_COORDINATES,
        payload: {source, destination},
      });
    },
    [dispatch]
  );
  const handleDelete = useCallback(
    id => {
      dispatch({
        type: DELETE_COORDINATES,
        payload: id,
      });
    },
    [dispatch]
  );
  return (
    <div className="route-control">
      <DraggableList
        listItem={props => <Waypoint {...props} onDelete={handleDelete} />}
        onReorder={handleReorder}
        items={coordinates}
      />
    </div>
  );
};

export default RouteControl;
