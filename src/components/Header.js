import { View, Text, StyleSheet } from "react-native";
import { Component } from "react";

// export default function Header(props) {
//   return (
//     <View style={styles.header}>
//       <Text style={{ color: "white", fontSize: 20 }}>{props.titulo}</Text>
//     </View>
//   );
// }

export default class Header extends Component {
  render() {
    <View style={styles.header}>
      <Text style={{ color: "white", fontSize: 20 }}>
        {this.props.titulo}
      </Text>
    </View>;
  }
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
