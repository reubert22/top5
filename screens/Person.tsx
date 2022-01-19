import { StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Person({ route }: RootStackScreenProps<"Person">) {
  const [user, setUser] = useState();
  console.log("user", user);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${route.params.name}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <View style={styles.container}>
      {!!user ? (
        <>
          <Image style={styles.img} source={{ uri: user?.avatar_url || "" }} />
          <Text style={styles.title}>{user?.name || ""}</Text>
          <Text style={styles.location}>{user?.location || ""}</Text>
        </>
      ) : (
        <Text style={styles.loading}>Loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  location: {
    fontSize: 16,
  },
  loading: {
    fontSize: 16,
  },
});
