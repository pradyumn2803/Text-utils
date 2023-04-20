import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div
        class="bg-green-200 border text-black px-3 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">{props.alert.msg}</strong>
      </div>
    )
  );
}
