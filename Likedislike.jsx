import { useState } from "react";

function Likedislike(){
    let style1={backgroundColor:'white', border:'1px solid lightgray', fontSize:'50px',borderRadius:'6px',margin:'5px'}
    var [likes,setLikes]=useState(0);
    var [dislikes,setDislikes]=useState(0);
    function likesCount(){
        setLikes(likes+1)
    }
    function dislikesCount(){
        setDislikes(dislikes+1)
    }
    return(
        <>
            <button style={{...style1}} onClick={()=>{likesCount()}}>👍🏻</button>
            <button style={{...style1}} onClick={()=>{dislikesCount()}}>👎🏻</button>
            <br />
            <h2>Likes:{likes}</h2>
            <h2>Disikes:{dislikes}</h2>
        </>
    );
}
export default Likedislike;