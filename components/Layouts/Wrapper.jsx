import { ScrollView, StyleSheet } from "react-native";

export default ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
  },
});
