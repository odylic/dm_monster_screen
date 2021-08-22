import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectInitiativeOrder,
  addToInitiativeOrder,
  sortInitiativeOrder,
  deleteFromInitiativeOrder,
  setInitiativeOrder,
} from "../store/monsterSlice";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function InitiativeOrder() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState("");
  const [visibility, setVisibility] = useState("initiativeContainerHidden");

  const initiativeValue = parseInt(initiative) || 0;

  const resetInput = (e) => {
    e.target.placeholder = "";
  };

  const resetValue = (e) => {
    e.target.value = "";
  };

  const initiativeOrder = useSelector(selectInitiativeOrder);

  // keeps the order
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  // const [list, setList] = useState();

  const onEnd = (result) => {
    dispatch(
      setInitiativeOrder(
        reorder(initiativeOrder, result.source.index, result.destination.index)
      )
    );
  };

  return (
    <div>
      <div className={visibility}>
        <div>
          <button
            className="showInitiativeButton"
            onClick={(e) => {
              e.preventDefault();
              if (visibility === "initiativeContainerHidden")
                setVisibility("initiativeContainerShown");
              if (visibility === "initiativeContainerShown")
                setVisibility("initiativeContainerHidden");
            }}
          >
            {visibility === "initiativeContainerHidden" ? (
              <span>
                <ArrowBackIcon /> <h3>Initiative</h3>
              </span>
            ) : (
              <span>
                <ArrowForwardIcon />
              </span>
            )}
          </button>
        </div>
        <div>
          <div className="header">
            <h3>Initiative Order</h3>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(sortInitiativeOrder());
              }}
            >
              Sort
            </button>
          </div>
          <form>
            <input
              className="inputName"
              placeholder="enter name"
              value={name}
              onFocus={(e) => {
                resetInput(e);
                resetValue(e);
              }}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="inputInitiative"
              placeholder="enter initiative"
              value={initiative}
              onFocus={(e) => {
                resetInput(e);
                resetValue(e);
              }}
              onChange={(e) => {
                setInitiative(e.target.value);
              }}
            ></input>
            <button
              disabled={!name || !initiative}
              onClick={() => {
                dispatch(
                  addToInitiativeOrder({
                    name: name,
                    initiative: initiativeValue,
                    id: Date.now(),
                  })
                );
                setName("");
                setInitiative("");
              }}
              type="submit"
            >
              Enter
            </button>
          </form>

          <DragDropContext onDragEnd={onEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} className="initiativeOrderList">
                  {initiativeOrder.map((item, index) => (
                    <Draggable
                      draggableId={String(item.id)}
                      key={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="initiativeItem"
                        >
                          <div className="itemName">{item.name}</div>
                          <div className="itemInitiative">
                            {item.initiative}
                          </div>

                          <button
                            className="initiativeButton"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(deleteFromInitiativeOrder(item.id));
                            }}
                          >
                            x
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}
