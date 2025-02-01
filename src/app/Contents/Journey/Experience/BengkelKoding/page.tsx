import { content } from "@/app/Contents/content";
import FooterSection from "@/components/JourneyComponents/FooterSection";
import HeaderSection from "@/components/JourneyComponents/HeaderSection";
import HeaderTwo from "@/components/JourneyComponents/headerTwo";
import ListItems from "@/components/JourneyComponents/ListItems";

export default function Page() {
  const { bengkel } = content;

  return (
    <section className="h-full relative bg-accent/10">
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
          {/* Header */}
          <HeaderSection
            title={bengkel.header.title}
            description={bengkel.header.description}
            author={bengkel.header.author}
            publishedDate={bengkel.header.publishedDate}
            image={bengkel.header.image}
            width={bengkel.header.width}
            height={bengkel.header.height}
            github={bengkel.header.github}
            relatedLink={bengkel.header.relatedLink}
          />

          {/* Projects */}
          <HeaderTwo title={bengkel.headerTwo?.title ?? ''}/>
          <ListItems lists={bengkel.ListItems}/>

          {/* Footer Section */}
          <FooterSection 
            images={bengkel.footer?.images ?? []}
            text={bengkel.footer?.text ?? ''}
          />
        </div>
      </div>
    </section>
  );
}
