import React from 'react'
import './InfoBar.css'

const InfoBar = ({ todo, done }) => {
  return (
    <div className='info-bar'>
      <span className='text-muted'>
        {todo} more to do, {done} done
      </span>
    </div>
  )
}

export default InfoBar
