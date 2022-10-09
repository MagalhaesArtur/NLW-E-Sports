import express, { request } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors());
app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.json([games]);
});

app.post("/ads", async (req, res) => {
  let {
    name,
    yearsPlaying,

    discord,
    weekDays,
    hourStart,
    hourEnd,
    useVoiceChannel,

    gameId,
  } = req.body;

  const hoursToMinutes = (n: string) => {
    const [hours, minutes] = n.split(":").map(Number);
    const total = hours * 60 + minutes;

    return total;
  };

  hourStart = hoursToMinutes(hourStart);
  hourEnd = hoursToMinutes(hourEnd);

  const register: any = await prisma.ad.create({
    data: {
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel,
      gameId,
    },
  });

  return res.status(201).json(register);
});

app.get("/games/:id/ads", async (req, res) => {
  const gameId: any = req.params.id;

  const minutesToHours = (n: number) => {
    let horas = 0;
    let horasString,
      minutosString = "";

    while (n >= 60) {
      n -= 60;
      horas++;
    }

    horasString = horas.toString();
    minutosString = n.toString();

    if (minutosString == "0") {
      minutosString = "00";
    }

    if (Number(minutosString) < 10 && Number(minutosString) > 0) {
      minutosString = `0${minutosString}`;
    }

    return horasString + ":" + minutosString;
  };

  const ads = await prisma.ad.findMany({
    where: { gameId: gameId },
    select: {
      id: true,
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hourEnd: true,
      hourStart: true,
      discord: true,

      useVoiceChannel: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return res.json(
    ads.map((ad: any) => {
      return {
        id: ad.id,
        name: ad.name,
        yearsPlaying: ad.yearsPlaying,
        weekDays: ad.weekDays.split(","),
        hourEnd: minutesToHours(ad.hourEnd),
        hourStart: minutesToHours(ad.hourStart),
        discord: ad.discord,
        useVoiceChannel: ad.useVoiceChannel,
      };
    })
  );
});

app.get("/ads/:id/discord", async (req, res) => {
  const adId = req.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    where: { id: adId },
    select: {
      discord: true,
    },
  });
  return res.json(ad);
});

app.listen(process.env.PORT || 4444, () => {
  console.log("rodando na porta 4444");
});
