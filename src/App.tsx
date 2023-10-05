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
  const [signosZodiaco, setSignosZodiaco] = useState<ISignosZodiaco[]>([]);
  const uri: string = import.meta.env.VITE_API_URI!;

  const headers = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  const getSignosZodiaco = async (): Promise<ISignosZodiaco[]> => {
    const response = await fetch(uri, {
      method: "GET",
      headers,
    });
    const data = await response.json();
    return data;
  };

  const getZodiacSign = async (): Promise<void> => {
    const [, month, day] = fecha.split("-").map((item) => parseInt(item));
    const zodiacSign = signosZodiaco.find((signo) => {
      const [monthStart, dayStart] = signo.fechaInicio
        .split("-")
        .map((item) => parseInt(item));
      const [monthEnd, dayEnd] = signo.fechaFin
        .split("-")
        .map((item) => parseInt(item));
      return (
        (month === monthStart && day >= dayStart) ||
        (month === monthEnd && day <= dayEnd)
      );
    });
    setHoroscopo(zodiacSign);
  };

  useEffect(() => {
    setTimeout(() => {
      getSignosZodiaco()
        .then((data) => {
          setSignosZodiaco(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
    if (fecha) {
      getZodiacSign();
    }
  });

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
