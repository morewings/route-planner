import React from 'react';
import PropTypes from 'prop-types';
import dragIcon from './dragIcon.svg';
import deleteIcon from './deleteIcon.svg';
import './Waypoint.scss';

const Waypoint = ({index, item, onDelete}) => {
  const handleClick = () => {
    onDelete(item.id);
  };
  return (
    <div className="waypoint">
      <div className="waypoint-dragHandle">
        <i className="waypoint-icon">
          <img src={dragIcon} alt="drag" />
        </i>
      </div>
      <div className="waypoint-name">Waypoint {index + 1}</div>
      <div className="waypoint-actions">
        <i
          tabIndex={0}
          role="button"
          className="waypoint-icon"
          onClick={handleClick}>
          <img src={deleteIcon} alt="delete" />
        </i>
      </div>
    </div>
  );
};

Waypoint.propTypes = {
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Waypoint;
