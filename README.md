# Hangman Application

## 1 Structure

The structure of the project contain a "sources" folder which contains the main logic of the application, appart from configuration files.
"sources" has 6 layers and the App.tsx file.
The layers are: components, constants, data, store, types and utils.

### 1.0 Components layer

It is composed by 3 components: ConfirmButton, Game, GuessInput, a styles folder conainting components styles.

#### 1.0.0 ConfirmButton

This component is a button used to confirm an action.
It is disabled when the action is not ready to be confirmed.

#### 1.0.1 Game

This component is the main game screen for Hangman.

It displays the current state of the game, including the word being guessed, the player's score, the high score, and the number of lives the player has left.

The component also contains the input field for guessing letters and a button to confirm the guess.

When the component mounts, it retrieves the initial game state from secure storage and updates the state with the information.

When a player confirms their guess, the component dispatches an action to update the game state.

Additionally, when the game progress changes, the component will display an alert depending on if the player has won or lost.

#### 1.0.2 GuessInput

This component is a text input with a single character limit that is used to guess characters in a word game.

### 1.1 Constants layer

It contains the constants used in the application.

### 1.2 Data layer

It contains a json file with all the words to guess.

### 1.3 Store layer

This layer contains other 2 layers: redux and secure.

#### 1.3.0 redux

It contains a store used by the redux provider, and a game that contain a slice.

The gameSlice is created for the game and sets the initial state with a random word.
The reducers are set to reset the game, take user inputs, and check if a game is won.
The gameState is then saved on Secure Store and returned when needed.

#### 1.3.1 secure

This has a secure store file which is responsible for:
providing methods for setting, getting and removing items from the secure store.

### 1.4 Types layer

It is responsible for keeping types used by applicaition.

### 1.5 Utils layer

It contains a file with the utility methods used by application.

### 1.6 App

It is an App component that provides a redux store to its Game component and renders the Expo StatusBar. It also registers the App component as a root component.
