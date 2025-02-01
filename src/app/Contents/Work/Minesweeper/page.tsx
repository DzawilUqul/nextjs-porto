import FooterSection from '@/components/JourneyComponents/FooterSection'
import HeaderSection from '@/components/JourneyComponents/HeaderSection'
import React from 'react'
import { worksContent } from "@/app/Contents/content";
import ListItems from '@/components/JourneyComponents/ListItems';
import HeaderTwo from '@/components/JourneyComponents/headerTwo';

const page = () => {
  const { mine } = worksContent;
  return (
    <section className="h-full relative bg-accent/10">
    <div className="container mx-auto h-full">
      <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
        {/* Header */}
        <HeaderSection
          title={mine.header.title}
          description={mine.header.description}
          author={mine.header.author}
          publishedDate={mine.header.publishedDate}
          image={mine.header.image}
          width={mine.header.width}
          height={mine.header.height}
          github={mine.header.github}
          youtube={mine.header.youtube}
          relatedLink={mine.header.relatedLink}
        />

        {/* Projects */}
        <HeaderTwo title={mine.headerTwo?.title ?? ''}/>
        <ListItems lists={mine.ListItems}/>

        {/* Footer Section */}
        <FooterSection 
          images={mine.footer?.images ?? []}
          text={mine.footer?.text ?? ''}
        />
      </div>
    </div>
  </section>
  )
}

export default page