import React from "react";

export default function Label({ name, children }) {
  return <label htmlFor={name}>{children}</label>;
}
