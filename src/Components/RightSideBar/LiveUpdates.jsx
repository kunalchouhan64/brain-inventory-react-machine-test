import React from 'react'

const LiveUpdates = () => {

    //👉 preparing the dummy data for our live updated card 
    const UpdatesData = [
        {
            isFirst: false,
            description: "2 new cases in Pakistan"
        },
        {
            isFirst: false,
            description: "4 new cases in Singapore"
        },
        {
            isFirst: false,
            description: "2 new cases in Pakistan"
        },
        {
            isFirst: false,
            description: "5 new cases in Thailand"
        },
        {
            isFirst: false,
            description: "8 new cases in Japan"
        },
        {
            isFirst: true,
            description: "1st cases in Equador"
        },
        {
            isFirst: true,
            description: "1st cases in Maxico"
        },

    ]
    return (
        <>
            <div className='w-full font-Poppins px-5 md:px-1'>
                <h2 className='sm:text-lg font-semibold md:text-xl lg:text-2xl'>Live Updates <span className='text-xs sm:text-sm font-extralight text-gray-500'>(1Min ago)</span></h2>
                <div>
                    {
                        UpdatesData.map((item, indx) => (
                            <div className='flex text-sm md:text-md lg:text-base space-x-3 py-2 md:py-4 justify-start items-center'>
                                <p className={`h-3 w-3 ${item.isFirst === true ? "bg-red-400" : "bg-sky-400"}  rounded-full`}></p>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default LiveUpdates
