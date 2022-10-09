import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4444",
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
