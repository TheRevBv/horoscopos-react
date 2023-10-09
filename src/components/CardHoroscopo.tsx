import React from "react";
import { ISignosZodiaco } from "../models/ISignosZodiaco";

type HoroscopoProps = {
  horoscopo: ISignosZodiaco;
};

const CardHoroscopo: React.FC<HoroscopoProps> = ({ horoscopo }) => {
  return (
    <div className="card">
      <img
        className="w-32 h-32 rounded-full mx-auto mt-4"
        src={"assets/img" + horoscopo.imgPath}
        alt={horoscopo.nombre}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{horoscopo.nombre}</div>
        <p className="text-gray-200 text-base">{horoscopo.horoscopo}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Del {horoscopo.fechaInicio} al {horoscopo.fechaFin}
        </span>
      </div>
    </div>
  );
};

export default CardHoroscopo;
