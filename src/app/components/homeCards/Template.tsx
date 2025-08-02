
import BadgeButton from "@/components/ui/badge-button"
import { MinimalCard, MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from "@/components/ui/minimal-card"
import React from 'react'

const Template = () => {
      const cards = [
  {
    image: "/images/video1.gif",
    title: "Landing Page",
    description:
      "Modern learning page templates featuring framer Motion animations, custom navigation components, and responsive design optimized for conversations.",
  },
  {
    image: "/images/video2.gif",
    title: "Manifest",
    description:
      "How to design with gestures and motion that feel intuitive and natural, enhancing user experience and engagement.",
  },
  {
    image: "/images/video1.gif",
    title: "Landing Page",
    description:
      "Modern learning page templates featuring framer Motion animations, custom navigation components, and responsive design optimized for conversations.",
  },
  
]
  
  return (
   <div className="w-[900px] h-[500px]   rounded-3xl mt-1 border mx-auto">
   
    <div className="w-[880px] h-[480px]   shadow-xl rounded-3xl mt-2 border relative mx-auto ">
    <div className="w-[880px] h-[480px] px-4  rounded-3xl absolute top-[10px] left-[50%] translate-x-[-50%]">
      <BadgeButton >Templates</BadgeButton>
     <div className="min-h-[500px]  flex flex-col justify-center rounded-lg mt-[-25px]">
        <div className="relative grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, key) => (
            <MinimalCard className="" key={key}>
              <img className="rounded-2xl h-[200px] w-[300px] border-4 " src={card.image} alt="image" />
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardDescription>
                {card.description}
              </MinimalCardDescription>
            </MinimalCard>
          ))}
        </div>
      </div>
      </div>
   </div>
   </div>
   )
}

export default Template