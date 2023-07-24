/* eslint-disable react/prop-types */
export function Post(props){
    return <>
    <p><strong>{props.author}</strong></p>
    <p>{props.content}</p>
    </>
}

