import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide'

import three from './assets/three.svg'
import title from './assets/HereBeDragons.svg'

export default class extends Slide {

    state = {
        appear: false,
    }

    steps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({})
            this.setState({ appear: true })
        }
    ]
    backwardSteps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({ filter: `blur(35px)`, transform: `translate(-50%, -70%)` })
            this.setState({ appear: false })
        }
    ]

    get content () {
        const { appear } = this.state
        return (
            <div className={'HereBeDragons' + (appear ? ' appear' : '')}>
                <div className="point">
                    <div className="line left" />
                    <div className="line right" />
                    <img className="chapter" src={three} alt="Chapter Three" />
                    <img className="HereBeDragons__title" src={title} alt="Here be Dragons" />
                </div>
            </div>
        )
    }

}