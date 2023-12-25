import Image from "next/image"
import logo from "../../public/fblogo.png"

export default function Navbar1 (){
    return(
        <div className="flex bg-gray-300 mx-2 my-4 px-10 py-4 justify-between items-center">
        
        {/* Logo */}

        <Image className = 'w-16' src={logo} w- alt = 'facebook logo'/>
        
        <ul className="flex gap-x-4 bg-orange-300 text-xl">

        {/* button */}
        <li>Home</li>
        <li>flex</li>
        <li>styling</li>
        <li>profile</li>

        </ul>

        </div>
    )
}