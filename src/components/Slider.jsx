import React from 'react'

export function Slider() {
    const data = [
        {
            name: 'Loyiso Tose',
            review:'Loprem iwenbrjnrnnffkfjfd'
        },
        {
            name: 'Loyiso Tose',
            review:'Loprem iwenbrjnrnnffkfjfd'
        },
        {
            name: 'Loyiso Tose',
            review:'Loprem iwenbrjnrnnffkfjfd'
        },
        {
            name: 'Loyiso Tose',
            review:'Loprem iwenbrjnrnnffkfjfd'
        }
    ]
  return (
    <div className='w-3/4 m-auto'>
        <div className='mt-20'>
          {/* iterate through this using a map */}
          {data.map((d) => (
            <div>
                <div>
                </div>

                <div>
                </div>
            </div>
          ))}
        </div>

        
    </div>
  )
}
