import * as Dialog from "@radix-ui/react-dialog";
import { Check, GameController, CaretDown } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SetStateAction, useEffect, useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { styled } from "@stitches/react";
import { createAd } from "../utils/api";
import { Loading } from "./Loading";

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 8,
  padding: "16px 12px",
  fontSize: 14,
  lineHeight: 1,

  gap: 5,
  backgroundColor: "#18181b",
  color: "White",

  "&:hover": { backgroundColor: "RGBA(24,24,27,0.69)" },
  "&:focus": { boxShadow: `0 0 0 2px black` },
  "&[data-placeholder]": { color: "#71717F" },
});

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: "red",
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: "RGBA(24,24,27)",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 8,
});

const StyledItem = styled(SelectPrimitive.Item, {
  all: "unset",
  fontSize: 14,
  lineHeight: 1,
  color: "white",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "8px 35px 8px 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: "White",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "RGBA(139,92,246,0.5)",
    color: "White",
  },
});

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: "0 25px",
  fontSize: 12,
  lineHeight: "25px",
  color: "White",
});

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: "Violet",
  margin: 5,
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "RGBA(24,24,27,0.50)",
  color: "White",
  cursor: "default",
};

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
);

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
);

function Content({ children, ...props }: any) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  );
}

export const Select = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = StyledIcon;
export const SelectContent = Content;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;

