import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Ads } from "./Ads";
import * as Dialog from "@radix-ui/react-dialog";
import { DuoMatch } from "./DuoMatch";
import { Loading } from "./Loading";
import { SmileySad } from "phosphor-react";

interface LocationProps {
  state: {
    src: string;
    name: string;
    anuncios: number;
    gameId: string;
  };
}

export interface AdCardProps {
  name: string;
  id: string;
  yearsPlaying: number;
  weekDays: Array<string>;
  hourStart: number;
  hourEnd: number;

  useVoiceChannel: boolean;
  gameId: string;
  discord: string;
}

function GameAds() {
  const location: LocationProps = useLocation();
  const [ads, setAds] = useState<AdCardProps[]>([]);
  const [discord, setDiscord] = useState("");
  const [isAdsLoading, setIsAdsLoading] = useState(false);
  console.log(ads.length);
  useEffect(() => {
    setIsAdsLoading(true);
    fetch(
      `https://nlw-e-sports-production.up.railway.app/games/${location.state.gameId}/ads`
    )
      .then((res) => res.json().then((data) => setAds(data)))
      .then(() => setIsAdsLoading(false));
  }, []);

  return (
    <div className="w-[100vw] h-[100vh]  p-6 bg-transparent  flex   flex-col justify-between items-center">
      <div
        className={`w-[150px]  lg:w-[200px]  h-[340px] flex flex-col items-center`}
      >
        <img
          className="cover w-[250px] h-[340px] rounded-lg 
          "
          src={`${location.state.src}`}
        />
        <h1 className="font-bold text-white md:text-2xl text-xl mt-5">
          {location.state.name}
        </h1>
        <h2 className="font-normal  text-zinc-400 md:text-lg text-base mt-3">
          Conecte-se e comece a jogar!
        </h2>
      </div>

      <Dialog.Root>
        {isAdsLoading ? (
          <div className="md:w-[600px] w-full flex justify-center items-center !z-0 mt-8 h-[400px]">
            <Loading size={100} />
          </div>
        ) : (
          <Ads ads={ads} setDiscord={setDiscord} />
        )}

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white rounded-lg w-[600px] shadow-lg shadow-black/40">
            <DuoMatch discord={discord} />
            <Dialog.Description />
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default GameAds;
