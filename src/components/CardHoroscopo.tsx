import React from "react";
import { ISignosZodiaco } from "../models/ISignosZodiaco";

type HoroscopoProps = {
  horoscopo: ISignosZodiaco;
};

const CardHoroscopo: React.FC<HoroscopoProps> = ({ horoscopo }) => {
  return (
    <div>
      <img src={"assets/img/" + horoscopo?.imgPath} alt="Horoscopo" />
      <p>{horoscopo?.nombre}</p>
    </div>
  );
};

export default CardHoroscopo;
