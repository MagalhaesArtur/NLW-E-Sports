import * as Notifications from "expo-notifications";
import { requestPermissionsAsync } from "expo-notifications";

export async function getPushNotificationToken() {
  const { granted } = await Notifications.getPermissionsAsync();
  if (!granted) {
    await requestPermissionsAsync();
  }

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    console.log(pushToken.data, "<-- Token");
    return pushToken.data;
  }
}
