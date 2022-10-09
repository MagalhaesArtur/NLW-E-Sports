import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const createAd = async ({
  name,
  yearsPlaying,

  discord,
  weekDays,
  hourStart,
  hourEnd,
  useVoiceChannel,

  gameId,
}: any) => {
  await api.post("/ads", {
    gameId,
    name,
    yearsPlaying,
    discord,
    weekDays,
    hourStart,
    hourEnd,
    useVoiceChannel,
  });
};
