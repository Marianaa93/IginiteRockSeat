import style from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src="https://github.com/Marianaa93.png" />
          <div className={style.authorInfo}>
            <strong>Mariana Lima</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title='24 de Julho às 15:46'
          dateTime='2023-07-24 15:46'
        >
          Publicado há 1 hora{" "}
        </time>
      </header>
      <div className={style.content}>
        <p>Fala galeraa </p>
        <p>
          👋 Acabei de subir mais um projeto no meu portifa. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>

        <p>
          👉 <a href='#'>jane.design/doctorcare</a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a>
          <a href='#'> #nlw </a>
          <a href='#'>#rocketseat</a>
        </p>
      </div>
      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário'></textarea>
        <footer>
          {" "}
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
