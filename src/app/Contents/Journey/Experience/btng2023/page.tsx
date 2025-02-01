import { content } from "@/app/Contents/content";
import FooterSection from "@/components/JourneyComponents/FooterSection";
import HeaderSection from "@/components/JourneyComponents/HeaderSection";
import HeaderTwo from "@/components/JourneyComponents/headerTwo";
import ListItems from "@/components/JourneyComponents/ListItems";

export default function Page() {
  const { btng2023 } = content;

  return (
    <section className="h-full relative bg-accent/10">
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
          {/* Header */}
          <HeaderSection
            title={btng2023.header.title}
            description={btng2023.header.description}
            author={btng2023.header.author}
            publishedDate={btng2023.header.publishedDate}
            image={btng2023.header.image}
            width={btng2023.header.width}
            height={btng2023.header.height}
          />

          {/* Projects */}
          <HeaderTwo title={btng2023.headerTwo?.title ?? ''}/>
          <ListItems lists={btng2023.ListItems}/>

          {/* Footer Section */}
          <FooterSection 
            images={btng2023.footer?.images ?? []}
            text={btng2023.footer?.text ?? ''}
          />
        </div>
      </div>
    </section>
  );
}
