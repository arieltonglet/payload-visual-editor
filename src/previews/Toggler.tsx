import React from "react";
import { useField } from "payload/components/forms";
import OutsideDetector from "../utils/OutsideDetector";

type Props = { path: string };

const Toggler: React.FC<Props> = ({ path }) => {
  const { value, setValue } = useField<Props>({ path });

  const toggle = (bool: boolean, parent): void => {
    if (bool) {
      setValue("1");
      parent.classList.add("blocks-field__row--selected");
    } else {
      setValue("");
      parent.classList.remove("blocks-field__row--selected");
    }
  };

  return (
    <OutsideDetector callback={toggle}>
      <input style={{ display: "none" }} />
    </OutsideDetector>
  );
};

export default Toggler;
