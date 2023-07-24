import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://media.istockphoto.com/id/1389898237/pt/foto/cute-girl-iconic-character-with-glasses-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=fFtPmYkfIoqvwz3bWz_86a9LjZSXOGV0F-8CP0UPAqA='/>
            <div className={styles.profile}>
                <strong>Mariana</strong>
                <span>Web developer</span>
            </div>
            <footer>
                <a href='#'>Editar seu perfil</a>
            </footer>
        </aside>
    )
}