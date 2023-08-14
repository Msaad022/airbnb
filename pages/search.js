import React from 'react';
import Head from 'next/head'

import { useRouter } from 'next/router'
import { Header, Footer, InfoCard } from '../components'

const Maps = React.lazy(() => import('../components/maps/Map'));

export default function Search({searchResults ,points}) {

    const {query:{location,start,end,num}} = useRouter();
    const  range = `${start} - ${end}`;

return (
    
        <div>
            <Head>
                <title>Search</title>
            </Head>
            <Header placeholder={`${location} | ${range} | ${num} guests`}/>
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'> 300+ Stays - <span className='py-1 px-2 rounded-md bg-gray-200'>{start}</span> to <span className='py-1 px-2 rounded-md bg-gray-200'>{end}</span> - for {num} Guests </p>
                    <h2 className=' text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h2>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>
                    <div className=' grid lg:grid-cols-[70%_30%]'>
                        <div className='flex gap-6 flex-col'>
                            {searchResults?.map(({img, location, title, description, star, price, total})=>(
                                <InfoCard
                                    key={title}
                                    img={img}
                                    location={location}
                                    title={title}
                                    description={description}
                                    star={star}
                                    price={price}
                                    total={total}
                                />
                            ))}
                        </div>
                        <div className='hidden  lg:inline-block'>
                            <Maps locations={points}/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export async function getServerSideProps(){

    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
        (res) => res.json()
    )

    const points = searchResults.map(point => ( {lat: point.lat, lng:point.long} ))

    return{
        props: {
            searchResults,
            points
        }
    }
}