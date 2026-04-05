import { ENDPOINT_RANDOM_FACT } from "./constants";

export const getRandomFact = async () => {
  const res = await fetch(ENDPOINT_RANDOM_FACT);
  const data = await res.json();
  return data.fact;
};