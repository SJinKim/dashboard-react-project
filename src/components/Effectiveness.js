import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts'
import { COLORS, data03 } from '../data'

function Effectiveness() {
  return (
    <article className='element'>
      <div className='element-heading'>
        <h3>Efficiency</h3>
        <h4>
          This Month <TiArrowSortedDown />
        </h4>
      </div>
      <div className='chart-container'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={data03}
            cx='50%'
            cy='50%'
            outerRadius={80}
            label
          >
            {data03.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </article>
  )
}

export default Effectiveness
