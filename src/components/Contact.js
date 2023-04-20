import React from "react";

export default function Contact(props) {
  return (
    <>
    <div
      className="text-2xl ml-2 mt-3"
      style={{ color: props.mode === "Light" ? "black" : "white" }}
    >
      Contact us :-8765944567 
      or 
      send your feedback at text.utils@gmail.com
    </div>
    </>
  );
}
