import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, LabelList
} from 'recharts';

const StatChart = ({ chartData }) => {
    return (

        <>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData} margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis dataKey="day" />
                    <YAxis />

                    <Tooltip />
                    {/* <Legend verticalAlign='top' height={56} /> */}

                    <Bar dataKey="deaths" fill="#FF0000" name="Death" barSize={10}>
                        <LabelList dataKey="deaths" position="top" fill="#FF0000" />
                    </Bar>
                    <Bar dataKey="recovered" fill="#32CD32" name="Recover" barSize={10}>
                        <LabelList dataKey="recovered" position="top" fill="#32CD32" />
                    </Bar>


                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default StatChart
