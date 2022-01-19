import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

const USERS = [
  { id: 1, name: "GrahamCampbell" },
  { id: 2, name: "fabpot" },
  { id: 3, name: "weierophinney" },
  { id: 4, name: "rkh" },
  { id: 5, name: "josh" },
];

export default function Home({ navigation }: RootStackScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 GitHub Users</Text>
      <Text style={styles.subtitle}>
        Tap the username to see more information
      </Text>

      <View style={styles.containerBtns}>
        {USERS.map((user) => (
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => navigation.navigate("Person", { name: user.name })}
          >
            <Text style={styles.btnTitle}>{user.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 16,
  },
  containerBtns: {
    display: "flex",
  },
  userBtn: {
    backgroundColor: "#325ca8",
    marginBottom: 10,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnTitle: { color: "white", fontSize: 14 },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
