import { useState } from "react";

export function useItemsState(items) {
  const defState = {};
  items.forEach((element) => {
    defState[element.key] = element.props.value;
  });
  return useState(defState);
}
