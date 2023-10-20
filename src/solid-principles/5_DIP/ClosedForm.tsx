import React, { FormEvent, useState } from "react";
import useTestMutation from "./hooks/useTestMutation";

function ClosedForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const { mutate, isLoading } = useTestMutation();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mutate({
      name: name,
      type: type,
    });
  }

  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
      <h2 className="text-2xl">Rechercher un pokémon par...</h2>
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

export default ClosedForm;
