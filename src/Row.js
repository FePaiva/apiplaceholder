import React from 'react'
import Cell from './Cell'

const Row = ({ item }) => {
  return (
        <tr>
          {/* map trhough each key of the different objects we are receiving. */}
            {Object.entries(item).map(([key, value]) => {
                return (
                    <Cell 
                        key={key} 
                        // using stringify bc some of the values are nested objects from the users resource, so we still need to strigify to be able to print the info.
                        cellData={JSON.stringify(value)}
                    />
                )
            })}
        </tr>
  )
}

export default Row