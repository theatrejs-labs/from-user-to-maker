import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide'

import infinity from './assets/infinity.svg'
import title from './assets/TheDynamicDesignTool.svg'

import polygon from './assets/polygon.svg'
import text from './assets/text.svg'

export default class extends Slide {

    state: {
        appear: boolean
        noChapter: boolean
    } = {
        noChapter: false,
        appear: false,
    }

    steps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({})
            this.setState({ appear: true })
        },
        () => this.setState({ noChapter: true })
    ]
    backwardSteps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({ filter: `blur(35px)`, transform: `translate(-50%, -70%)` })
            this.setState({ appear: false })
        },
        () => this.setState({ noChapter: false })
    ]

    get content () {
        const { appear, noChapter } = this.state
        return (
            <div className={'TheDynamicDesignTool' + (appear ? ' appear' : '') + (noChapter ? ' no-chapter' : '')}>
                <div className="point">
                    <img className="chapter" src={infinity} alt="Final Chapter" />
                    <img className="TheDynamicDesignTool__title" src={title} alt="The Dynamic Design Tool" />
                </div>
                <div className="point">
                    <img className="polygon" src={polygon} alt="Polygon" />
                    <img className="text" src={text} alt="Text" />
                </div>
            </div>
        )
    }

}