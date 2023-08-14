import Image from "next/image"
import { 
  StarIcon,
  HeartIcon,
} from '@heroicons/react/24/solid'

export default function InfoCard({img, location, title, description, star, price, total}  ) {
  return (
    <div 
    className="flex gap-6 py-5 sm:items-center max-sm:flex-col border-b cursor-pointer hover:opacity-80
    hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative w-full h-52 sm:w-60 sm:h-46 md:h-48 md:w-72 flex-shrink-0">
        <Image
          className="object-cover object-left rounded-xl"
          alt={title}
          src={img}
          fill
        />
      </div>
      <div className="flex flex-col h-full justify-between flex-grow py-3 pr-3 gap-4">
        <div className="mb-4"> 
          <div className="flex justify-between mb-4">
            <span className="text-gray-700 text-xs md:text-sm ">{location}</span>
            <HeartIcon className="w-5 fill-none stroke-black stroke-2" />
          </div>
          <div>
            <p className=" text-lg font-semibold mb-1">{title}</p>
            <span className="text-gray-700 text-xs md:text-sm">{description}</span>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div >
            <p> <StarIcon className="w-4 text-red-400 inline-block"/>{star}</p>
          </div>
          <div className="text-right">
            <p className=" text-lg md:text-xl font-semibold">{price}</p>
            <span className="text-gray-700 text-xs md:text-sm">{total}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
