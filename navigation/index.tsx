/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Text } from "react-native";

import Home from "../screens/Home";
import Person from "../screens/Person";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerShown: true,
          title: "Home",
        })}
      />
      <Stack.Screen
        name="Person"
        component={Person}
        options={({ navigation }) => ({
          presentation: "modal",
          headerShown: true,
          title: "",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate("Home")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              })}
            >
              <FontAwesome
                name="chevron-left"
                size={25}
                style={{ marginRight: 15 }}
              />
              <Text>Back</Text>
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
