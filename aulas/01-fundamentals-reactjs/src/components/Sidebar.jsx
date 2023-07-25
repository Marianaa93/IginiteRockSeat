import styles from './Sidebar.module.css';
import {PencilLine} from "@phosphor-icons/react";
import { Avatar } from './Avatar';
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://media.istockphoto.com/id/1476163133/pt/foto/3d-chat-icons-on-speech-bubbles-in-cartoon-style-the-concept-of-communication-in-social.jpg?s=1024x1024&w=is&k=20&c=wqeCZXIj7bcEuXuk4s3asYyktIlhFTVgTc5BiLCjJzE='/>
            <div className={styles.profile}>
                <Avatar src="https://github.com/Marianaa93.png"/>
                <strong>Mariana</strong>
                <span>Web developer</span>
            </div>
            <footer>
                <a href='#'><PencilLine size={20}/>Editar seu perfil</a>
            </footer>
        </aside>
    )
}