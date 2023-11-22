import React from "react";
import { AxiosHttp } from "../helpers/AxiosHttp";
import { HttpContext } from "../providers/HttpContext";

function ContextAxiosTestPage() {
  return (
    <HttpContext.Provider value={{ http: AxiosHttp() }}>
      <section>
        Ainsi grace au context react qui expose l'implémentation d'AxiosHttp, on
        peut effectuer un appel de n'importe quel composant enfant au
        HttpContext.Provider
      </section>
    </HttpContext.Provider>
  );
}

export default ContextAxiosTestPage;
