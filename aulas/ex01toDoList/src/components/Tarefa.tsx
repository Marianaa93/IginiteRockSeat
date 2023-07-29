import { Trash } from "@phosphor-icons/react";
import style from "./Tarefa.module.css";
import { Checkbox } from "./checkbox";

export function Tarefa({ content, id, onDeleteTask}) {

    function handleDeleteTask(){
        onDeleteTask(content);
      }
  return (
    <div
      className={style.tarefaContainer}
      key={id}
    >
      <Checkbox description={content} key={id} id={id} />

      <button onClick={handleDeleteTask} className={style.button}><Trash
        
        size={24}
      /></button>
    </div>
  );
}
