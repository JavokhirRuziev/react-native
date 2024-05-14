import { configureFonts, MD2LightTheme } from "react-native-paper";
import fontConfig from "./fonts";

export const theme = {
  ...MD2LightTheme,
  fonts: configureFonts({ config: fontConfig, isV3: false }),
};
