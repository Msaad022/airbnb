import Image from "next/image"
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from "react"

function MediumCard({cardsData}) {

  const carouselRef = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    let carousel = carouselRef.current
    setWidth(carousel.scrollWidth - carousel.offsetWidth)
  },[])

  return (
    <motion.div ref={carouselRef} className="overflow-hidden">
      <motion.div drag="x" dragConstraints={{right: 0, left: -(width + 12 )}} className="flex gap-3 py-3 px-6 -ml-3">
        {cardsData?.map(({img,title}) => (
          <motion.div key={title} className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80 pointer-events-none">
                <Image className="rounded-xl"
                    alt='Medium card'
                    src={img}
                    fill
                    sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                />
            </div>
            <div className="text-2xl mt-3">{title}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    
  )
}

// overflow-scroll scrollbar-hide
export default MediumCard