interface GameProps {
  src: string;
  name: string;
  anuncios: number;
  gameId: string;
}

import { useNavigate } from "react-router-dom";

function Game(props: GameProps) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        // GameAds.tsx
        navigate(`/game/${props.name}`, {
          state: {
            src: props.src,
            name: props.name,
            anuncios: props.anuncios,
            gameId: props.gameId,
          },
        });
      }}
      className="relative overflow-hidden rounded-lg hover:cursor-pointer"
    >
      <img src={props.src} className="w-full h-[270px]" alt="" />

      <div className="w-full pt-16 pl-4 pr-13 pb-4 bg-gradient2 absolute rounded-b-sm bottom-0 left-0 right-0">
        <strong className="text-white font-bold text-base">{props.name}</strong>
        <span className=" block text-sm text-slate-300">
          {props.anuncios} anúncios
        </span>
      </div>
    </div>
  );
}

export default Game;

// `/games/${props.name}`
