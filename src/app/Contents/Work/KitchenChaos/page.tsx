import FooterSection from '@/components/JourneyComponents/FooterSection'
import HeaderSection from '@/components/JourneyComponents/HeaderSection'
import React from 'react'
import { worksContent } from "@/app/Contents/content";
import ListItems from '@/components/JourneyComponents/ListItems';
import HeaderTwo from '@/components/JourneyComponents/headerTwo';

const page = () => {
  const { kitchen } = worksContent;
  return (
    <section className="h-full relative bg-accent/10">
    <div className="container mx-auto h-full">
      <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
        {/* Header */}
        <HeaderSection
          title={kitchen.header.title}
          description={kitchen.header.description}
          author={kitchen.header.author}
          publishedDate={kitchen.header.publishedDate}
          image={kitchen.header.image}
          width={kitchen.header.width}
          height={kitchen.header.height}
          github={kitchen.header.github}
          youtube={kitchen.header.youtube}
          relatedLink={kitchen.header.relatedLink}
        />

        {/* Projects */}
        <HeaderTwo title={kitchen.headerTwo?.title ?? ''}/>
        <ListItems lists={kitchen.ListItems}/>

        {/* Footer Section */}
        <FooterSection 
          images={kitchen.footer?.images ?? []}
          text={kitchen.footer?.text ?? ''}
        />
      </div>
    </div>
  </section>
  )
}

export default page