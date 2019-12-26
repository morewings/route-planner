import {
  ADD_COORDINATES,
  REORDER_COORDINATES,
  DELETE_COORDINATES,
} from 'Redux/constants';
import reorderList from 'utils/reorderList';
import deleteItemFromList from 'utils/deleteItemFromList';

const initialState = {
  coordinates: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COORDINATES:
      return {
        ...state,
        coordinates: [...state.coordinates, action.payload],
      };
    case REORDER_COORDINATES:
      return {
        ...state,
        coordinates: reorderList(
          action.payload.source,
          action.payload.destination,
          state.coordinates
        ),
      };
    case DELETE_COORDINATES:
      return {
        ...state,
        coordinates: deleteItemFromList(action.payload, state.coordinates),
      };
    default: {
      return state;
    }
  }
};
