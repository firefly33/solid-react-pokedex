import React from 'react'

interface StatLineProps {
    label: string;
    value: number;
    textColorGradient: string;
}

const StatLine = ({ label, value, textColorGradient }: StatLineProps) => {
  
  const typeLabels: any = {
    "hp": "HP",
    "attack": "ATK",
    "defense": "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    "speed": "SPD"
  }

  return (
    <>
      <div className='col-span-3'>{typeLabels[label]}</div>
      <div className='col-span-3'>{value}</div>
      <div className='col-span-6 flex items-center'>
        <div className='w-full h-3 bg-gray-100 rounded-lg'>
          <div className={`z-20 rounded-lg relative ${textColorGradient} h-full w-[${30}%]`}></div>
        </div>
      </div>
    </>
  )
}

export default StatLine