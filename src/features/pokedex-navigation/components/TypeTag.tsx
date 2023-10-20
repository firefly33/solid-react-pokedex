import React from "react";

const TypeTag = ({ name, selected }: any) => {
  function getTypeIcon(type: string) {
    return `/src/assets/types/icons/${type}.svg`;
  }

  return (
    <div
      className={`px-2.5 py-0.5 flex gap-2 w-fit rounded-full bg-white text-white bg-opacity-25 capitalize`}
    >
      <img src={getTypeIcon(name)} className="w-4" />
      <span>{name}</span>
    </div>
  );
};

export default TypeTag;
