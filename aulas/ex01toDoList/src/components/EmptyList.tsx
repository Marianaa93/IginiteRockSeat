import style from './EmptyList.module.css';
import { Clipboard, ClipboardText } from "@phosphor-icons/react"

export function EmptyList(){
    return ( <div className={style.container}>
        <ClipboardText className={style.svg} size={56}/>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
    </div>)
}