/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({content, onDeleteComment}) {
  const[like,setLike]=useState(0)

  function handleCommentDelete(){
    onDeleteComment(content);
  }

  function handleLikeCount(){
    setLike((mostRecentCountValue)=>{
      return mostRecentCountValue +1
    })
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={'https://github.com/Marianaa93.png'}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mariana Lima</strong>
              <time
                title='24 de Julho às 15:46'
                dateTime='2023-07-24 15:46'
              >
                Cerca de 1h atrás{" "}
              </time>
            </div>
            <button onClick={handleCommentDelete} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
