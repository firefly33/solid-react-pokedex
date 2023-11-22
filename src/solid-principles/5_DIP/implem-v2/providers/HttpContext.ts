import { Context, createContext } from "react";
import { IHttp } from "../interfaces/Http.interface";

export interface AppContext {
  http?: IHttp;
}

export const HttpContext: Context<AppContext> = createContext<AppContext>({});
