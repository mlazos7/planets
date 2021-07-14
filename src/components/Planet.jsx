import React from 'react'
import MercuryImage from './../assets/images/planet-mercury.svg'
import { PlanetTable } from './PlanetTable'
import { SourceLink } from './SourceLink'

// import colors from './../assets/css/_colors.scss';

export const Planet = () => {
    return (
        <div className="planet">
            <div className="planet__header">
                <p>Overview</p>
                <p>Structure</p>
                <p>Surface</p>
            </div>
            <div className="planet__image">
                <img src={MercuryImage} alt="" />
            </div>
            <div className="planet__content">
                <h1>Mercury</h1>
                <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth</p>
                <SourceLink url="www.google.cl"/>
            </div>
            <div className="planet__table">
                <PlanetTable content="Rotation Time" data="58.6 Days" />
                <PlanetTable content="Revolution Time" data="87.97 Days" />
                <PlanetTable content="Redius" data="2,437 Km" />
                <PlanetTable content="Average Temp." data="430°" />
            </div>
        </div>
    )
}
