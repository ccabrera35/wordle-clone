export const targetWord = "Earth";
export let guess = "";

export const validLetters = (name: string) => {
  guess = name.toLowerCase();

  return guess;
};
