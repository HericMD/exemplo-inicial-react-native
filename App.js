import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header"
import listaEstados from './src/components/ListaEstados'

export default function App() {
  const tarefas = ["tarefa 1", "tarefa 2", "tarefa 3"]
  return (
    <View style={styles.container}>
      <Header titulo="teste"/>
      <Header titulo="lista-legal"/>
      <View> 
        <ListaEstado />
        {/* {tarefas.map((tarefa) => (
        <Text>(task)</Text>
        ))} */}
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