function CreateAd(props: any) {
  let [games, setGames] = useState<GameProps[]>([]);
  let [weekDays, setWeekDays] = useState<string[]>([]);
  let [gameId, setGameIdForm] = useState("");
  let [name, setNick] = useState("");
  let [yearsPlaying, setYearsPlayed] = useState(Number);
  let [discord, setDiscord] = useState("");
  let [hourStart, setHourStart] = useState("");
  let [hourEnd, setHourEnd] = useState("");
  let [useVoiceChannel, setUseVoiceChannel] =
    useState<Checkbox.CheckedState>(false);

  const [loading, setLoading] = useState(false);

  interface GameProps {
    id: string;
    title: string;
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/games`).then((res) => {
      res.json().then((data) => {
        setGames(data[0]);
      });
    });
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        setLoading(true);
        let weekDays1 = weekDays.toString();
        e.preventDefault();
        await createAd({
          gameId,
          name,
          yearsPlaying,
          discord,
          weekDays: weekDays1,
          hourStart,
          hourEnd,
          useVoiceChannel,
        });
        setGames([]);
        setWeekDays([]);
        setGameIdForm("");
        setNick("");
        setYearsPlayed(0);
        setDiscord("");
        setHourStart("");
        setHourEnd("");
        setUseVoiceChannel(false);
        setLoading(false);
        props.setOpen(false);
        setTimeout(() => {
          alert("Anúncio Criado com Sucesso!");
        }, 500);
      }}
    >
      <div className="flex flex-col   mb-4 mt-4">
        <label htmlFor="game" className="font-semibold mb-2">
          Qual o Game?
        </label>
        <Select onValueChange={setGameIdForm} name="gameId">
          <SelectTrigger aria-label="Food">
            <SelectValue placeholder="Selecione um Jogo..." />
            <SelectIcon>
              <CaretDown weight="bold" className="text-white" />
            </SelectIcon>
          </SelectTrigger>
          <SelectContent>
            <SelectScrollUpButton>
              <CaretDown />
            </SelectScrollUpButton>
            <SelectViewport>
              {games.map((game) => (
                <SelectItem key={game.id} value={game.id}>
                  <SelectItemText>{game.title}</SelectItemText>
                  <SelectItemIndicator>
                    <Check />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectViewport>
            <SelectScrollDownButton>
              <CaretDown />
            </SelectScrollDownButton>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="nick" className="font-semibold mb-2">
          Seu nome (ou nickname)
        </label>
        <input
          name="nick"
          className="bg-zinc-900 py-3 px-4 placeholder:text-zinc-500 text-[14px] rounded-lg"
          id="nick"
          value={name}
          onChange={(e) => {
            setNick(e.target.value);
          }}
          placeholder="Como te chamam dentro do game?"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col mb-4 w-[50%]">
          <label htmlFor="yearsPlayed" className="font-semibold mb-2">
            Joga há quantos anos?
          </label>
          <input
            name="yearsPlayed"
            className="bg-zinc-900 py-3 px-4 placeholder:text-zinc-500 text-[14px] rounded-lg"
            id="yearsPlayed"
            min={0}
            max={15}
            type="number"
            value={yearsPlaying}
            onChange={(e) => {
              setYearsPlayed(Number(e.target.value));
            }}
            placeholder="Tudo bem ser ZERO"
          />
        </div>

        <div className="flex flex-col w-[50%]">
          <label htmlFor="discord" className="font-semibold mb-2">
            Qual seu Discord?
          </label>
          <input
            name="discord"
            value={discord}
            onChange={(e) => {
              setDiscord(e.target.value);
            }}
            id="discord"
            className="bg-zinc-900 py-3 px-4 placeholder:text-zinc-500 text-[14px] rounded-lg"
            placeholder="Usuario#0000"
          />
        </div>
      </div>

      <div className="flex gap-6 mb-4">
        <div className="w-[55%]">
          <label htmlFor="weekDays" className="font-semibold block">
            Quando costuma jogar?
          </label>
          <div className=" flex gap-1 mt-3">
            <ToggleGroup.Root
              type="multiple"
              className="flex gap-1"
              value={weekDays}
              onValueChange={setWeekDays}
            >
              <ToggleGroup.Item
                value="0"
                className={`w-9 rounded-sm  h-12 ${
                  weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
                }`}
                title="Domingo"
              >
                D
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="1"
                className={`w-9 rounded-sm  h-12 ${
                  weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
                }`}
                title="Segunda"
              >
                S
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="2"
                className={`w-9 rounded-sm  h-12 ${
                  weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
                }`}
                title="Terça"
              >
                T
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="3"
                className={`w-9 rounded-sm  h-12 ${
                  weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
                }`}
                title="Quarta"
              >
                Q
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="4"
                className={`w-9 rounded-sm  h-12 ${
                  weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
                }`}
                title="Quinta"
              >
                Q
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="5"
                className={`w-9 rounded-sm  h-12 ${
                  weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
                }`}
                title="Sexta"
              >
                S
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="6"
                className={`w-9 rounded-sm  h-12 ${
                  weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
                }`}
                title="Sábado"
              >
                S
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>
        </div>
        <div className="flex-flex-col w-[45%] ">
          <label htmlFor="hoursStart-End" className="font-semibold  ">
            Qual horário do dia?
          </label>
          <div className="flex gap-4 mt-3">
            <input
              value={hourStart}
              onChange={(e) => {
                setHourStart(e.target.value);
              }}
              type="time"
              placeholder="De"
              className="bg-zinc-900 py-3 px-4 placeholder:text-zinc-500 text-[14px] rounded-lg"
            />

            <input
              type="time"
              value={hourEnd}
              onChange={(e) => {
                setHourEnd(e.target.value);
              }}
              placeholder="Até"
              className="bg-zinc-900 py-3 px-4 placeholder:text-zinc-500 text-[14px] rounded-lg "
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2  items-center">
        <Checkbox.Root
          id="check"
          onCheckedChange={setUseVoiceChannel}
          checked={useVoiceChannel}
          className="w-6 h-6 rounded bg-zinc-900"
        >
          <Checkbox.Indicator>
            <Check size={24} className="text-green-500" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="hover:cursor-pointer " htmlFor="check">
          Costumo me conectar ao chat de voz
        </label>
      </div>
      <footer className="flex justify-end gap-6 mt-4">
        <Dialog.Close
          type="button"
          className="bg-zinc-400 rounded-lg p-4 hover:bg-zinc-600 font-semibold transition-all"
        >
          Cancelar
        </Dialog.Close>

        <button type="submit">
          {loading ? (
            <div className="bg-violet-500 w-56 justify-center gap-2 flex rounded-lg p-4 transition-all items-center font-semibold hover:bg-violet-700">
              <Loading />
            </div>
          ) : (
            <div className="bg-violet-500 w-56 justify-center gap-2 flex rounded-lg p-4 transition-all items-center font-semibold hover:bg-violet-700">
              <GameController size={32} /> <span>Encontrar Duo</span>
            </div>
          )}
        </button>
      </footer>
    </form>
  );
}

export default CreateAd;
