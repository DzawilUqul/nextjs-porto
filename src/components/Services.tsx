import React from 'react'
import { FaLaptopCode, FaChartLine, FaGamepad, FaCamera } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode  size={40} className='text-indigo-400'/>,
    title: "Web Development",
    description: "Designing and implementing scalable, responsive web applications with modern frameworks and tools."
  },
  {
    icon: <FaChartLine size={40} className="text-indigo-400" />,
    title: "Data Scientist",
    description: "Performing data cleaning, visualization, and statistical analysis to derive actionable insights."
  },
  {
    icon: <FaGamepad size={40} className="text-indigo-400" />,
    title: "Game Development",
    description: "Developing interactive and optimized game mechanics using Unity and C#."
  },
  {
    icon: <FaCamera size={30} className="text-indigo-400" />,
    title: "Computer Vision Engineer",
    description: "Implementing AI-powered image processing and object detection systems."
  },
]


const Services = () => {
  return (
<section className="relative z-30">
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => (
            <li
              key={index}
              className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
            >
              <div className="mb-4">{service.icon}</div> {/* Use icon here */}
              <h3 className="text-[20px] text-primary font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-[15px]">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services