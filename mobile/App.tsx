import { Background } from "./src/components/Background";
import { useEffect, useRef } from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import * as Notifications from "expo-notifications";

import { Subscription } from "expo-modules-core";

import "./src/services/notificationConfigs";
import { getPushNotificationToken } from "./src/services/getPushNotificationToken";

import { StatusBar } from "react-native";

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

export default function App() {
  const getNotificationListener = useRef<Subscription>();
  const resNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
      });

    resNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      if (getNotificationListener.current && resNotificationListener.current) {
        Notifications.removeNotificationSubscription(
          getNotificationListener.current
        );
        Notifications.removeNotificationSubscription(
          resNotificationListener.current
        );
      }
    };
  }, []);

  const [fontsLoad] = useFonts({
    // para saber se a fonte foi carregada
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,

    Inter_500Medium,
    Inter_900Black,
  });
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoad ? <Routes /> : <Loading />}
    </Background>
  );
}
