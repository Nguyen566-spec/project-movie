import React from "react";

const Input = ({ label, id, errors, ...props }) => {
  return (
    <div className="m-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <p className="text-red-500">{errors}</p>
    </div>
  );
};

export default Input;
