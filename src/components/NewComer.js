import React, { useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { data04 } from '../data'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

function NewComer() {
  const newData = [...data04]

  return (
    <>
      <article className='element'>
        <div className='element-heading'>
          <h3>Member</h3>
          <h4>
            This Year <TiArrowSortedDown />
          </h4>
        </div>
        <div className='chart-container'>
          <ComposedChart width={500} height={400} data={data04}>
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name' scale='band' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='amount' barSize={20} fill='#413ea0' name='member' />
          </ComposedChart>
        </div>
      </article>
    </>
  )
}

export default NewComer
