import { TextInput } from "react-native";
import { styles } from "./styles/GuessInputStyles";

type Props = {
  value: string;
  onChangeText: (input: string) => void;
};

function GuessInput({ value, onChangeText }: Props) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      maxLength={1}
      keyboardType="default"
      autoCapitalize="characters"
      autoCorrect={false}
    />
  );
}

export default GuessInput;
