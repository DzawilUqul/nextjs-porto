import FooterSection from '@/components/JourneyComponents/FooterSection'
import HeaderSection from '@/components/JourneyComponents/HeaderSection'
import React from 'react'
import { worksContent } from "@/app/Contents/content";
import ListItems from '@/components/JourneyComponents/ListItems';
import HeaderTwo from '@/components/JourneyComponents/headerTwo';

const page = () => {
  const { astar } = worksContent;
  return (
    <section className="h-full relative bg-accent/10">
    <div className="container mx-auto h-full">
      <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
        {/* Header */}
        <HeaderSection
          title={astar.header.title}
          description={astar.header.description}
          author={astar.header.author}
          publishedDate={astar.header.publishedDate}
          image={astar.header.image}
          width={astar.header.width}
          height={astar.header.height}
          github={astar.header.github}
          youtube={astar.header.youtube}
          relatedLink={astar.header.relatedLink}
        />

        {/* Projects */}
        <HeaderTwo title={astar.headerTwo?.title ?? ''}/>
        <ListItems lists={astar.ListItems}/>

        {/* Footer Section */}
        <FooterSection 
          images={astar.footer?.images ?? []}
          text={astar.footer?.text ?? ''}
        />
      </div>
    </div>
  </section>
  )
}

export default page