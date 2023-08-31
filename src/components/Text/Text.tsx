import { useState } from "react";
import "./Text.css";

export function Text() {
  const [state, setState] = useState(true);
  return (
    <div className="text">
      { state && <h1>My text</h1> }
      <button onClick={() => setState((prev) => !prev)}>Click me</button>
    </div>
  );
}
