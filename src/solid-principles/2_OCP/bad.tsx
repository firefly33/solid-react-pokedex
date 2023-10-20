import React from "react";
import { getAllTypes } from "../../constants/Types";
import TypeTag from "./TypeTag";

function OCP() {
  return (
    <section className="flex justify-center flex-wrap gap-4 px-28 py-6">
      {getAllTypes().map((type) => (
        <TypeTag
          key={type.name}
          selected={true}
          name={type.name}
          onClick={() => null}
        />
      ))}
    </section>
  );
}

export default OCP;
