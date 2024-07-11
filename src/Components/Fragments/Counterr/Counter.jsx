import { useState } from "react";
import Button from "../../Elements/Button";

export default function Counter() {
  const [state, setState] = useState(0);

  return (
    <div>
      <h1 className="text-center py-4 border border-black mb-3">{state}</h1>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            setState((prev) => prev + 1);
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            setState((prev) => prev - 1);
          }}
        >
          -
        </Button>
      </div>
    </div>
  );
}
