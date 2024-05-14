import Home from "../screens/Home";
import Test from "../screens/Test";
import New from "../screens/New";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { IconButton, MD3Colors } from "react-native-paper";
import { StyleSheet } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <IconButton
                  style={styles.icon}
                  icon="camera"
                  iconColor={"white"}
                  size={15}
                  onPress={() => console.log("Pressed")}
                />
              );
            },
            tabBarLabel: "",
          }}
        />
        <Tab.Screen name="Profile" component={Test} />
        <Tab.Screen name="New" component={New} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginBottom: 10,
  },
});
