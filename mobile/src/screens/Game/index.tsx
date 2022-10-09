import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";

import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";
import { Background } from "../../components/Background";
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ColorValue,
  FlatList,
} from "react-native";
import { THEME } from "../../theme";
import { Heading } from "../../components/Heading";
import { AdCard } from "../../components/AdCard";
import { EmptyAds } from "../../components/EmptyAds";

interface GameProps {
  banner: string;
  id: string;
  title: string;
}

interface AdCardProps {
  name: string;
  id: string;
  yearsPlaying: number;
  weekDays: Array<string>;
  hourStart: number;
  hourEnd: number;
  colorValue?: ColorValue;
  useVoiceChannel: boolean;
  gameId: string;
  discord: string;
}

export function Game() {
  const [ads, setAds] = useState<AdCardProps[]>([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [discord, setDiscord] = useState("");

  const route = useRoute();
  // game:GameProps
  const game: any = route.params;

  const navigate = useNavigation();

  function handleBackButton() {
    navigate.goBack();
  }

  async function getDiscordByAdId(adId: string) {
    fetch(`http://192.168.0.100:4444/ads/${adId}/discord`).then((res) =>
      res.json().then((data) => setDiscord(data.discord))
    );
  }

  useEffect(() => {
    fetch(`http://192.168.0.100:4444/games/${game.id}/ads`).then((res) =>
      res.json().then((data) => setAds(data))
    );
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackButton}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={30}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <ImageBackground
          resizeMode="cover"
          style={styles.cover}
          source={{ uri: game.banner }}
        />

        <Heading title={game.title} subTitle={"Conecte-se e comece a jogar!"} />
        {ads.length == 0 ? (
          <EmptyAds />
        ) : (
          <FlatList
            data={ads}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item.id}
            contentContainerStyle={
              ads.length > 1 ? styles.contentList : styles.contentList2
            }
            renderItem={({ item }) => (
              <AdCard
                data={item}
                onConnect={() => {
                  setIsModalOpened(!isModalOpened);
                  getDiscordByAdId(item.id);
                }}
                discord={discord}
                setIsModalOpened={setIsModalOpened}
                isModalOpened={isModalOpened}
              />
            )}
          />
        )}
      </SafeAreaView>
    </Background>
  );
}
