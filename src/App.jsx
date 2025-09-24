import React, { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" font-mono flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-700 to-slate-900  m-20 rounded-lg">
      <div className="border border-white p-20 rounded-lg bg-slate-500/30 shadow-2xl">
        <button
          className="rounded-lg border-2 border-white p-2 text-white font-medium bg-gray-800 hover:bg-gray-700"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="relative text-white text-center bg-gray-600 border border-white  rounded-lg shadow-lg w-96 p-6 z-10">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 text-2xl right-3 text-black hover:text-amber-300"
              >
                ✖
              </button>
              <h2 className="py-1 font-bold text-2xl ">Modal Title Here</h2>
              <p className="py-1">Lorem ipsum dolor sit amet.</p>
              <button
                className="rounded-lg border-2 border-white px-3 py-1 mt-2 text-white font-medium bg-gray-800 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
