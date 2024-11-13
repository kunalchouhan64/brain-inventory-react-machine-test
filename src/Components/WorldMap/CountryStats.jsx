import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Chart } from "react-google-charts";
import ShimmerCountryStatsSkeleton from './ShimmerUI/ShimmerCountryStatsSkeleton';



const CountryStats = () => {
    const { isEmpty, isError, isLoading, items } = useSelector((store) => store?.apidata);
    const dataToRender = Array.isArray(items) ? items : [items];


    // console.log(">>>>>>>>>>>>", items?.data["unofficial-summary"][0]?.active)
    const casesdata = dataToRender?.map((item) => item?.data["unofficial-summary"][0])
    // console.log("casesdata-->>", casesdata[0].total);


    const totalCases = casesdata[0]?.total; // Replace with dynamic total cases
    const deathCases = casesdata[0]?.deaths; // Replace with dynamic death cases (e.g., 10% of total)
    const recoveredCases = casesdata[0]?.recovered; // Replace with dynamic recovered cases (e.g., 25% of total)
    const activeCases = casesdata[0]?.active; // Replace with dynamic active cases (e.g., 30% of total)

    const data = [
        ["Status", "Count"],
        ["Death", deathCases],
        ["Recovered", recoveredCases],
        ["Active", activeCases],
    ];

    const options = {
        // title: `${totalCases} Total Cases`,
        // titleTextStyle: {
        //     fontSize: 15,
        //     bold: true,
        //     color: "#000",
        // },
        pieHole: 0.8,
        pieSliceText: "none",
        legend: {

            position: "top",
            alignment: "center",
            textStyle: {
                fontSize: 12,
            },
        },
        slices: {
            0: { color: "#FB4B62" }, // Death - Red
            1: { color: "#8DCC28" }, // Recovered - Green
            2: { color: "#04C4F7" }, // Active - Blue
        },
        tooltip: {
            text: "percentage",
        },
        // chartArea: {
        //     width: "40%",
        //     height: "40%",
        // },
    };

    const deathPercentage = ((deathCases / totalCases) * 100).toFixed(2); // Death percentage
    const recoveredPercentage = ((recoveredCases / totalCases) * 100).toFixed(2); // Recovered percentage
    const activePercentage = ((activeCases / totalCases) * 100).toFixed(2); // Active percentage


    if (isLoading) return <ShimmerCountryStatsSkeleton />

    return (
        <>
            <div className='my-4 font-Poppins flex flex-col lg:flex-row justify-center md:justify-center items-center bg-white shadow-lg shadow-gray-200 rounded-3xl px-8 py-3 w-full'>
                <div className='w-full'>
                    <h2 className='sm:text-base font-semibold font-Poppins md:text-lg xl:text-2xl'>World Map <span className='text-sm text-gray-400'>view all</span></h2>
                    <div className='sm:py-5 w-full'>
                        {
                            dataToRender?.map((item, indx) => (
                                // <p className='space-x-4'><span className='text-black font-semibold'>89998099</span> <span className='font-semibold sm:text-lg text-gray-400'>USA</span></p>
                                <div className='w-full text-sm py-3 md:text-base md:py-2' key={indx}>{item?.data['regional'].slice(8, 16).map((it, indx) => (
                                    <p key={indx} className='space-x-6 w-full justify-between items-center'><span className='text-black font-semibold'>{it?.confirmedCasesIndian}</span> <span className='font-[500] sm:text-md text-gray-400'>{it?.loc}</span></p>
                                ))}</div>
                            ))
                        }


                    </div>

                </div>
                <div className="flex flex-col w-full justify-center items-center md:justify-start h-auto  md:items-start">
                    <div className='relative w-full'>

                        <Chart
                            chartType="PieChart"
                            className='h-[15.5rem]'
                            data={data}
                            options={options}
                        />
                        <div className='absolute top-[6.6rem] left-[4.6rem] md:top-24 md:left-36 lg:left-36 lg:top-24 text-center font-Poppins'>
                            <p className='text-lg font-semibold'>{totalCases}</p>
                            <p className='text-xs'>Total Cases</p>
                        </div>
                    </div>

                    <div className="flex space-y-1 space-x-4 flex-col justify-center items-center md:justify-start  md:items-start text-center w-full">
                        <div className="flex items-center ml-4 w-full justify-between text-xs sm:text-base md:text-lg">
                            <p><span className="w-3 h-3 mr-2 rounded-full bg-[#FB4B62] inline-block"></span> <span>Death</span></p>
                            <p><span className="text-[#FB4B62] ml-1">{deathPercentage}%</span></p>

                        </div>
                        <div className="flex items-center w-full justify-between text-xs sm:text-base md:text-lg">
                            <p><span className="w-3 h-3 rounded-full bg-[#8DCC28] mr-2 inline-block"></span> <span>Recovered</span></p>
                            <p><span className="text-[#8DCC28] ml-1">{recoveredPercentage}%</span></p>

                        </div>
                        <div className="flex items-center w-full justify-between text-xs sm:text-base md:text-lg">
                            <p><span className="w-3 h-3 rounded-full bg-[#04C4F7] mr-2 inline-block"></span> <span>Active</span></p>
                            <p><span className="text-[#04C4F7] ml-1">{activePercentage}%</span></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryStats
