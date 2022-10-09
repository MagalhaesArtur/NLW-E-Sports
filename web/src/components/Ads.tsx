import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GameController } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export interface AdCardProps {
  ads: Array<{
    name: string;
    id: string;
    yearsPlaying: number;
    weekDays: Array<string>;
    hourStart: number;
    hourEnd: number;

    useVoiceChannel: boolean;
    gameId: string;
    discord: string;
  }>;
  setDiscord: any;
}

export function Ads({ ads, setDiscord }: AdCardProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      className="w-[600px] !z-0 mt-10 h-[400px]"
    >
      {ads.map((ad) => (
        <SwiperSlide
          key={ad.id}
          className="bg-roxoEscuro-100 flex gap-6 flex-col p-8 rounded-lg"
        >
          <div className="flex flex-col">
            <h2 className="text-cinzinha-100 ">Nome</h2>
            <h2 className="text-white font-bold">{ad.name}</h2>
          </div>

          <div className="flex flex-col">
            <h2 className="text-cinzinha-100 ">Tempo de Jogo</h2>
            <h2 className="text-white font-bold">{ad.yearsPlaying} anos</h2>
          </div>

          <div className="flex flex-col">
            <h2 className="text-cinzinha-100 ">Disponibilidade</h2>
            <h2 className="text-white font-bold">
              {ad.weekDays.length} dias{" "}
              <span className="text-cinzinha-200 text-lg">•</span>{" "}
              {ad.hourStart} - {ad.hourEnd}
            </h2>
          </div>

          <div className="flex flex-col">
            <h2 className="text-cinzinha-100 ">Chamada de Aúdio?</h2>
            <div className="text-white font-bold">
              {ad.useVoiceChannel ? (
                <h2 className="text-[#34D399]">
                  {ad.useVoiceChannel ? "SIM" : "NÃO"}
                </h2>
              ) : (
                <h2 className="text-[#F87171]">
                  {ad.useVoiceChannel ? "SIM" : "NÃO"}
                </h2>
              )}
            </div>
          </div>
          <Dialog.Trigger
            onClick={() => {
              setDiscord(ad.discord);
            }}
            className="p-3 bg-roxin-100 flex items-center justify-center rounded-xl gap-6 hover:bg-[#8b16f6] transition-all cursor-pointer  text-white font-bold"
          >
            <GameController size={32} /> Conectar
          </Dialog.Trigger>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
