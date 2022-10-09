import { View, Text } from "react-native";
import { SmileySad } from "phosphor-react-native";
import { styles } from "./styles";
import { THEME } from "../../theme";

export function EmptyAds() {
  return (
    <View style={styles.container}>
      <SmileySad color={THEME.COLORS.TEXT} size={90} />
      <Text style={styles.text}>Sem anúncios para este jogo por enquanto!</Text>
    </View>
  );
}
