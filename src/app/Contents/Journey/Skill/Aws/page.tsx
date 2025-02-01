import { content } from "@/app/Contents/content";
import FooterSection from "@/components/JourneyComponents/FooterSection";
import HeaderSection from "@/components/JourneyComponents/HeaderSection";
import HeaderTwo from "@/components/JourneyComponents/headerTwo";
import ListItems from "@/components/JourneyComponents/ListItems";

export default function Page() {
  const { nvidia } = content;

  return (
    <section className="h-full relative bg-accent/10">
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
          {/* Header */}
          <HeaderSection
            title={nvidia.header.title}
            description={nvidia.header.description}
            author={nvidia.header.author}
            publishedDate={nvidia.header.publishedDate}
            image={nvidia.header.image}
            width={nvidia.header.width}
            height={nvidia.header.height}
          />

          {/* Projects */}
          <HeaderTwo title={nvidia.headerTwo?.title ?? ''}/>
          <ListItems lists={nvidia.ListItems}/>

          {/* Footer Section */}
          <FooterSection 
            images={nvidia.footer?.images ?? []}
            text={nvidia.footer?.text ?? ''}
          />
        </div>
      </div>
    </section>
  );
}
