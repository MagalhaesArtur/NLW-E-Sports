import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: "space-between",
  },
  logo: {
    width: 90,
    height: 50,
  },
  right: {
    width: 20,
    height: 40,
  },
  cover: {
    width: 311,
    height: 160,
    marginTop: 32,
    borderRadius: 8,
    overflow: "hidden",
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    height: 300,
    justifyContent: "flex-start",
    borderRadius: 8,
  },
  contentList2: {
    width: "100%",
    paddingLeft: 32,
    paddingRight: 64,
    height: 300,
    justifyContent: "flex-start",
    borderRadius: 8,
  },
});
