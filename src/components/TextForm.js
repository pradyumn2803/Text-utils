import React, { useState } from "react";

export default function TextForm(props) {
  const handleonchange = (event) => {
    settext(event.target.value);
  };

  const handleUpper = () => {
    settext(textval.toUpperCase());
  };

  const handleLower = () => {
    settext(textval.toLowerCase());
  };

  // const handlewordssize = () => {
  //   if (textval === "") return 0;
  //   let words = textval.split(" ");
  //   let n = words.length;
  //   let word = 0;
  //   for (let i = 0; i < n; i++) {
  //     if (words[i][0] === undefined) continue;
  //     else word++;
  //   }
  //   return word;
  // };

  // const handlelettersize = () => {
  //   if (textval === "") return 0;
  //   let words = textval.split(" ");
  //   let n = words.length;
  //   let letter = 0;
  //   for (let i = 0; i < n; i++) {
  //     if (words[i][0] === undefined) continue;
  //     else letter += words[i].length;
  //   }
  //   return letter;
  // };

  const handleCapitalise = () => {
    let st = "";
    let arr = textval.split(" ");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] !== undefined)
        st += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
      if (i !== arr.length - 1) st += " ";
    }
    settext(st);
  };

  const handleAlternate = () => {
    if (textval !== "") {
      let st = "";
      let arr = textval.split(" ");
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] !== " " && j % 2 === 0) {
            st += arr[i][j].toUpperCase();
          } else if (arr[i][j] !== " " && j % 2 !== 0) {
            st += arr[i][j].toLowerCase();
          }
        }
        if (i !== arr.length - 1) st += " ";
      }
      settext(st);
    }
  };

  const handleclear = () => {
    settext("");
  };

  const handleCopy = () => {
    let textt = document.querySelector("#cpy");
    textt.select();
    navigator.clipboard.writeText(textt.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied Text to clipboard");
  };

  const handleExtraSpaces = () => {
    let newtext = textval.split(/[ ]+/);
    settext(newtext.join(" "));
  };

  const [textval, settext] = useState("");

  return (
    <>
      <div className="flex flex-col m-auto w-[60%] sm:w-[90%] md:w-[90%]">
        <textarea
          id="cpy"
          className="border-2 border-black mt-5 px-2"
          placeholder="Type your text here"
          value={textval}
          onChange={handleonchange}
          cols="120"
          rows="15"
          style={{
            backgroundColor: props.mode === "Light" ? "white" : "#5e5f93",
            color: props.mode === "Light" ? "black" : "white",
          }}
        />
        <div className="flex flex-start flex-wrap">
          <button
            disabled={textval.length === 0}
            className="bg-red-400 border-2 border-red-800 mt-2 p-2 mr-2 rounded-md hover:shadow-md hover:bg-gradient-to-r from-red-400 to-pink-500 hover:text-white hover:border-green-900"
            onClick={handleUpper}
          >
            UpperCase
          </button>
          <button
            disabled={textval.length === 0}
            className="bg-red-400 border-2 border-red-800 mt-2 p-2 mr-2 rounded-md hover:shadow-md hover:bg-gradient-to-r from-red-400 to-pink-500 hover:text-white hover:border-green-900"
            onClick={handleLower}
          >
            LowerCase
          </button>
          <button
            disabled={textval.length === 0}
            className="bg-red-400 border-2 border-red-800 mt-2 p-2 mr-2 rounded-md hover:shadow-md hover:bg-gradient-to-r from-red-400 to-pink-500 hover:text-white hover:border-green-900"
            onClick={handleCapitalise}
          >
            Capitalize
          </button>
          <button
            disabled={textval.length === 0}
            className="bg-red-400 border-2 border-red-800 mt-2 p-2 mr-2 rounded-md hover:shadow-md hover:bg-gradient-to-r from-red-400 to-pink-500 hover:text-white hover:border-green-900"
            onClick={handleAlternate}
          >
            AlternateCase
          </button>
          <button
            disabled={textval.length === 0}
            className="bg-red-400 border-2 border-red-800 mt-2 p-2 mr-2 rounded-md hover:shadow-md hover:bg-gradient-to-r from-red-400 to-pink-500 hover:text-white hover:border-green-900"
            onClick={handleCopy}
          >
            CopyTextToClipboard
          </button>
          <button
            disabled={textval.length === 0}
            className="bg-red-400 border-2 border-red-800 mt-2 p-2 mr-2 rounded-md hover:shadow-md hover:bg-gradient-to-r from-red-400 to-pink-500 hover:text-white hover:border-green-900"
            onClick={handleExtraSpaces}
          >
            RemoveExtraSpaces
          </button>
          <button
            disabled={textval.length === 0}
            className="bg-red-400 border-2 border-red-800 mt-2 p-2 mr-2 rounded-md hover:shadow-md hover:bg-gradient-to-r from-red-400 to-pink-500 hover:text-white hover:border-green-900"
            onClick={handleclear}
          >
            Clear
          </button>
        </div>
        <div
          className="flex flex-col mt-3"
          style={{ color: props.mode === "Light" ? "black" : "white" }}
        >
          <div
            className="font-bold"
            style={{ color: props.mode === "Light" ? "black" : "white" }}
          >
            {textval.length} letters,{" "}
            {
              textval.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words
          </div>
        </div>
        <div style={{ color: props.mode === "Light" ? "black" : "white" }}>
          <div
            className="text-2xl font-bold mt-3"
            style={{ color: props.mode === "Light" ? "black" : "white" }}
          >
            Preview
          </div>
          <p className="text-l">
            {textval.length === 0 ? "Nothing to Preview!" : textval}
          </p>
        </div>
      </div>
    </>
  );
}
