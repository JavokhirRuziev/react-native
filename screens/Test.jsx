import React from "react";
import { View, Text, Button } from "react-native";
import Wrapper from "../components/Layouts/Wrapper";

export default ({ route, navigation }) => {
  return (
    <Wrapper>
      <Text>This is 's profile</Text>
      <Button
        title="Go to New user's profile"
        onPress={() => navigation.navigate("New User", { name: "User name" })}
      />
    </Wrapper>
  );
};
