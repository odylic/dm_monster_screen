import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectInitiativeOrder,
  addToInitiativeOrder,
  sortInitiativeOrder,
  deleteFromInitiativeOrder,
} from "../store/monsterSlice";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function InitiativeOrder() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [initiative, setInitiative] = useState("");
  const [visibility, setVisibility] = useState("initiativeContainerHidden");

  const resetInput = (e) => {
    e.target.placeholder = "";
  };

  const resetValue = (e) => {
    e.target.value = "";
  };

  const initiativeOrder = useSelector(selectInitiativeOrder);

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
              onChange={(e) => setInitiative(e.target.value)}
            ></input>
            <button
              disabled={!name || !initiative}
              onClick={() => {
                dispatch(
                  addToInitiativeOrder({
                    name: name,
                    initiative: initiative,
                    id: Date.now(),
                  })
                );
                setName("");
                setInitiative("");
              }}
              type="reset"
            >
              Enter
            </button>
          </form>
          <div className="initiativeOrderList">
            {initiativeOrder.map((item, index) => (
              <div className="initiativeItem" key={item.id}>
                <div className="itemName">{item.name}</div>
                <div className="itemInitiative">{item.initiative}</div>

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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
