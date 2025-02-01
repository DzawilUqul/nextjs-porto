import { content } from "@/app/Contents/content";
import FooterSection from "@/components/JourneyComponents/FooterSection";
import HeaderSection from "@/components/JourneyComponents/HeaderSection";
import HeaderTwo from "@/components/JourneyComponents/headerTwo";
import ListItems from "@/components/JourneyComponents/ListItems";

export default function Page() {
  const { sedes } = content;

  return (
    <section className="h-full relative bg-accent/10">
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
          {/* Header */}
          <HeaderSection
            title={sedes.header.title}
            description={sedes.header.description}
            author={sedes.header.author}
            publishedDate={sedes.header.publishedDate}
            image={sedes.header.image}
            width={sedes.header.width}
            height={sedes.header.height}
            github={sedes.header.github}
            relatedLink={sedes.header.relatedLink}
          />

          {/* Projects */}
          <HeaderTwo title={sedes.headerTwo?.title ?? ''}/>
          <ListItems lists={sedes.ListItems}/>

          {/* Footer Section */}
          <FooterSection 
            images={sedes.footer?.images ?? []}
            text={sedes.footer?.text ?? ''}
          />
        </div>
      </div>
    </section>
  );
}
