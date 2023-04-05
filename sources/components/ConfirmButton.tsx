import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles/ConfirmButtonStyles";

type Props = {
  disabled: boolean;
  onPress: () => void;
};

function ConfirmButton({ disabled, onPress }: Props) {
  return (
    <TouchableOpacity
      style={disabled ? styles.buttonDisabled : styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>Confirm</Text>
    </TouchableOpacity>
  );
}

export default ConfirmButton;
