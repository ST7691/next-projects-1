import React from 'react'

const Title = ({children}) => {
  return (
      <div>
          <h2 className='lg:text-4xl text-2xl font-bold'>{ children}</h2>
    </div>
  )
}

export default Title