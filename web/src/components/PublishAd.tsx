import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { SetStateAction } from "react";

function PublishAd(props: any) {
  return (
    <div className="bg-gradient w-full pt-1 rounded-lg  mt-8">
      <div className="bg-[#2A2634] w-full flex justify-between items-center rounded-md h-[100%]   px-8 py-6">
        <div className="flex gap-3 flex-col">
          <strong className="text-white text-4xl font-bold">
            Não encontrou seu duo?
          </strong>
          <span className="text-xl text-gray-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-all flex items-center gap-3 text-white text-xl rounded-lg font-bold">
          <MagnifyingGlassPlus size={30} />
          Publicar Anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}

export default PublishAd;
