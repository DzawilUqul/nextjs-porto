import Image from 'next/image';
import React from 'react'

interface FooterSectionProps {
  text: string;
  images: string[];
}


const FooterSection: React.FC<FooterSectionProps> = ({text, images}) => {
  return (
    <>
      <p className="text-justify indent-10">
        {text}
      </p>
      <div className='flex items-center justify-center gap-5'>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt=""
            height={250}
            width={300}
            priority
            className="object-contain rounded-md my-5"
            />
          ))}
      </div>
    </>
  )
}

export default FooterSection