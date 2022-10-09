import { CheckCircle, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function DuoMatch({ discord }: any) {
  return (
    <div className="flex flex-col  justify-center items-center">
      <Dialog.DialogTrigger className="absolute right-4 top-4">
        <X size={32} />
      </Dialog.DialogTrigger>
      <CheckCircle color="#34D399" weight="bold" size={70} />
      <h1 className="text-white font-bold text-2xl mt-4">Let's Play </h1>
      <span className="text-[#A1A1AA]  text-lg mt-1">
        Agora é só começar a jogar!
      </span>

      <span className="text-white font-bold text-lgl mt-4">
        Adicione no Discord
      </span>

      <div className="py-4 px-2 bg-[#18181B] flex justify-center items-center mt-4 rounded-lg w-[50%]">
        {discord}
      </div>
    </div>
  );
}
