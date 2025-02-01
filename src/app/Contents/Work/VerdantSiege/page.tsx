import FooterSection from '@/components/JourneyComponents/FooterSection'
import HeaderSection from '@/components/JourneyComponents/HeaderSection'
import React from 'react'
import { worksContent } from "@/app/Contents/content";
import ListItems from '@/components/JourneyComponents/ListItems';
import HeaderTwo from '@/components/JourneyComponents/headerTwo';

const page = () => {
  const { verdantSiege } = worksContent;
  return (
    <section className="h-full relative bg-accent/10">
    <div className="container mx-auto h-full">
      <div className="relative z-20 h-full w-full xl:max-w-[800px] flex flex-col mx-auto justify-center mt-20 text-left pt-10">
        {/* Header */}
        <HeaderSection
          title={verdantSiege.header.title}
          description={verdantSiege.header.description}
          author={verdantSiege.header.author}
          publishedDate={verdantSiege.header.publishedDate}
          image={verdantSiege.header.image}
          width={verdantSiege.header.width}
          height={verdantSiege.header.height}
          github={verdantSiege.header.github}
          youtube={verdantSiege.header.youtube}
          relatedLink={verdantSiege.header.relatedLink}
        />

        {/* Projects */}
        <HeaderTwo title={verdantSiege.headerTwo?.title ?? ''}/>
        <ListItems lists={verdantSiege.ListItems}/>

        {/* Footer Section */}
        <FooterSection 
          images={verdantSiege.footer?.images ?? []}
          text={verdantSiege.footer?.text ?? ''}
        />
        <div className='flex flex-col items-center justify-center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/83v0TeyKe7s?si=P1fzngsm7Pf7BKR1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </section>
  )
}

export default page