import Image from "next/image";

function SmallCard({item:{img, location, distance}}) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 
    rounded-xl cursor-pointer hover:bg-green-100 hover:scale-105 transition transform duration-200 ease-out">
        {/* Left */}
        <div className="relative h-16 w-16">
            <Image
                className="rounded-lg"
                alt='small card'
                src={img}
                fill
            />
        </div>
        {/* Right */}
        <div>
            <div>{location}</div>
            <div className="text-gray-500">{distance}</div>
        </div>
    </div>
  )
}

export default SmallCard