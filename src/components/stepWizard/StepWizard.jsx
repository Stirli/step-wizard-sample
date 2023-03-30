import { cloneElement, useEffect, useState } from "react";
import { useItemsSelector } from "../hooks/useItems";
import { useItemsState } from "../hooks/useItemsState";

export function StepWizard({ children }) {
  const [state, setState] = useItemsState(children);
  const [step, onPrev, onNext] = useItemsSelector(children);
  function onChange(data) {
    setState((prevState) => {
      let dataObj = data;
      if (typeof data === "function") {
        dataObj = {};
        dataObj[step.key] = data(prevState[step.key]);
      }

      return { ...prevState, ...dataObj };
    });
  }
  return (
    <div className="h-100">
      <div>
        {cloneElement(step, { val: [step.key, step.props.value], onChange })}
      </div>
      <div className=" mt-2">
        <button className="btn btn-secondary" onClick={onPrev}>
          Prev
        </button>
        <button className="btn btn-primary ml-2" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
