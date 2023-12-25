const Clickme = () => {
    alert ('Clicked')
}

const Clickbutton = () => {
    return(
        <button onClick={Clickme}>Click Me</button>
    )
}

export default Clickbutton