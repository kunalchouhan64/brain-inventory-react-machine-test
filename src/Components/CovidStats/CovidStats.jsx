import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import ShimmerChartSkeleton from './ShimmerChartSkeleton';
const StatChart = lazy(() => import('./StatChart'));

const CovidStatisticsChart = () => {
    // 👉 Getting the data from out Store
    const { isLoading, items } = useSelector((store) => store?.apidata);
    //👉 making sure that data coming is array
    const dataToRender = Array.isArray(items) ? items : [items];

    if (isLoading) return <p>Loading...</p>;

    //👉 Preparing the data for the chart
    const chartData = dataToRender?.map((item, index) => ({
        day: `Day ${index + 1}`,
        deaths: item?.data?.['unofficial-summary'][0]?.deaths || 0,
        recovered: item?.data?.['unofficial-summary'][0]?.recovered || 0,
    }));

    return (
        <>
        
            <Suspense fallback={<ShimmerChartSkeleton />}>
                <div className="p-4 bg-white shadow-lg shadow-gray-200 rounded-3xl font-Poppins">
                    <h2 className="sm:text-lg md:text-xl xl:text-2xl font-semibold mb-2">Covid-19 Statistics</h2>
                    <p className="text-md mb-4">as of {new Date().toLocaleString()}</p>
                    <StatChart chartData={chartData} />
                </div>
            </Suspense>
        </>
    );
};

export default CovidStatisticsChart;
