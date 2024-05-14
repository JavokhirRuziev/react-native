import React from "react";
import { PaperProvider } from "react-native-paper";
import Navigations from "./navigations/Navigations";
import { theme } from "./theme";

function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigations />
    </PaperProvider>
  );
}

export default App;
