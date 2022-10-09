import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    position: "relative",
    borderRadius: 12,
    height: 300,
    backgroundColor: THEME.COLORS.SHAPE,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  title: {
    color: "white",
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 24,
    marginTop: 60,
  },
  subTitle: {
    color: THEME.COLORS.CAPTION_400,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 16,
    marginTop: 6,
  },
  addDisc: {
    color: "white",
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 16,
    marginTop: 25,
  },

  check: {
    top: 30,
    position: "absolute",
  },
  nameDisc: {
    color: "white",
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
  },
});
