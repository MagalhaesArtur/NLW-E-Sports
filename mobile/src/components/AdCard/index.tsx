import { View, Text, ColorValue, TouchableOpacity } from "react-native";
import { THEME } from "../../theme";
import { GameController } from "phosphor-react-native";

import { styles } from "./styles";
import React, { useEffect, useState } from "react";
import { DuoMatch } from "../DuoMatch";

interface AdCardProps {
  name: string;
  yearsPlaying: number;
  weekDays: Array<string>;
  hourStart: number;
  hourEnd: number;
  colorValue?: ColorValue;
  useVoiceChannel: boolean;
  gameId: string;
  id: string;
  discord: string;
}

interface Props {
  data: AdCardProps;
  onConnect: () => any;
  discord: string;
  isModalOpened: boolean;
  setIsModalOpened: any;
}

export function AdCard({
  data,
  onConnect,
  discord,
  isModalOpened,
  setIsModalOpened,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.label}>Nome</Text>
        <Text style={[styles.value, { color: "white" }]}>{data.name}</Text>

        <Text style={styles.label}>Tempo de Jogo</Text>
        <Text style={[styles.value, { color: "white" }]}>
          {data.yearsPlaying} anos
        </Text>

        <Text style={styles.label}>Disponibilidade</Text>
        <Text style={[styles.value, { color: "white" }]}>
          {data.weekDays.length} dias <Text style={styles.bolinha}>•</Text>{" "}
          {data.hourStart} - {data.hourEnd}
        </Text>

        <Text style={styles.label}>Chamada de Aúdio</Text>
        {data.useVoiceChannel ? (
          <Text style={[styles.value, { color: THEME.COLORS.SUCCESS }]}>
            {data.useVoiceChannel ? "SIM" : "NÃO"}
          </Text>
        ) : (
          <Text style={[styles.value, { color: THEME.COLORS.ALERT }]}>
            {data.useVoiceChannel ? "SIM" : "NÃO"}
          </Text>
        )}

        <TouchableOpacity style={styles.button} onPress={onConnect}>
          <GameController color={THEME.COLORS.TEXT} size={20} />
          <Text style={styles.buttonTitle}>Conectar</Text>
        </TouchableOpacity>

        <DuoMatch
          visible={isModalOpened}
          setIsModalOpened={setIsModalOpened}
          adId={data.id}
          discord={discord}
          isModalOpened={isModalOpened}
        />
      </View>
    </View>
  );
}
