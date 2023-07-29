import style from './Input.module.css';

export function Input({handleInput, valueFromInput}){

    return(
        <input className={style.input}
        onChange={handleInput}
        value={valueFromInput}
        placeholder='Adicione uma nova tarefa'
        type='text'
        required
      />
    )
}