import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 300,
    marginBottom: 30,
    color: THEME.COLORS.TEXT,
  },
  text: {
    color: THEME.COLORS.TEXT,
    marginTop: 30,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 20,
  },
});
