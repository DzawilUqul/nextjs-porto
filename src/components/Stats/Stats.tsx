import Marquee from "react-fast-marquee";
import Image from 'next/image';

const Skills = () => {
  const skills = [
    { name: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Unity', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  ];

  return (
    <div className="flex justify-center xl:justify-normal mx-auto xl:mx-0 gap-0 xl:gap-0 w-4/6 max-sm:w-full overflow-hidden">
      <Marquee speed={30} play={true} pauseOnHover>
        {skills.map((skill, index) => (
          <div key={index} className="mx-4">
            <Image
              width={46}
              height={46}
              alt={skill.name}
              src={skill.src}
              className="w-12 h-12"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
