"use client";
import { CardProps } from "@/types/ContentTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Card: React.FC<CardProps> = ({
  type,
  duration,
  description,
  href,
  image,
  program,
  title,
}) => {
  return (
    <div className="w-full h-[300px] flex items-center my-5">
      <div className="w-full h-full border border-violet-400/80 bg-violet-50 rounded-[8px]">
        <div className="flex flex-col h-full">
          <div className="h-[80px] xl:h-[68px] bg-white flex flex-row justify-between items-center px-6 max-xl:px-[15px] max-xl:py-[15px] md:px-[84px] rounded-tl-[8px] rounded-tr-[8px]">
            <div className="flex gap-2 py-2">
              <Image
                src={"/assets/journey/shape.svg"}
                width={16}
                height={16}
                alt=""
              />
              {/* Title */}
              <h3 className="text-lg font-semibold text-primary underline">
                {program}
              </h3>
            </div>
            <p className="max-md:hidden text-base">
              {type !== "experience" && type !== "education" ? null : duration}
            </p>
          </div>
          <div className="flex-1 flex-row items-center justify-start max-lg:overflow-hidden max-lg:mx-10 max-lg:items-start max-lg:overflow md:py-8 md:px-16">
            <div className="flex flex-row xl:flex-row items-start text-left gap-10 px-0">
              {/* Image (Hidden on smaller screens) */}
              <div className="relative w-80 h-40 hidden lg:block xl:block">
                <Image src={image} fill alt="" className="object-cover rounded-md shadow-xl" />
              </div>

              {/* Text Content */}
              <div className="xl:border-l xl:border-secondary/10 xl:pl-12 w-full h-full">
                <h3 className="flex h3 mb-2 max-md:mt-5">{title}</h3>

                {/* Ensure the description remains a block element */}
                <p className="text-justify max-w-[660px] xl:max-w-[780px] max-md:line-clamp-3 line-clamp-4">
                  {description}
                </p>

                {/* "Read More" Link */}
                <div className="mt-2">
                  <Link href={href} className="text-blue-500 hover:text-blue-700 underline transition duration-200"> 
                    Read More 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
