import { View } from "react-native";
import { Tabs } from "expo-router/tabs";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            height: 60,
            paddingTop: 5,
            marginHorizontal: 10,
            position: "absolute",
            bottom: 20,
            borderRadius: 10,
          },
          animation: "fade",
          tabBarActiveTintColor: "#2547A0",
          tabBarInactiveTintColor: "#212020",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "INÍCIO",
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Feather
                    name="home"
                    size={24}
                    color={focused ? "#2547A0" : "#212020"}
                  />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="projetos"
          options={{
            tabBarLabel: "PROJETOS",
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <FontAwesome5
                    name="project-diagram"
                    size={20}
                    color={focused ? "#2547A0" : "#212020"}
                  />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="servicos"
          options={{
            tabBarLabel: "SERVIÇOS",
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Octicons
                    name="tools"
                    size={24}
                    color={focused ? "#2547A0" : "#212020"}
                  />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="sobre"
          options={{
            tabBarLabel: "SOBRE",
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <AntDesign
                    name="infocirlceo"
                    size={24}
                    color={focused ? "#2547A0" : "#212020"}
                  />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="perfil"
          options={{
            tabBarLabel: "PERFIL",
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <FontAwesome6
                    name="user-circle"
                    size={24}
                    color={focused ? "#2547A0" : "#212020"}
                  />
                </View>
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}
