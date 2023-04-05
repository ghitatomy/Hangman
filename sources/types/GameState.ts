export enum GameProgress { GAME_WON, GAME_IN_PROGRESS, GAME_LOST };

export interface GameState {
    word: string;
    score: number;
    lives: number;
    highScore: number;
    wordDisplay: string;
    gameProgress: GameProgress
  }