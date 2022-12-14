import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";

import { styles } from "./styles";

import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../theme";

export interface GameProps {
  banner: string;
  id: string;
  title: string;
  _count: {
    ads: number;
  };
}
interface Props extends TouchableOpacityProps {
  data: GameProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: data.banner }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
