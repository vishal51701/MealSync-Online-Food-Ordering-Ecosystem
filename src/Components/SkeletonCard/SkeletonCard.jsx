import React from 'react'
import './SkeletonCard.css'

const SkeletonCard = () => {
  return (
    <div className='skeleton-card'>
      <div className='skeleton-img'></div>
      <div className='skeleton-body'>
        <div className='skeleton-line wide'></div>
        <div className='skeleton-line medium'></div>
        <div className='skeleton-line short'></div>
      </div>
    </div>
  )
}

export default SkeletonCard