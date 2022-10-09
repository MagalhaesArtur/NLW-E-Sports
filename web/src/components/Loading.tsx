import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="w-6 h-6 flex items-center justify-center">
      <CircleNotch size={50} weight="bold" className=" animate-spin" />
    </div>
  );
}
