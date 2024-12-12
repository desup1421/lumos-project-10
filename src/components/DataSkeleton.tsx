import React from 'react'

const DataSkeleton: React.FC = () => {
  return (
    <div className='animate-pulse'>
        <div className='bg-gray-300 h-36 w-full rounded-lg mb-4'></div>
    </div>
  )
}

export default DataSkeleton