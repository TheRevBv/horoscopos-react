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
    handleDate(fecha); // Llamar a la función del padre con la nueva fecha
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
