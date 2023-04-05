import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import Game from "./components/Game";
import { store } from "./store/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Game />
    </Provider>
  );
}

registerRootComponent(App);
