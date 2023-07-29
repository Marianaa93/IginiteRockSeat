import "../global.css";
import { PlusCircle, Trash } from "@phosphor-icons/react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./Input";
import { Tarefa } from "./components/Tarefa";
import { SetStateAction, useState } from "react";
import { EmptyList } from "./components/EmptyList";

function App() {

  const[addtask, setAddTask]=useState([]);
  const [valueFromInput, setValueFromInput]= useState([]);

  function addNewTask(event: { preventDefault: () => void; }){
    event?.preventDefault();
    setAddTask([...addtask, valueFromInput])
    
  }

  function handleInput(event: { target: { value: SetStateAction<string>; }; }){
    event.target.setCustomValidity('');
    setValueFromInput(event.target.value);
      
  }

  function deletTask(taskToDelete){
    const taskWithoutDeletedOne= addtask.filter((task)=>{
      return task !== taskToDelete;
    });
    setAddTask(taskWithoutDeletedOne)
  }
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={addNewTask} className={styles.inputContainer}>
          <Input value={valueFromInput} handleInput={handleInput}/>
          <button>
            Criar <PlusCircle size={18} />
          </button>
        </form>
        <div className={styles.displayTarefasContainer}>
          <div className={styles.statistics}>
            <div className={styles.tarefasConcluidas}>
              Tarefas criadas <span>{addtask.length}</span>
            </div>
            <div className={styles.tarefasCriadas}>
              Concluídas <span> 2 de {addtask.length}</span>
            </div>
          </div>
          {(addtask.length=== 0)? <EmptyList/> : (<div className={styles.tarefas}>
            {addtask.map((task,id) =>{
              return (
                <Tarefa key={id} content={task} onDeleteTask={deletTask} id={id} />              )
            })}
          </div>)}
          
        </div>
      </div>
    </div>
  );
}

export default App;
