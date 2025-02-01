import FooterSection from '@/components/JourneyComponents/FooterSection'
import HeaderSection from '@/components/JourneyComponents/HeaderSection'
import React from 'react'
import { worksContent } from "@/app/Contents/content";
import ListItems from '@/components/JourneyComponents/ListItems';
import HeaderTwo from '@/components/JourneyComponents/headerTwo';

const page = () => {
  const { flappyBird3D } = worksContent;
  return (
    <section className="h-full relative bg-accent/10">
    <div className="container mx-auto h-full">
      <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
        {/* Header */}
        <HeaderSection
          title={flappyBird3D.header.title}
          description={flappyBird3D.header.description}
          author={flappyBird3D.header.author}
          publishedDate={flappyBird3D.header.publishedDate}
          image={flappyBird3D.header.image}
          width={flappyBird3D.header.width}
          height={flappyBird3D.header.height}
          github={flappyBird3D.header.github}
          youtube={flappyBird3D.header.youtube}
          relatedLink={flappyBird3D.header.relatedLink}
        />

        {/* Projects */}
        <HeaderTwo title={flappyBird3D.headerTwo?.title ?? ''}/>
        <ListItems lists={flappyBird3D.ListItems}/>

        {/* Footer Section */}
        <FooterSection 
          images={flappyBird3D.footer?.images ?? []}
          text={flappyBird3D.footer?.text ?? ''}
        />
        <div className='flex flex-col items-center justify-center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/C1x61kK0vEM?si=zhphIOu6fUFsqIuU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>
    </div>
  </section>
  )
}

export default page