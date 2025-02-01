import FooterSection from '@/components/JourneyComponents/FooterSection'
import HeaderSection from '@/components/JourneyComponents/HeaderSection'
import React from 'react'
import { worksContent } from "@/app/Contents/content";
import ListItems from '@/components/JourneyComponents/ListItems';
import HeaderTwo from '@/components/JourneyComponents/headerTwo';

const page = () => {
  const { yumYumDrop } = worksContent;
  return (
    <section className="h-full relative bg-accent/10">
    <div className="container mx-auto h-full">
      <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
        {/* Header */}
        <HeaderSection
          title={yumYumDrop.header.title}
          description={yumYumDrop.header.description}
          author={yumYumDrop.header.author}
          publishedDate={yumYumDrop.header.publishedDate}
          image={yumYumDrop.header.image}
          width={yumYumDrop.header.width}
          height={yumYumDrop.header.height}
          github={yumYumDrop.header.github}
          youtube={yumYumDrop.header.youtube}
          relatedLink={yumYumDrop.header.relatedLink}
        />

        {/* Projects */}
        <HeaderTwo title={yumYumDrop.headerTwo?.title ?? ''}/>
        <ListItems lists={yumYumDrop.ListItems}/>

        {/* Footer Section */}
        <FooterSection 
          images={yumYumDrop.footer?.images ?? []}
          text={yumYumDrop.footer?.text ?? ''}
        />
      </div>
    </div>
  </section>
  )
}

export default page