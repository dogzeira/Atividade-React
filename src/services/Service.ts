import axios from "axios";
import { AnyRecord } from "dns";

export const api = axios.create({
  baseURL: "https://doggblogg.herokuapp.com",
});
export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data);
};
export const login = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data.token);
};
