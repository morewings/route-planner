import React from 'react';
import PropTypes from 'prop-types';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: `${grid * 2} 0`,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'rgb(195, 228, 82)' : '',

  // styles we need to apply on draggables
  ...draggableStyle,
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
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}>
                    <ListItem index={index} item={item} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
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
