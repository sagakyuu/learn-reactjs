import React from "react";

export default function Button({ variant, children }) {
  return (
    <button className={`${variant} px-3 py-1 text-white rounded`}>
      {children}
    </button>
  );
}
