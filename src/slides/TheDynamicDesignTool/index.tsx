import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide'

import infinity from './assets/infinity.svg'
import title from './assets/TheDynamicDesignTool.svg'

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
            <div className={'TheDynamicDesignTool' + (appear ? ' appear' : '')}>
                <div className="point">
                    <img className="chapter" src={infinity} alt="Final Chapter" />
                    <img className="TheDynamicDesignTool__title" src={title} alt="The Dynamic Design Tool" />
                </div>
            </div>
        )
    }

}