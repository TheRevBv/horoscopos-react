/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface InputCalendarProps {
  handleDate: (date: string) => void;
}

const InputCalendar: React.FC<InputCalendarProps> = ({ handleDate }) => {
  const [fecha, setFecha] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setFecha(newDate);
    handleDate(newDate); // Llamar a la función del padre con la nueva fecha
  };

  return (
    <>
      <input
        type="date"
        className="border-2 border-gray-300 rounded-md p-2 m-2"
        onChange={handleChange}
      />
    </>
  );
};

export default InputCalendar;

/* const zodiacSigns: IZodiacSign[] = [
  {
    nombre: "Aries",
    fechaInicio: "03-21",
    fechaFin: "04-19",
    imgPath: "/aries.png",
  },
  {
    nombre: "Tauro",
    fechaInicio: "04-20",
    fechaFin: "05-20",
    imgPath: "/tauro.png",
  },
  {
    nombre: "Geminis",
    fechaInicio: "05-21",
    fechaFin: "06-20",
    imgPath: "/geminis.png",
  },
  {
    nombre: "Cancer",
    fechaInicio: "06-21",
    fechaFin: "07-22",
    imgPath: "/cancer.png",
  },
  {
    nombre: "Leo",
    fechaInicio: "07-23",
    fechaFin: "08-22",
    imgPath: "/leo.png",
  },
  {
    nombre: "Virgo",
    fechaInicio: "08-23",
    fechaFin: "09-22",
    imgPath: "/virgo.png",
  },
  {
    nombre: "Libra",
    fechaInicio: "09-23",
    fechaFin: "10-22",
    imgPath: "/libra.png",
  },
  {
    nombre: "Escorpio",
    fechaInicio: "10-23",
    fechaFin: "11-21",
    imgPath: "/escorpio.png",
  },
  {
    nombre: "Sagitario",
    fechaInicio: "11-22",
    fechaFin: "12-21",
    imgPath: "/sagitario.png",
  },
  {
    nombre: "Capricornio",
    fechaInicio: "12-22",
    fechaFin: "01-19",
    imgPath: "/capricornio.png",
  },
  {
    nombre: "Acuario",
    fechaInicio: "01-20",
    fechaFin: "02-18",
    imgPath: "/acuario.png",
  },
  {
    nombre: "Piscis",
    fechaInicio: "02-19",
    fechaFin: "03-20",
    imgPath: "/piscis.png",
  },
];

const getZodiacSign = (date: string) => {
  const [, month, day] = date.split("-").map(Number);
  const zodiacSign = zodiacSigns.find(
    (sign) =>
      (month === Number(sign.fechaInicio.split("-")[0]) &&
        day >= Number(sign.fechaInicio.split("-")[1])) ||
      (month === Number(sign.fechaFin.split("-")[0]) &&
        day <= Number(sign.fechaFin.split("-")[1]))
  );
  return zodiacSign?.nombre;
}; */
