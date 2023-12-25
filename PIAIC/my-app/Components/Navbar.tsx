import Link from "next/link";

export default function Navbar (/*props:any*/) {
    // console.log(props)
    return(
        <div>
            {/* <h1>{props.pageName}</h1> */}
            <Link href= '/'>Home</Link>
            <Link href= '/about'>About</Link>
            <Link href= '/contact'>Contact</Link>
        </div>
    )
}