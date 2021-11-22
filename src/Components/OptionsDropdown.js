import react, { useState, useRef, useEffect, Component } from "react";
import DealCountry from "./DealCountry";

export default function OptionsDropdown({
  allCounties,
  divDisplay,
  inputState,
  divDisplayState,
  currentInputValue,
  resetInputValue,
}) {
  return (
    <div style={{ display: divDisplay, marginTop: "10px" }}>
      {allCounties.map((coutry) => {
        if (coutry.label.includes(currentInputValue)) {
          return (
            <DealCountry
              country={coutry}
              getinputState={inputState}
              changdivDisplayState={divDisplayState}
              resetInputValue={resetInputValue}
            />
          );
        }
      })}
    </div>
  );
}
