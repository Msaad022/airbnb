import Image from 'next/image'
import { 
        MagnifyingGlassIcon,
        GlobeAltIcon,
        Bars3Icon,
        UsersIcon,
        UserCircleIcon
    } from '@heroicons/react/24/solid'
import { useState } from 'react'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker , DateRange   } from 'react-date-range';
import { useRouter } from 'next/router';
import { format } from 'date-fns'
import LogoAirBnd from '../public/airbnbLogo.png'

function Header({placeholder}) {

    const [search,setSearch]        = useState('')
    const [startDate,setStartDate]  = useState(new Date())
    const [endDate,setEndDate]      = useState(new Date())
    const [numOfGuests,setNumOfGuests] = useState(1)
    
    const router = useRouter()

    const handleSelect= (ranges) => {
        ranges = ranges.selection
        setStartDate(ranges.startDate)
        setEndDate(ranges.endDate)
    }

    const resetInput = ()=>{
        setStartDate(new Date())
        setEndDate(new Date())
        setSearch('')
    }

    const searchHandler = ()=>{

        let formatStartDate = format(new Date(startDate),'dd MMMM yy')
        let formatEndtDate = format(new Date(endDate),'dd MMMM yy')

        router.push({
            pathname: '/search',
            query: {
                location: search,
                start: formatStartDate,
                end: formatEndtDate,
                num: numOfGuests
            }
        })
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    return (
        <header className="sticky max-[345px]:-top-[64px] top-0 z-50 bg-white shadow-md p-5 md:px-10 flex justify-around flex-wrap gap-6">
            {/* Left */}
            <div onClick={()=> router.push('./')} className="w-[50px] md:w-[135px] relative my-auto flex items-center h-10 cursor-pointer">
                <Image
                    className="object-contain object-left hidden md:inline-block"
                    alt='logo'
                    src="https://links.papareact.com/qd3"
                    fill
                />
                <Image
                    className="scale-150 md:hidden"
                    alt='logo'
                    src={LogoAirBnd}
                    fill
                />
            </div>

            {/* Middle - Search */}
            <div className='flex items-center border-2 rounded-full py-2 bg-white flex-grow max-w-[500px]'>
                <input 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder={placeholder || 'Start your search'}
                    className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' />
                <div>
                    <MagnifyingGlassIcon 
                        className="h-8 max-lg:h-7 inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer mr-2" />
                </div>
            </div>
            {/* Right */}
            <div className='max-md:hidden flex items-center max-lg:space-x-2 space-x-4 justify-end text-gray-500 '>
                <p className='max-lg:text-sm cursor-pointer hidden md:block'>Become a host</p>
                <div>
                    <GlobeAltIcon className="h-8 max-lg:h-7"/>
                </div>
                <div className='flex items-center space-x-2 border-2 rounded-full p-1 px-2'>
                    <Bars3Icon className="h-8 max-lg:h-7" />
                    <UserCircleIcon className="h-8 max-lg:h-7"/>
                </div>
            </div>
            {
                search && (
                    <div className='w-full flex justify-center'>
                        <div className='flex flex-col'>
                            <div className='hidden md:block'>
                                <DateRangePicker
                                    ranges={[selectionRange]}
                                    minDate={new Date()}
                                    rangeColors={['#f87171']}
                                    onChange={handleSelect}
                                />
                            </div>
                            <div className='md:hidden'>
                                <DateRange 
                                    ranges={[selectionRange]}
                                    minDate={new Date()}
                                    rangeColors={['#f87171']}
                                    onChange={handleSelect}
                                />
                            </div>
                            <div className='flex items-center mb-1 border-b'>
                                <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                                <UsersIcon className='h-5' />
                                <input
                                    type='number'
                                    value={numOfGuests}
                                    onChange={(e) => setNumOfGuests(e.target.value)}
                                    min={1}
                                    className='w-12 text-lg pl-2 outline-none text-red-400'
                                />
                            </div>
                            <div className='flex'>
                                <button 
                                    className=' flex-grow text-gray-500 py-3 hover:text-white hover:bg-[#f87171] transition duration-200 ease-out'
                                    onClick={resetInput}>
                                    Cancel
                                </button>
                                <button 
                                    className=' flex-grow text-red-400 py-3 hover:text-white hover:bg-[#f87171] transition duration-200 ease-out'
                                    onClick={ () => searchHandler()}
                                >Search</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    )
}

export default Header