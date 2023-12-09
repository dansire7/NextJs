import Link from "next/link"
import Image from "next/image"
import logo from '../public/logo.jpeg'

export default function Navbar  (){
    return (
        <div className="flex justify-between items-center bg-gray-100 mx-10 my-4">

        <Image className = 'w-10' src={logo} alt='logo' />

        <ul className="text-lg flex gap-4">
          <li><Link href = "/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/lesson1">Lesson1</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/flex">Flex</Link></li>
        </ul>
        </div>
    )
} 