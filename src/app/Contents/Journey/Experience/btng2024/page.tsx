import { content } from "@/app/Contents/content";
import FooterSection from "@/components/JourneyComponents/FooterSection";
import HeaderSection from "@/components/JourneyComponents/HeaderSection";
import HeaderTwo from "@/components/JourneyComponents/headerTwo";
import ListItems from "@/components/JourneyComponents/ListItems";

export default function Page() {
  const { btng2024 } = content;

  return (
    <section className="h-full relative bg-accent/10">
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
          {/* Header */}
          <HeaderSection
            title={btng2024.header.title}
            description={btng2024.header.description}
            author={btng2024.header.author}
            publishedDate={btng2024.header.publishedDate}
            image={btng2024.header.image}
            width={btng2024.header.width}
            height={btng2024.header.height}
          />

          {/* Projects */}
          <HeaderTwo title={btng2024.headerTwo?.title ?? ''}/>
          <ListItems lists={btng2024.ListItems}/>

          {/* Footer Section */}
          <FooterSection 
            images={btng2024.footer?.images ?? []}
            text={btng2024.footer?.text ?? ''}
          />
        </div>
      </div>
    </section>
  );
}
