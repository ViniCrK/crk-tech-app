import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from ".";
import Login from "./login";
import Projetos from "./projetos";
import Servicos from "./servicos";
import Sobre from "./sobre";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { height: 60, paddingTop: 10 },
        }}
      >
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Feather
                      name="home"
                      size={24}
                      color={focused ? "#2547A0" : "#212020"}
                    />
                  </View>
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="Projetos"
          component={Projetos}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <FontAwesome5
                      name="project-diagram"
                      size={20}
                      color={focused ? "#2547A0" : "#212020"}
                    />
                  </View>
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="Serviços"
          component={Servicos}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Octicons
                      name="tools"
                      size={24}
                      color={focused ? "#2547A0" : "#212020"}
                    />
                  </View>
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <AntDesign
                      name="infocirlceo"
                      size={24}
                      color={focused ? "#2547A0" : "#212020"}
                    />
                  </View>
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <FontAwesome6
                      name="user-circle"
                      size={24}
                      color={focused ? "#2547A0" : "#212020"}
                    />
                  </View>
                </>
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
