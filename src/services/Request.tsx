import { apidev } from "providers";

const getPokes = (prev: any, count: any) => apidev.get(`/pokemon`,{
  params: {
    offset: prev,
    limit: count
  }
});

export const Pokes = {
  getPokes,
  
}
