import Image from "next/image";
import bird from "../images/bird.jpg";

export default function image1() {
  return (
    <div>
      <Image
        src={bird}
        alt='bird'
        width={400}
        height={400}
        className="w-[400px] h-[400px] rounded-full"
      ></Image>
      <Image
        src={require('../images/butterfly.jpg')}
        alt="butterfuly"
        width={400}
        height={400}
        className="w-[400px] h-[400px] rounded-full"
      ></Image>
    </div>
  );
}
