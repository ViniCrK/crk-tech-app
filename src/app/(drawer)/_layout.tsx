import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            height: "100%",
            width: 220,
            backgroundColor: "#DEDEDE",
          },
          swipeEnabled: false,
        }}
        initialRouteName="index"
      ></Drawer>
    </GestureHandlerRootView>
  );
}

export default TabLayout;
