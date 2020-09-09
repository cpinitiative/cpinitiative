import * as React from "react";

export default function Card({ title, borderColor, children }) {
  return (
    <div className={"bg-white shadow-md border-l-4 px-6 py-5 " + borderColor}>
      <h2 className="font-medium text-2xl mb-2">{title}</h2>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}