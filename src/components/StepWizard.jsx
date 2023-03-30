import { cloneElement, useEffect, useState } from "react";

export function StepWizard({ children }) {
  
  return (
    <div>
      <div>{children}</div>
      <div className=" mt-2">
        <button className="btn btn-seconadry" onClick={onPrev}>
          prev
        </button>
        <button
          className="btn btn-primary"
          onClick={onNext}
          disabled={!canNext}>
          next
        </button>
      </div>
    </div>
  );
}