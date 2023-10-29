import React, { useState } from "react";

function Form({ onSubmit }: any) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  function handleSubmit (event: any) {
    event.preventDefault();
    onSubmit(name, type)
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="flex flex-col gap-2">
        <label>... son nom</label>
        <input
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-100 border-slate-600 border-solid border-2 rounded-md px-4 py-2"
          type="text"
        />
      </section>
      <section className="flex flex-col gap-2">
        <label>... son type</label>
        <input
          name="type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          className="w-100 border-slate-600 border-solid border-2 rounded-md px-4 py-2"
          type="text"
        />
      </section>
      <section className="flex flex-col gap-2">
        <button
          type="submit"
          className="w-full bg-indigo-400 px-4 py-2 rounded-md text-white text-lg"
        >
          Rechercher
        </button>
      </section>
    </form>
  );
}

export default Form;
