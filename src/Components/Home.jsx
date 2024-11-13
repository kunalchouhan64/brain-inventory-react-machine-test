import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FetchAPIData } from '../Services/FetchAPIData'


//👉 Implemented the lazy loading...so that application perfomance could be better
const Header = lazy(() => import('./Header/Header'));
const StatsComponent = lazy(() => import('./StatsCards/StatsComponent'));
const CovidStats = lazy(() => import('./CovidStats/CovidStats'));
const ContainerMain = lazy(() => import('./WorldMap/ContainerMain'));
const LiveUpdates = lazy(() => import('./RightSideBar/LiveUpdates'));
const SymptomsCard = lazy(() => import('./RightSideBar/SymptomsCard'));
const SideBar = lazy(() => import('./LeftSideBar/SideBar'));

import LiveUpdateUI from './RightSideBar/ShimmerUI/LiveUpdateUI'
import SymptomsUI from './RightSideBar/ShimmerUI/SymptomsUI'

const Home = () => {
    //👉 getting the dispatch function from the UseDispatch hook
    const dispatch = useDispatch()


    // 👉 Dispatching the Function for Fetching the Data from the API
    useEffect(() => {
        dispatch(FetchAPIData())
    }, [dispatch])
    return (
        <>
            <div className='w-full min-h-screen bg-[#F9FEFF] flex justify-between'>

                {/* 👉 this is the left side bar component  */}
                <SideBar />
                <div className='w-full bg-[#F9FEFF]'>
                    {/* 👉 this is the header component  */}
                    <Header />
                    <div className='w-full flex-col lg:flex-row flex justify-between px-0 sm:px-5 md:px-8'>

                        <div className='w-full p-5 md:p-0 lg:w-[75%]'>
                            {/* 👉 this is the component for showing covid stats - card  */}
                            <StatsComponent />
                            {/*👉 this is the covid stats chart  */}
                            <CovidStats />
                            {/*👉 this is the container for the world map and stats according to the country  */}
                            <ContainerMain />
                        </div>

                        <div className=' w-full lg:w-[30%] flex flex-col justify-center items-center lg:justify-start lg:items-start sm:px-5 my-2 md:my-6 mx-2 md:mx-4 md:py-6 md:px-4 bg-white py-2 shadow-lg shadow-gray-200 rounded-3xl'>
                            {/* 👉 this is the right side side bar with Live updates and the Symptoms card  */}
                            <Suspense fallback={<LiveUpdateUI />}>
                                <LiveUpdates />
                            </Suspense>
                            <Suspense fallback={<SymptomsUI />}>
                                <SymptomsCard />
                            </Suspense>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home
