"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  info:{
    public_id:string
  },
  event: "success"

  }


export default function Home() {
  const [imageID, setImageId] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton 
      onUpload={(result:UploadResult)=>{
        setImageId(result.info.public_id)
      }}

      uploadPreset="z1htnnla" />
      {imageID && (
      <CldImage
        width="400"
        height="300"
        src={imageID}
        sizes="100vw"
        alt="Description of my image"
      />
      )}
    </main>
  );
}
