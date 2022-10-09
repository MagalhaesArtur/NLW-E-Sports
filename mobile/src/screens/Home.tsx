import React, { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import logo from "../assets/logo-nlw-esports.png";
import { Background } from "../components/Background";
import { GameCard, GameProps } from "../components/GameCard";
import { Heading } from "../components/Heading";

import { styles } from "./HomeStyles";

export function Home() {
  const [games, setGames] = useState<GameProps[]>([]);

  const navigation = useNavigation();

  function handleToggleScreen({ title, id, banner }: GameProps) {
    navigation.navigate("game", { title, id, banner });
  }

  useEffect(() => {
    fetch("http://192.168.0.100:4444/games").then((res) =>
      res.json().then((data) => setGames(data[0]))
    );
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Heading
          title={"Encontre seu duo!"}
          subTitle={"Conecte-se e comece a jogar!"}
        />

        <FlatList
          data={games}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard onPress={() => handleToggleScreen(item)} data={item} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
