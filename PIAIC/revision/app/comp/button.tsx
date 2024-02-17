"use client"

const button = () => {
    alert("Clicked")
}

export default function Button (){
    return(
        <button onClick={button}>Clickme</button>
    )
}