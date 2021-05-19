import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { data02 } from '../data'
import { useGlobalContext } from '../context'

function Activity() {
  const [people, setPeople] = React.useState(data02)
  const { openDetails } = useGlobalContext()

  const handleClick = () => {
    console.log('show new dates')
  }

  return (
    <article className='element'>
      <div className='element-heading'>
        <h3>Activity</h3>
        <h4>
          This Week
          <TiArrowSortedDown className='arrows' onClick={handleClick} />
        </h4>
      </div>
      {people.map((person) => {
        const { id, name, age } = person
        return (
          <div className='person' key={id}>
            <section>
              <div>
                <h4>{name}</h4>
                <p> age: {age}</p>
              </div>
              <button className='btn detail-btn' onClick={openDetails}>
                details
              </button>
            </section>
          </div>
        )
      })}
    </article>
  )
}

export default Activity
