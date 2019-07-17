import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide'

import title from './assets/Title-Part1.svg'
import title2 from './assets/Title-Part2.svg'

export default class extends Slide {

    state = {
        appear: false
    }

    steps = [
        () => this.setState({ appear: true })
    ]
    backwardSteps = [
        () => this.setState({ appear: false })
    ]

    get content () {
        const { appear } = this.state
        return (
            <div className={'Intro' + (appear ? ' appear' : '')}>
                <div className="line left" />
                <div className="line right" />
                <img className="Intro__title Intro__title__part1" src={title} alt="Design for a" />
                <img className="Intro__title Intro__title__part2" src={title2} alt="Dynamic Medium" />
            </div>
        )
    }

}