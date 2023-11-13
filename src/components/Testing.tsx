import { useEffect, useState } from "react";

const Testing = () => {
  const [count, setCount] = useState(0);

  console.log("Render du composant...");

  useEffect(() => {
    console.log("Effet appliqué lors du premier render du composant...");
  }, []);

  useEffect(() => {
    console.log("La valeur du compteur à changé !");
  }, [count]);

  function clicked() {
    setCount(count + 1);
  }

  return (
    <div className="h-full flex flex-col gap-4 justify-center items-center">
      <span>Nombre d'éléments: {count}</span>
      <button
        className={`text-white bg-emerald-600 shadow-xl shadow-bg-emerald-600 rounded-md px-3 py-2 text-sm`}
        onClick={clicked}
      >
        Count one more
      </button>
    </div>
  );
};

export default Testing;
