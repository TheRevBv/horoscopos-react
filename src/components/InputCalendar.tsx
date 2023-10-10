import "../assets/css/InputCalendar.css";
import { FC } from "react";

const InputCalendar: FC<{
  value: string;
  onChange: (date: string) => void;
}> = ({ value, onChange }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-2 border-gray-300 rounded-md px-4 py-2 w-64"
        />
      </div>
    </>
  );
};

export default InputCalendar;
