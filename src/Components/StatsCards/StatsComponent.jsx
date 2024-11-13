import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
const CasesCard = lazy(() => import('./CasesCard'));
const DeathCard = lazy(() => import('./DeathCard'));
const RecoveredCard = lazy(() => import('./RecoveredCard'));
import CardShimmerUI from './StatsShimmerUI/CardShimmerUI';


const StatsComponent = () => {
    const { isEmpty, isError, isLoading, items } = useSelector((store) => store?.apidata);
    const dataToRender = Array.isArray(items) ? items : [items];

    const chartData = [
        { name: 'Day 1', cases: 1000 },
        { name: 'Day 2', cases: 1500 },
        { name: 'Day 3', cases: 1200 },
        { name: 'Day 4', cases: 1800 },
        { name: 'Day 5', cases: 1400 },
        { name: 'Day 6', cases: 2000 },
    ];

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading data.</p>;
    if (isEmpty || !items) return <p>No data available.</p>;

    return (
        <div className='w-full flex justify-around font-Poppins items-center gap-4 px-2 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-5'>
            {dataToRender?.map((item, index) => (
                <div key={index} className='flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-8 xl:gap-10 w-full'>
                    {/* Cases Card */}
                    <Suspense fallback={<CardShimmerUI />}>
                        <CasesCard item={item} chartData={chartData} />
                    </Suspense>
                    {/* Deaths Card */}
                    <Suspense fallback={<CardShimmerUI />}>
                        <DeathCard item={item} chartData={chartData} />
                    </Suspense>
                    {/* Recovered Card */}
                    <Suspense fallback={<CardShimmerUI />}>
                        <RecoveredCard item={item} chartData={chartData} />
                    </Suspense>
                </div>
            ))}
        </div>
    );
};

export default StatsComponent;
