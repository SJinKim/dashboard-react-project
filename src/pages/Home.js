import React from 'react'
import Effectiveness from '../components/Effectiveness'
import Activity from '../components/Activity'
import NewComer from '../components/NewComer'
import LiveCoachings from '../components/LiveCoachings'

function Home() {
  return (
    <main>
      <h1 className='main-heading'>Dashboard</h1>
      <section className='element-container'>
        <Effectiveness />
        <Activity />
        <NewComer />
        <LiveCoachings />
      </section>
    </main>
  )
}

export default Home
