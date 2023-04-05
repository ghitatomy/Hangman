import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      },
      label: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
      },
      wordDisplay: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        width: "100%",
        letterSpacing: 10,
      },
      inputContainer: {
        flexDirection: "row",
        marginBottom: 20,
      }
});