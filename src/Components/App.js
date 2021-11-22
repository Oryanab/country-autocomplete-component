import react, { useState, useRef, useEffect, Component } from "react";
import SearchBar from "./SearchBar";

export class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Choose A country:</h1>
          <SearchBar />
        </div>
      </>
    );
  }
}

export default App;
