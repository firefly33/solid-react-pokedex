import React from 'react'

const TypeTag = ({ name }: any) => {
  return (
    <div className={`px-2.5 py-0.5 w-fit rounded-full bg-white text-white bg-opacity-25`}>{ name }</div>
  )
}

export default TypeTag