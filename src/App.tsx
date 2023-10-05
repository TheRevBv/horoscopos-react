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
  const uri: string = "http://127.0.0.1:5173/api/horoscopos.json";

  const getSignosZodiaco = async (): Promise<ISignosZodiaco[]> => {
    const resp = await fetch(uri);
    const data = await resp.json();
    return data;
  };

  useEffect(
    () => {
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
