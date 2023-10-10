/* eslint-disable @typescript-eslint/no-unused-vars */
import "./assets/css/App.css";
import data from "./api/horoscopos.json";
import { ISignosZodiaco } from "./models/ISignosZodiaco";

import { useState, useEffect } from "react";

//My components
// import CardHoroscopo from "./components/CardHoroscopo";
import InputCalendar from "./components/InputCalendar";
import Header from "./components/Header";
import CardHoroscopo from "./components/CardHoroscopo";

const App = () => {
  const [horoscopo, setHoroscopo] = useState<ISignosZodiaco>();
  const [fecha, setFecha] = useState<string>("");
  const horoscopos: ISignosZodiaco[] = data;

  const getHoroscopo = () => {
    // console.log(fecha);
    const [, month, day] = fecha.split("-").map((item) => parseInt(item));
    const horosc = horoscopos.find((item) => {
      const [mesIni, diaIni] = item.fechaInicio
        .split("-")
        .map((item) => parseInt(item));
      const [mesFin, diaFin] = item.fechaFin
        .split("-")
        .map((item) => parseInt(item));

      if (month === mesIni && day >= diaIni) return true;
      if (month === mesFin && day <= diaFin) return true;
      return false;
    });
    setHoroscopo(horosc);
    // console.log(horoscopo);
  };

  useEffect(() => {
    getHoroscopo();
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <Header />
        <InputCalendar
          value={fecha}
          onChange={(date) => {
            setFecha(date);
          }}
        />
        {horoscopo && <CardHoroscopo horoscopo={horoscopo} />}
      </div>
    </>
  );
};

export default App;
