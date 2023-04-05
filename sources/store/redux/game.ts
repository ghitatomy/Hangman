import { createSlice } from "@reduxjs/toolkit";
import { LIVES_LOST, MAX_LIVES, RESET_SCORE, SCORE_POINTS } from "../../constants/Constants";
import { GameProgress, GameState } from "../../types/GameState";
import { createUnderscore, getRandomWord, isCorrectGuess, isGameWon } from "../../utils/Utils";
import { setItem, getItem } from "../secure/secureStore";

const randomWord = getRandomWord()

const initialState: GameState = {
  word: randomWord,
  score: RESET_SCORE,
  lives: MAX_LIVES,
  highScore: RESET_SCORE,
  wordDisplay: createUnderscore(randomWord),
  gameProgress: GameProgress.GAME_IN_PROGRESS
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameState: (_state: GameState, { payload }: { payload: GameState }) => saveAndReturnState(payload),
    onGameLost: (state: GameState) => {
      const randomWord = getRandomWord();
      return saveAndReturnState({
          ...state,
          score: RESET_SCORE,
          lives: MAX_LIVES,
          word: randomWord,
          wordDisplay: createUnderscore(randomWord),
          gameProgress: GameProgress.GAME_IN_PROGRESS
        });
   },
   onGameWon: (state: GameState) => {
    const currentScore = state.score + SCORE_POINTS;
    let highestScore = state.highScore;
    if (currentScore > highestScore) {
      highestScore = currentScore;
    }
    const randomWord = getRandomWord();
    return saveAndReturnState({
        word: randomWord,
        highScore: highestScore,
        score: currentScore,
        lives: MAX_LIVES,
        wordDisplay: createUnderscore(randomWord),
        gameProgress: GameProgress.GAME_IN_PROGRESS
      });
   },
   onPlayerInput: (state: GameState, { payload }: { payload: string }) => {
    if (isCorrectGuess(state.word, payload)) {
      const newWordDisplay = state.wordDisplay
      .split("")
      .map((char, i) =>
        char === "_" && state.word[i].toLowerCase() === payload.toLowerCase()
          ? payload
          : char
      )
      .join("");
      return saveAndReturnState(
        { ...state, 
          wordDisplay: newWordDisplay, 
          gameProgress: isGameWon(newWordDisplay, state.word) ? GameProgress.GAME_WON : state.gameProgress }
      );
    } else {
      const currentLives = state.lives - LIVES_LOST;
      if (currentLives === RESET_SCORE) {
        return saveAndReturnState({ ...state, gameProgress: GameProgress.GAME_LOST })
      } else {
        return saveAndReturnState({ ...state, lives: currentLives })
      }
    }
   }
  }
});

const saveAndReturnState = (newState: GameState): GameState => {
  setItem("hangman", JSON.stringify(newState));
  return newState;
}

export const getInitialGameState: () => Promise<GameState> = async () => {
  const gameState = await getItem("hangman");
  if (gameState) {
    return JSON.parse(gameState) as GameState;
  } else {
    return initialState;
  }
};

export const { setGameState, onGameLost, onGameWon, onPlayerInput } = gameSlice.actions;

export default gameSlice.reducer;
