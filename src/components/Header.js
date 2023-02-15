import { View, Text, StyleSheet } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={{ color: "white", fontSize: 20 }}>lista pog</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderRadius: 100,
    backgroundColor: "coral",
    width: "70%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
