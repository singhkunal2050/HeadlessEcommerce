import React from "react";
import { MdDone, MdClose, MdError } from "react-icons/md";

function Toast({ message, type }) {
  return (
    <div
      id="toast-default"
      className="flex fixed right-10 z-10 items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      {type === "success" ? (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-100 rounded-l dark:text-green-200 text-green-500 dark:bg-green-800">
          <MdDone />
        </div>
      ) : (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-red-100 rounded-l dark:text-red-200 text-red-500 dark:bg-red-800">
          <MdError />
        </div>
      )}

      <div className="ml-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="ml-auto inline-flex justify-center items-center bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100  h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <MdClose />
      </button>
    </div>
  );
}

export default Toast;
