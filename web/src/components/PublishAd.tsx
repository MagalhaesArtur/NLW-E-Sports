import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { SetStateAction } from "react";

function PublishAd(props: any) {
  return (
    <div className="bg-gradient w-full flex flex-col md:flex-row  pt-1 rounded-lg  mt-8">
      <div className="bg-[#2A2634] w-full flex flex-col md:flex-row  justify-between items-center rounded-md h-[100%]   px-8 py-6">
        <div className="flex md:gap-3 gap-8 flex-col">
          <strong className="text-white text-4xl font-bold">
            Não encontrou seu duo?
          </strong>
          <span className="text-xl text-gray-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Dialog.Trigger className="py-3 px-4 bg-violet-500 mt-8 md:mt-0 hover:bg-violet-600 transition-all flex items-center gap-3 text-white text-xl rounded-lg font-bold">
          <MagnifyingGlassPlus size={30} />
          Publicar Anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}

export default PublishAd;
