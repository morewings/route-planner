import React from 'react';
import PropTypes from 'prop-types';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: `${grid * 2} 0`,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? 'rgb(195, 228, 82)' : '', // change background colour if dragging
  ...draggableStyle, // styles we need to apply on draggables
});

const getListStyle = () => ({
  padding: grid,
  width: '100%',
  boxSizing: 'border-box',
});

const DraggableList = ({items, onReorder, listItem}) => {
  const ListItem = listItem;
  const onDragEnd = result => {
    if (result.destination) {
      onReorder(result.source.index, result.destination.index);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(providedDrop, snapshotDrop) => (
          <div
            {...providedDrop.droppableProps}
            ref={providedDrop.innerRef}
            style={getListStyle(snapshotDrop.isDraggingOver)}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(providedDrag, snapshotDrag) => (
                  <div
                    ref={providedDrag.innerRef}
                    {...providedDrag.draggableProps}
                    {...providedDrag.dragHandleProps}
                    style={getItemStyle(
                      snapshotDrag.isDragging,
                      providedDrag.draggableProps.style
                    )}>
                    <ListItem index={index} item={item} />
                  </div>
                )}
              </Draggable>
            ))}
            {providedDrop.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

DraggableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onReorder: PropTypes.func.isRequired,
  listItem: PropTypes.elementType.isRequired,
};

DraggableList.defaultProps = {
  items: [],
};

export default DraggableList;
