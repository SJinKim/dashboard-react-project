import React from 'react'
import { useGlobalContext } from '../context'
import { FaTimes } from 'react-icons/fa'
import { data02 } from '../data'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const Details = () => {
  const { isDetailOpen, closeDetails } = useGlobalContext()

  return (
    <div
      className={`${
        isDetailOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>Any Ratings or Live Coachings registered</h3>
        <button className='close-modal-btn' onClick={closeDetails}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  )
}

export default Details
