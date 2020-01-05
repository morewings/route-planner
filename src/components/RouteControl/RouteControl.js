import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from '../../Redux/route';
import DraggableList from '../DraggableList';
import Waypoint from '../Waypoint';
import './RouteControl.scss';

const RouteControl = () => {
  const coordinates = useSelector(selectors.getRouteCoordinates);
  const dispatch = useDispatch();
  const handleReorder = useCallback(
    (source, destination) => {
      dispatch({
        type: actionTypes.REORDER_COORDINATES,
        payload: {source, destination},
      });
    },
    [dispatch]
  );
  const handleDelete = useCallback(
    id => {
      dispatch({
        type: actionTypes.DELETE_COORDINATES,
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
