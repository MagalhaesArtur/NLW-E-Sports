import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 20,
    marginRight: 24,
  },
  container2: {
    width: "100%",

    marginBottom: 16,
  },
  label: {
    color: THEME.COLORS.CAPTION_300,
    marginBottom: 2,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  value: {
    marginBottom: 16,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  bolinha: {
    color: THEME.COLORS.CAPTION_500,
    borderRadius: 16,
    fontSize: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 36,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    marginLeft: 12,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT,
  },
});
