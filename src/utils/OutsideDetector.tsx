import React, { useRef, useEffect } from "react";
import getParentBlock from "./getParentBlock";

type Props = {
  callback: (bool: boolean, parent: HTMLElement) => void;
  children: React.ReactElement;
};

/**
 * Detect click outside the block to close it.
 * Also detects block dragging to hide edit column
 */
const OutsideDetector: React.FC<Props> = ({ callback, children }) => {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      const parent = getParentBlock(ref.current);

      function handleMouseDown(event) {
        // Add data attribute to hide edit bar when dragging
        const clickHandler = getParentBlock(event.target, ".collapsible__drag");
        const isHandlerInsideEditBlock = clickHandler
          ? !!getParentBlock(clickHandler, ".blocks-field__edit-group")
          : false;

        if (clickHandler && !isHandlerInsideEditBlock) {
          parent.dataset.dragging = "true";
        }

        // Prevent closing when using modal (selecting image form Media collection)
        const modalParent = getParentBlock(
          event.target,
          ".payload__modal-item"
        );
        if (modalParent) return;

        // Close if outside
        if (ref.current && !parent.contains(event.target)) {
          callback(false, parent);
        } else {
          callback(true, parent);
        }
      }

      // Remove dragging data attribute on mouse up
      function handleMouseUp(event) {
        parent.dataset.dragging = "false";
      }

      // Also close on Esc press
      function handleKeyDown(event) {
        event = event || window.event;
        let isEscape = false;
        if ("key" in event) {
          isEscape = event.key === "Escape" || event.key === "Esc";
        } else {
          isEscape = event.keyCode === 27;
        }
        if (isEscape) {
          callback(false, parent);
        }
      }

      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        // Clean up
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
};

export default OutsideDetector;
