/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, ChangeEvent, FC } from "react";

interface InputCalendarProps {
  handleDate: (date: string) => void;
}

const InputCalendar: FC<InputCalendarProps> = ({ handleDate }) => {
  const [fecha, setFecha] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFecha(e.target.value);
  };

  useEffect(() => {
    handleDate(fecha);
  }, [fecha, handleDate]);

  return (
    <>
      <input
        type="date"
        className="border-2 border-gray-300 rounded-md p-2 m-2"
        onChange={handleChange}
      />
      {/* {fecha && <p className="text-center">Fecha: {fecha}</p>} */}
    </>
  );
};

export default InputCalendar;
