import { useEffect, useState } from "react";

export const ControlSelect = (props) => {
  const [style, setStyle] = useState("form-select");
  const { name, value, options } = props;
  const { isInvalid, onChange, onBlur } = props;

  useEffect(() => {
    setStyle(isInvalid ? "form-select is-invalid" : "form-select");
  }, [isInvalid]);

  return (
    <select name={name} className={style} value={value} onChange={onChange} onBlur={onBlur}>
      <option value="">Abrir este menú de selección</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
};