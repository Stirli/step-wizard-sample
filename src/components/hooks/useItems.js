import { useState } from "react";

export function useItemsSelector(items) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  function onPrev() {
    setSelectedIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? prevIndex : newIndex;
    });
  }
  onPrev.canExecute = () => selectedIndex > 0;
  function onNext() {
    setSelectedIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= items.length ? prevIndex : newIndex;
    });
  }
  onNext.canExecute = () => selectedIndex < items.length-1;

  return [items[selectedIndex], onPrev, onNext];
}
