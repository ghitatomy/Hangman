import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 5,
        width: "35%",
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold",
      },
      buttonDisabled: {
        backgroundColor: "#D3D3D3",
        opacity: 0.5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: "35%",
      }
});