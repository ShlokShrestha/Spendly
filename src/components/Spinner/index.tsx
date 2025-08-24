import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="w-7 h-7 border-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
  );
};

export default Spinner;
