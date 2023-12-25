import Image from "next/image"


export default function New1  (){
    return(
        <div className="mb-40">
            <Image src= '/background.jpg'
             alt="journey"
             width={500}
             height={500}
             className="w-full h-96"
             />

            <h1 className="font-bold text-2xl text-red-500 mt-4 mx-4">
            New1
            </h1>
            <p className="mt-4 mx-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos placeat atque architecto nihil dicta consectetur quibusdam reiciendis minima, repellendus temporibus obcaecati ad earum id molestias libero laboriosam maxime! Ea.
            </p>
            <button className="bg-red-600 text-white mx-4 mt-2 px-4 py-2">Click me </button>
        </div>
    )
}




