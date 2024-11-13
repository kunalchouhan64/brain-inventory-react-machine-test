import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const RecoveredCard = ({ chartData, item }) => {
    return (
        <>
            <div className='flex flex-col items-start justify-start bg-white shadow-lg shadow-gray-200 rounded-3xl p-6 w-full'>
                <ResponsiveContainer width="100%" height={80}>
                    <LineChart data={chartData}>
                        <defs>
                            <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#1E90FF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Line
                            type="monotone"
                            dataKey="cases"
                            stroke="#1E90FF"
                            strokeWidth={2}
                            fill="url(#colorCases)"
                            dot={{ stroke: '#1E90FF', strokeWidth: 2, r: 3 }}
                            activeDot={{ r: 5 }}
                        />
                        <XAxis hide />
                        <YAxis hide />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <div className='text-[#91B74E] font-bold font-Montserrat text-2xl flex justify-between items-center w-full'>
                    <p className='md:text-lg xl:text-xl 2xl:text-2xl'> {item?.data['unofficial-summary'][0]?.recovered.toLocaleString()}</p>

                    <p className='text-sm tex-[#91B74E]'>15% <span className='text-lg font-bold'>↑</span></p>
                </div>
                <p className='md:text-lg xl:text-xl 2xl:text-2xl font-semibold font-Montserrat text-black text-start w-full'>Recovered</p>

            </div>

        </>
    )
}

export default RecoveredCard
