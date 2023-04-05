import words from "../data/words.json";

export const createUnderscore = (str: string) => "_".repeat(str.length);

export const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

export const isEnglishLetter = (playerInput: string) => /[a-z]/.test(playerInput.toLowerCase());

export const isCorrectGuess = (word: string, playerInput: string) =>
  word.toLowerCase().includes(playerInput.toLowerCase());

export const isGameWon = (newWordDisplay: string, word: string) => 
    newWordDisplay.toLowerCase() === word.toLowerCase()
