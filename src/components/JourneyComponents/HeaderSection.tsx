import Image from "next/image";
import MetaInfo from "./MetaInfo";
import { Header } from "@/types/ContentTypes";


export default function HeaderSection({
  title,
  description,
  author,
  publishedDate,
  image,
  width,
  height,
  youtube,
  github,
  relatedLink,
}: Header) {
  return (
    <div>
      {/* Title */}
      <h1 className="h1 text-start">{title}</h1>
      {/* Author */}
      <MetaInfo label="Author :" value={author} />
      {/* Published Date */}
      <MetaInfo label="Published :" value={publishedDate} />
      {/* GitHub */}
      {github && <MetaInfo link label="GitHub :" value={github} />}
      {/* YouTube */}
      {youtube && <MetaInfo link label="YouTube :" value={youtube} />}
      {/* Related Link */}
      {relatedLink && <MetaInfo link label="Related Link :" value={relatedLink} />}

      {/* Image */}
      <div className="my-5 flex items-center justify-center">
        <Image 
          src={image}
          alt="" 
          height={height} 
          width={width} 
          priority 
          className={`object-contain rounded-md`}/>
      </div>
        {/* Introduction */}
        <p className="text-justify indent-8 mt-5">
          {description}
      </p>
    </div>
  );
}
