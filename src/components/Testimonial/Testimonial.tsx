import Marquee from "react-fast-marquee";
import Image from 'next/image';

const certificates = [
  { name: 'Nvidia', src: '/assets/certificates/nvidia.png' },
  { name: 'Unity', src: '/assets/certificates/unity.png' },
  { name: 'Aws', src: '/assets/certificates/aws.png' },
  { name: 'Dicoding', src: '/assets/certificates/Dicoding1.jpg' },
  { name: 'Dicoding', src: '/assets/certificates/Dicoding2.jpg' },
  { name: 'Dicoding', src: '/assets/certificates/Dicoding3.jpg' },
  { name: 'Dicoding', src: '/assets/certificates/Dicoding4.jpg' },
  { name: 'Kaggle', src: '/assets/certificates/kaggle1.png' },
  { name: 'Kaggle', src: '/assets/certificates/kaggle2.png' },
  { name: 'Kaggle', src: '/assets/certificates/kaggle3.png' },
];


const Testimonial = () => {
  return (
  <div className="mt-10 flex items-center justify-center mx-auto overflow-hidden">
    <Marquee speed={30} play={true}>
      {certificates.map((certificate, index) => (
        <div key={index} className="mx-4 w-100">
          <Image
            width={400}
            height={400}
            alt={certificate.name}
            src={certificate.src}
            className="border-2 border-gray-200"
          />
        </div>
      ))}
    </Marquee>
  </div>
  );
};

export default Testimonial;
