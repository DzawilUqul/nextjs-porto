import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

const socials = [
  {
    icon: <RiInstagramFill />,
    path: 'https://www.instagram.com/dzawil_u/'
  },
  {
    icon: <FaEnvelope />,
    path: 'mailto:dzawilu@gmail.com'
  },
  {
    icon: <FaGithub />,
    path: 'https://github.com/DzawilUqul'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/dzawil-uqul-1766ab13b/'
  },
]


interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;