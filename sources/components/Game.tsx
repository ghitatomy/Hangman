import { View, Text, Alert } from "react-native";
import { styles } from "./styles/GameStyles";
import ConfirmButton from "./ConfirmButton";
import GuessInput from "./GuessInput";
import { GameProgress, GameState } from "../types/GameState";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SCORE_POINTS } from "../constants/Constants";
import { isEnglishLetter } from "../utils/Utils";
import {
  getInitialGameState,
  setGameState,
  onGameLost,
  onGameWon,
  onPlayerInput,
} from "../store/redux/game";

function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getGameStateFromSecureStorePromise = getInitialGameState();
    getGameStateFromSecureStorePromise.then((gameStateFromSecureStore) => {
      dispatch(setGameState(gameStateFromSecureStore));
    });
  }, []);
  const gameState = useSelector((state: GameState) => state);

  console.log(gameState);
  const [playerInput, setPlayerInput] = useState("");

  useEffect(() => {
    switch (gameState.gameProgress) {
      case GameProgress.GAME_IN_PROGRESS:
        break;
      case GameProgress.GAME_WON:
        const currentScore = gameState.score + SCORE_POINTS;
        Alert.alert(`You won! Your score is ${currentScore}`, undefined, [
          {
            text: "OK",
            onPress: () => dispatch(onGameWon()),
          },
        ]);
        break;
      case GameProgress.GAME_LOST:
        Alert.alert(`You lost! The word was ${gameState.word}`);
        dispatch(onGameLost());
        break;
    }
  }, [gameState.gameProgress]);

  function handleGuess() {
    if (!isEnglishLetter(playerInput)) {
      Alert.alert("Please enter an English letter");
      return;
    }
    dispatch(onPlayerInput(playerInput));
    setPlayerInput("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Word:</Text>
      <Text style={styles.wordDisplay}>{gameState.wordDisplay}</Text>
      <View style={styles.inputContainer}>
        <GuessInput value={playerInput} onChangeText={setPlayerInput} />
        <ConfirmButton
          disabled={playerInput.length === 0}
          onPress={handleGuess}
        />
      </View>
      <Text style={styles.label}>Score: {gameState.score}</Text>
      <Text style={styles.label}>High Score: {gameState.highScore}</Text>
      <Text style={styles.label}>Lives: {gameState.lives}</Text>
    </View>
  );
}

export default Game;
