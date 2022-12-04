import "../styles/main.css";
import logo from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import Game from "./Game";
import { useEffect, useState } from "react";
import PublishAd from "./PublishAd";
import CreateAd from "./CreateAd";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
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
    <div className=" md:max-w-[1344px] mx-auto flex justify-center flex-col items-center my-20">
      <div className="md:w-[286px] w-[200px] md:h-[160px]">
        {" "}
        <img src={logo} alt="" className="text-center" />
      </div>

      <h1 className="md:text-[64px] text-3xl mt-20 text-white font-black">
        Seu{" "}
        <span className="bg-gradient bg-clip-text text-transparent">duo</span>{" "}
        está aqui.
      </h1>

      {!(games.length == 0) ? (
        <Swiper
          spaceBetween={60}
          modules={
            window.innerWidth <= 768
              ? [Navigation, Mousewheel, Pagination]
              : [Navigation]
          }
          direction={window.innerWidth < 768 ? "vertical" : "horizontal"}
          slidesPerView={
            window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 3 : 5
          }
          className="md:grid md:grid-cols-6 md:gap-6 md:mt-16 max-h-96 mt-10  md:max-h-[500px] !z-0 !px-[50px]"
          navigation={window.innerWidth < 768 ? false : true}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
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
        <div className="h-[300px] flex justify-center items-center rounded-lg ">
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
