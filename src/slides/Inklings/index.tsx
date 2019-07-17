import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide'

import one from './assets/one.svg'
import title from './assets/inklings.svg'
import Comparison from './components/Comparison';

export default class extends Slide {

    state = {
        appear: true,
        comparisonMode: true
    }

    steps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({})
            this.setState({ appear: true })
        },
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({ filter: `blur(45px)`, transform: `translate(-55%, -70%)` })
            this.setState({ comparisonMode: true })            
        }
    ]
    backwardSteps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({ filter: `blur(35px)`, transform: `translate(-50%, -70%)` })
            this.setState({ appear: false })
        },
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({})
            this.setState({ comparisonMode: false })
        },
    ]

    get content () {
        const { appear, comparisonMode } = this.state
        return (
            <div className={'Inklings' + (appear ? ' appear' : '') + (comparisonMode ? ' comparison-mode' : '')}>
                <div className="point">
                    <div className="line" />
                    <img className="chapter" src={one} alt="Chapter One" />
                    <img className="Inklings__title" src={title} alt="Inklings" />
                </div>
                <Comparison appear={comparisonMode} state={0} />
            </div>
        )
    }

}