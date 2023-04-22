import React from "react";

export default function Alert(props) {
  return (
    <div className="h-[35px]">
    {props.alert && (
      <div
        className="bg-green-200 border text-black px-3 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">{props.alert.msg}</strong>
      </div>
    )}
    </div>
  );
}
