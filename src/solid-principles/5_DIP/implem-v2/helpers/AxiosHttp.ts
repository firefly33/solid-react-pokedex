import axios from "axios";
import { IHttp } from "../interfaces/Http.interface";

export function AxiosHttp(): IHttp {
  return {
    get: async <T>(url: string): Promise<T> => {
      return axios.get(url).then((data) => data.data);
    },
  };
}
