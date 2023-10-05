/* eslint-disable @typescript-eslint/no-unused-vars */
import "./assets/css/App.css";

import { useEffect, useState } from "react";

//My components
import { ISignosZodiaco } from "./models/ISignosZodiaco";
import CardHoroscopo from "./components/CardHoroscopo";
import InputCalendar from "./components/InputCalendar";

const App = () => {
  // const [horoscopo, setHoroscopo] = useState<ISignosZodiaco>();
  const [fecha, setFecha] = useState<string>("");
  const [horoscopo, setHoroscopo] = useState<ISignosZodiaco>();
  const uri: string = import.meta.env.VITE_API_URI!;

  const headers = new Headers();

  const getSignosZodiaco = async (): Promise<ISignosZodiaco[]> => {
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    const resp = await fetch(uri, {
      method: "GET",
      headers: headers,
    });
    const data = await resp.json();
    return data;
  };

  useEffect(
    () => {
      console.log(uri);
      // Load environment variables from .env
      if (fecha) {
        getZodiacSign();
      }
    }
    // [fecha]
  );

  const getZodiacSign = async () => {
    const [, month, day] = fecha.split("-").map(Number);
    const zodiacSign = await getSignosZodiaco().then((data) =>
      data.find(
        (sign: ISignosZodiaco) =>
          (month === Number(sign.fechaInicio.split("-")[0]) &&
            day >= Number(sign.fechaInicio.split("-")[1])) ||
          (month === Number(sign.fechaFin.split("-")[0]) &&
            day <= Number(sign.fechaFin.split("-")[1]))
      )
    );
    setHoroscopo(zodiacSign!);
    // return zodiacSign;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="h1">Horoscopos React</h1>
        <InputCalendar handleDate={setFecha} />
        {horoscopo && <CardHoroscopo horoscopo={horoscopo} />}
      </div>
    </>
  );
};

export default App;
