import React, { lazy, Suspense } from 'react'
const CountryStats = lazy(() => import('./CountryStats'));
const LocationMap = lazy(() => import('./LocationMap'));
import ShimmerCountryStatsSkeleton from './ShimmerUI/ShimmerCountryStatsSkeleton'
import ShimmerLocationMapSkeleton from './ShimmerUI/ShimmerLocationMapSkeleton '

const ContainerMain = () => {
    return (
        <>
            <div className='w-full flex-col lg:flex-row flex justify-center md:justify-center items-center'>
                <div className='w-full sm:w-[75%] lg:w-2/3'>

                    <Suspense fallback={<ShimmerCountryStatsSkeleton />}>
                        <CountryStats />
                    </Suspense>
                </div>

                <div className='w-full sm:w-[25%] lg:w-1/3'>
                    <Suspense fallback={<ShimmerLocationMapSkeleton />}>
                        <LocationMap />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default ContainerMain
