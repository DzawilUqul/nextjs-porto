import Image from "next/image";

interface ProjectItemProps {
  title: string;
  description: string;
  images: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({title, description,images,}) => {
  return (
    <div className="mt-3">
      {/* Project Title */}
      <p className="h3">{title}</p>
      {/* Description */}
      <p className="text-justify mt-2">{description}</p>
      {/* Images */}
      <div className="flex flex-row max-lg:flex-col my-5 items-center justify-center gap-5">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={title}
            height={250}
            width={300}
            priority
            className="object-contain rounded-md"
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
