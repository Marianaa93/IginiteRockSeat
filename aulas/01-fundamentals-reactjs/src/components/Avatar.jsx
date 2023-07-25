/* eslint-disable react/prop-types */
import style from './Avatar.module.css';
export function Avatar({hasBorder=true, src={src}}){
    return(
        <img className={hasBorder? style.avatarWithBorder : style.avatar} src={src} alt="" />

    )
}