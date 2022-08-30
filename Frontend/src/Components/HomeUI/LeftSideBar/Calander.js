import React, { useRef } from "react";
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/flatpickr.css";

export default function Calander() {
  const fp = useRef(null);

  return (
    <div>
      <Flatpickr ref={fp} />
      <button
        type="button"
        onClick={() => {
          if (!fp?.current?.flatpickr) return;
          fp.current.flatpickr.clear();
        }}
      >
        Clear
      </button>
    </div>
  );
}