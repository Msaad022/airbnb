import Style from '../styles/Banner.module.css'

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[#05070a]">
      <div className={`fixed h-[inherit] w-11/12 right-0 bg-[url(../public/giphy3.gif)] bg-no-repeat bg-contain sm:bg-cover bg-[center_right]`}>
      </div>
      <div className="absolute left-[9%] top-[20%] py-6 font-bold max-w-[410px] text-left text-white z-20">
        <p className="py-2 text-3xl md:text-5xl md:leading-tight mb-8">Not sure where to go? Prefect.</p>
        <div className={`${Style.effect} relative w-[135px] h-14 active:scale-90 transition duration-150 mt-4`}>
          <button className='text-[#245565] w-[94%] h-[86%]  bg-[#e9edf5] ml-1 mt-1'>
            I'm flexible
          </button>
        </div>
      </div>
    </div>
  )
}
export default Banner