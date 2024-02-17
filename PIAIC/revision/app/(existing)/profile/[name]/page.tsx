export default function profile (props:any){
    console.log(props)
    return(
        <h1>
            This is {props.params.name}'s profile
        </h1>
    )
}