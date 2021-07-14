import React from 'react'

export const PlanetTable = ({content,data}) => {
    return (
        <div>
            <p className="content">{content}</p>
           <p className="data font-antonio">{data}</p>
        </div>
    )
}
