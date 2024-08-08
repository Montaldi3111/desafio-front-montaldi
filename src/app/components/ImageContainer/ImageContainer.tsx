'use client'

import { useEffect, useState } from "react";
import Image from "next/image"

const ImageContainer = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [])
  return (
    <Image src="/image.png" alt="Digital Money House" width={width} height={height} className="w-full max-h-[80vh] object-cover overflow-auto"/>
  )
}

export default ImageContainer