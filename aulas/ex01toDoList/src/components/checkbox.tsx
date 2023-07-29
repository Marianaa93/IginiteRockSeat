import { useState } from "react";
import style from "./checkbox.module.css";
import { CheckCircle, Circle } from "@phosphor-icons/react";

export function Checkbox({ description, id }) {
  const [checked, setChecked] = useState(true);
  

  function onChange() {
    setChecked(!checked);
  }
  return (
    <div className={style.label} >
      <button
        
        className={style.checkBox}
        onClick={onChange}
      >
        {checked ? (
          <Circle
            className={style.toCheckButton}
            size={23}
          />
        ) : (
          <CheckCircle
            className={style.checkedButton}
            size={23}
          />
        )}
      </button>

        <p key={id} className={checked ? style.paragraph : style.paragraphChecked}>
          {description}
        </p>
    
  </div>
  );
}
