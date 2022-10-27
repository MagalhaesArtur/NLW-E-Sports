import "../styles/main.css";
import logo from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import Game from "./Game";
import { useEffect, useState } from "react";
import PublishAd from "./PublishAd";
import CreateAd from "./CreateAd";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { Loading } from "./Loading";

export interface GameProps {
  banner: string;
  id: string;
  title: string;
  _count: {
    ads: number;
  };
}

function Home() {
  const [games, setGames] = useState([]);
  const [open1, setOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4444/games").then((res) => {
      res.json().then((data) => {
        setGames(data[0]);
      });
    });
  }, []);

  function setThisFalse() {
    setOpen(false);
  }

  return (
    <div className="max-w-[1344px] mx-auto flex justify-center flex-col items-center my-20">
      <div className="w-[286px] h-[160px]">
        {" "}
        <img src={logo} alt="" className="text-center" />
      </div>

      <h1 className="text-[64px] mt-20 text-white font-black">
        Seu{" "}
        <span className="bg-gradient bg-clip-text text-transparent">duo</span>{" "}
        está aqui.
      </h1>

      {!(games.length == 0) ? (
        <Swiper
          spaceBetween={60}
          modules={[Navigation]}
          slidesPerView={5}
          className="grid grid-cols-6 gap-6 mt-16  !z-0 !px-[50px]"
          navigation={true}
        >
          {games.map((game: GameProps) => (
            <SwiperSlide className="relative rounded-lg   hover:cursor-pointer">
              <Game
                key={game.id}
                gameId={game.id}
                name={game.title}
                anuncios={game._count.ads}
                src={game.banner}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="h-[267px] flex justify-center items-center rounded-lg ">
          <Loading />
        </div>
      )}

      <Dialog.Root open={open1} onOpenChange={setOpen}>
        <PublishAd setOpen={setOpen} />

        <Dialog.Portal>
          <Dialog.Overlay
            onClick={() => {
              setThisFalse();
            }}
            className="bg-black/60 inset-0 fixed"
          />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white rounded-lg w-[600px] shadow-lg shadow-black/40">
            <Dialog.Title className="text-3xl  font-black">
              Publique um anúncio
            </Dialog.Title>

            <CreateAd setOpen={setOpen} />
            <Dialog.Description />
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default Home;
