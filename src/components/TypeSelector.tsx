import React, { useState } from "react";
import { Type } from "../entities/Type";
import TypeTag from "../solid-principles/2_OCP/TypeTag";

function TypeSelector({
  types,
  onFilter,
}: {
  types: Type[];
  onFilter: (type: Type) => void;
}) {
  const [selected, setSelected] = useState<number>();

  function handleSelectType(selected: boolean, name: string) {
    const typeFound = types.find((x) => x.name === name);
    if (!typeFound) return;

    setSelected(() => {
      const typeFoundIndex = types.indexOf(typeFound);
      if (selected) return undefined;
      return typeFoundIndex;
    });
    onFilter(typeFound);
  }

  function isTagSelected(name: string) {
    return types.findIndex((x) => x.name === name) === selected;
  }

  return (
    <section className="flex flex-col justify-center items-center gap-2 text-bold text-xl capitalize text-gray-600">
      <h2 className="text-gray text-2xl">Filtrer par type...</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {types.map((type) => (
          <TypeTag
            key={type.name}
            name={type.name}
            selected={isTagSelected(type.name)}
            onClick={handleSelectType}
          />
        ))}
      </div>
    </section>
  );
}

export default TypeSelector;
