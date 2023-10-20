import React from "react";
import Input from "./Input";

function LSP() {
  return (
    <section className="px-32 py-9 flex flex-col gap-4 items-center">
      <section className="flex flex-col gap-2">
        <label>Primitive (super) type</label>
        <input
          className="w-full border-slate-600 border-solid border-2 rounded-md px-4 py-2"
          type="text"
        />
      </section>
      <section className="flex flex-col gap-2">
        <label>Implémentation</label>
        <Input type="password" />
      </section>
    </section>
  );
}

export default LSP;
