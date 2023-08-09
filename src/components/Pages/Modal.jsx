import React from "react";

export default function Modal({ children, setModalOpen }) {
  return (
    <>
      <div className="backImage fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className=" max-w-lg w-full mx-auto p-4 relative  ">
          <div className="relative bg-white rounded-2xl shadow-lg p-4  text-center  ">
            {children}
            <div className="flex justify-center items-center  mt-6">
              <button
                className="button-design"
                onClick={() => setModalOpen(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
