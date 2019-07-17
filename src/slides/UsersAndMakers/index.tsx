import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide'

import two from './assets/two.svg'
import title from './assets/UsersAndMakers.svg'

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
            <div className={'UsersAndMakers' + (appear ? ' appear' : '')}>
                <div className="point">
                    <div className="line left" />
                    <div className="line right" />
                    <img className="chapter" src={two} alt="Chapter Two" />
                    <img className="UsersAndMakers__title" src={title} alt="Users and Makers" />
                </div>
            </div>
        )
    }

}