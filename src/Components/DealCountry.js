import react, { useState, useRef, useEffect, Component } from "react";
export default function DealCountry({
  country,
  getinputState,
  changdivDisplayState,
  resetInputValue,
}) {
  return (
    <option
      style={{ cursor: "pointer" }}
      onClick={() => {
        getinputState(country.label);
        changdivDisplayState("none");
        resetInputValue("");
      }}
      key={country.code}
      value={country.label}
    >
      {country.label}-{country.code}-{country.phone}
    </option>
  );
}
