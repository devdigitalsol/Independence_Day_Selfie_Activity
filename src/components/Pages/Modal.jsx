import React from "react";

export default function Modal({ children, setModalOpen }) {
  return (
    <>
      <div className="modalBack fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className=" max-w-lg w-full mx-auto p-4 relative  ">
          <div className="relative bg-white rounded-2xl shadow-lg p-6 text-center  ">
            {children}
            <div className="flex justify-center items-center  mt-6">
              {/* <button
                type="submit"
                className="btn bg-[#007DC4] text-white  rounded-lg px-24 py-2 "
                onClick={() => setModalOpen(false)}
              >
                ok
              </button> */}
              <button
                className="btn bg-[#007DC4] text-white  rounded-lg "
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
