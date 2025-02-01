import { content } from "@/app/Contents/content";
import FooterSection from "@/components/JourneyComponents/FooterSection";
import HeaderSection from "@/components/JourneyComponents/HeaderSection";
import HeaderTwo from "@/components/JourneyComponents/headerTwo";
import ListItems from "@/components/JourneyComponents/ListItems";

export default function Page() {
  const { bk } = content;

  return (
    <section className="h-full relative bg-accent/10">
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
          {/* Header */}
          <HeaderSection
            title={bk.header.title}
            description={bk.header.description}
            author={bk.header.author}
            publishedDate={bk.header.publishedDate}
            image={bk.header.image}
            width={bk.header.width}
            height={bk.header.height}
            github={bk.header.github}
            relatedLink={bk.header.relatedLink}
          />

          {/* Projects */}
          <HeaderTwo title={bk.headerTwo?.title ?? ''}/>
          <ListItems lists={bk.ListItems}/>

          {/* Footer Section */}
          <FooterSection 
            images={bk.footer?.images ?? []}
            text={bk.footer?.text ?? ''}
          />
        </div>
      </div>
    </section>
  );
}
