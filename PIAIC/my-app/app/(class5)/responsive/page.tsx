import Image from "next/image";

const menu = [
  {
    title: "Biryan",
    description: "Mazedar Beef Biryani with chatpata Masala",
    price: "Rs. 500",
    colddrink: true,
    Image: "/biryani.jpeg",
  },
  {
    title: "Tikka",
    description: "Mazedar Chicken Tikka with chatpata Masala",
    price: "Rs. 800",
    colddrink: true,
    Image: "/tikka.jpg",
  },
  {
    title: "Karhai",
    description: "Mazedar Mutton Karhai with chatpata Masala",
    price: "Rs. 2,000",
    colddrink: false,
    Image: "/karhai.jpeg",
  },
  {
    title: "Fish Fry",
    description: "Mazedar Fish Fry with chatpata Masala",
    price: "Rs. 1500",
    colddrink: true,
    Image: "/fish.jpg",
  },
  {
    title: "BBQ-Lamb",
    description: "Mazedar BBQ-Lamb with chatpata Masala",
    price: "Rs. 2500",
    colddrink: true,
    Image: "/lamb.jpg",
  },
];

export default function new4() {
  return (
    <div className="flex bg-gray-100 justify-center gap-10">
      <div className="w-[90%] grid bg-gray-200 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {menu.map((item) => {
          return (
            <div className="m-3 bg-gray-300 p-4 border shadow-xl rounded-md">
              <Image
                src={item.Image}
                alt={item.title}
                height={400}
                width={400}
                className="w-full h-[200px] object-cover rounded-lg "
              />
              <div className="mt-5">
                <h1 className="text-lg font-bold">{item.title}</h1>
                <h2>{item.description}</h2>
                <h2>{item.price}</h2>
                <h2>Cold Drink {item.colddrink ? "Pepsi" : "Water"}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
