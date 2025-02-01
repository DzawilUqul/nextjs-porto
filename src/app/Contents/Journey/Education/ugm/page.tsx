import { content } from "@/app/Contents/content";
import FooterSection from "@/components/JourneyComponents/FooterSection";
import HeaderSection from "@/components/JourneyComponents/HeaderSection";
import HeaderTwo from "@/components/JourneyComponents/headerTwo";
import ListItems from "@/components/JourneyComponents/ListItems";

export default function Page() {
  const { ugm } = content;

  return (
    <section className="h-full relative bg-accent/10">
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
          {/* Header */}
          <HeaderSection
            title={ugm.header.title}
            description={ugm.header.description}
            author={ugm.header.author}
            publishedDate={ugm.header.publishedDate}
            image={ugm.header.image}
            width={ugm.header.width}
            height={ugm.header.height}
          />

          {/* Projects */}
          <HeaderTwo title={ugm.headerTwo?.title ?? ''}/>
          <ListItems lists={ugm.ListItems}/>

          {/* Footer Section */}
          <FooterSection 
            images={ugm.footer?.images ?? []}
            text={ugm.footer?.text ?? ''}
          />
        </div>
      </div>
    </section>
  );
}
