import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { styles } from "./styles";
import { X, CheckCircle } from "phosphor-react-native";
import { THEME } from "../../theme";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";

interface Props extends ModalProps {
  setIsModalOpened: any;
  isModalOpened: boolean;
  adId: string;
  discord: string;
}

export function DuoMatch({
  setIsModalOpened,
  adId,
  discord,
  isModalOpened,

  ...rest
}: Props) {
  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscord() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);
    Alert.alert("Discord Copiado!");
    setIsCopping(false);
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => {
              setIsModalOpened(!isModalOpened);
            }}
            style={styles.closeButton}
          >
            <X color="white" size={26} />
          </TouchableOpacity>
          <CheckCircle
            weight="bold"
            color={THEME.COLORS.SUCCESS}
            style={styles.check}
            size={70}
          />
          <Text style={styles.title}>Let's Play!</Text>
          <Text style={styles.subTitle}>Agora é só começar a jogar!</Text>
          <Text style={styles.addDisc}>Adicione no Discord</Text>

          <View style={styles.discord}>
            <TouchableOpacity onPress={handleCopyDiscord}>
              {isCopping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                <Text style={styles.nameDisc}>{discord}</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
