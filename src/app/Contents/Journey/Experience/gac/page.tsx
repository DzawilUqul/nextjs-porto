import { content } from "@/app/Contents/content";
import FooterSection from "@/components/JourneyComponents/FooterSection";
import HeaderSection from "@/components/JourneyComponents/HeaderSection";
import HeaderTwo from "@/components/JourneyComponents/headerTwo";
import ListItems from "@/components/JourneyComponents/ListItems";

export default function Page() {
  const { gac } = content;

  return (
    <section className="h-full relative bg-accent/10">
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
          {/* Header */}
          <HeaderSection
            title={gac.header.title}
            description={gac.header.description}
            author={gac.header.author}
            publishedDate={gac.header.publishedDate}
            image={gac.header.image}
            width={gac.header.width}
            height={gac.header.height}
            github={gac.header.github}
            relatedLink={gac.header.relatedLink}
          />

          {/* Projects */}
          <HeaderTwo title={gac.headerTwo?.title ?? ''}/>
          <ListItems lists={gac.ListItems}/>

          {/* Footer Section */}
          <FooterSection 
            images={gac.footer?.images ?? []}
            text={gac.footer?.text ?? ''}
          />
        </div>
      </div>
    </section>
  );
}
