const profile = (props:any) => {
 console.log(props)
    return(
        <h1>{props.params.name}'s Profile</h1>
    )
}

export default profile