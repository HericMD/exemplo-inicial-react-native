import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./src/components/Header"

export default function App() {
  const tarefas = ["tarefa 1", "tarefa 2", "tarefa 3"]
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList 
        data = {tarefas}
        renderItem = {({item}) => <Text>{item}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "#e4e4e7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  },
  
});
