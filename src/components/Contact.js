import React from "react";

export default function Contact(props) {
  return (
    <div className=" flex sm:w-[350px] w-[450px] m-auto flex-wrap">
      <section className="text-gray-600 body-font relative mt-4">
        <div
          className="container m-auto sm:w-[100%]"
          style={{ color: props.mode === "Light" ? "black" : "white" }}
        >
          <div className="flex flex-col text-center w-full mb-4">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
              style={{ color: props.mode === "Light" ? "black" : "white" }}
            >
              Contact Us
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 sm:w-[80%] mx-auto">
            <div className="flex flex-wrap sm:flex-col -m-2">
              <div className="p-2 w-1/2 sm:w-[100%]">
                <div className="relative">
                  <label
                    for="name"
                    className="leading-7 text-sm text-gray-600"
                    style={{
                      color: props.mode === "Light" ? "black" : "white",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2 sm:w-[100%]">
                <div className="relative">
                  <label
                    style={{
                      color: props.mode === "Light" ? "black" : "white",
                    }}
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    style={{
                      color: props.mode === "Light" ? "black" : "white",
                    }}
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-44 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex justify-center mx-auto text-black bg-white border-2 border-indigo-400 py-2 px-2 w-20 focus:outline-none hover:text-white hover:bg-indigo-600 rounded text-md sm:text-sm sm:p-1"
                  onClick={() => {
                    props.showAlert("Thank you for your feedback!");
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 w-full pt-2 mt-8 border-t border-gray-200 text-center">
          <p className="leading-normal my-2 sm:text-sm" style={{
                      color: props.mode === "Light" ? "black" : "white",
                    }}>
            Developer: Pradyumn Choudhary
            <br />
            Undergraduate student in Techno International Newtown - B.tech in
            Computer Science and Business Systems
          </p>
          <hr />
          <span className="inline-flex my-2" >
            <a
              className="ml-4 text-gray-500"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pradyumn-choudhary-b0715b1b3/"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </a>
            <a
              className="ml-4 text-gray-500"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/pradyumn.choudharyy/"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="ml-4 text-gray-500"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pradyumn2803"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
              </svg>
            </a>
          </span>
        </div>
      </section>
    </div>
  );
}
