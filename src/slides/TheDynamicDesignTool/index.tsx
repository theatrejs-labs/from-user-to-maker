import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide'

import infinity from './assets/infinity.svg'
import title from './assets/TheDynamicDesignTool.svg'

import polygon from './assets/polygon.svg'
import text from './assets/text.svg'

import option1 from './assets/option1.svg'
import option2 from './assets/option2.svg'
import option3 from './assets/option3.svg'
import option4 from './assets/option4.svg'
import option5 from './assets/option5.svg'


const svgOptions = [
    option1,
    option2,
    option3,
    option4,
    option5
]

export default class extends Slide {

    state: {
        appear: boolean
        noChapter: boolean
        polygonAside: boolean
        currentOption: number
    } = {
        noChapter: false,
        appear: false,
        polygonAside: false,
        currentOption: 0
    }

    steps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({})
            this.setState({ appear: true })
        },
        () => this.setState({ noChapter: true }),
        () => this.setState({ polygonAside: true, currentOption: 0 }),
        () => this.setState({ currentOption: 1 }),
        () => this.setState({ currentOption: 2 }),
        () => this.setState({ currentOption: 3 }),
        () => this.setState({ currentOption: 4 }),
    ]
    backwardSteps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({ filter: `blur(35px)`, transform: `translate(-50%, -70%)` })
            this.setState({ appear: false })
        },
        () => this.setState({ noChapter: false }),
        () => this.setState({ polygonAside: false }),
        () => this.setState({ currentOption: 0 }),
        () => this.setState({ currentOption: 1 }),
        () => this.setState({ currentOption: 2 }),
        () => this.setState({ currentOption: 3 }),
    ]

    get options () {
        const { currentOption, polygonAside } = this.state
        const options = [];
        for (let i = 0; i < svgOptions.length; i++) {
            const visibleClass = ((currentOption === i) && polygonAside) ? ' visible' : ''
            options.push(
                <img className={`option option-${i}` + visibleClass} key={`option${i}`} src={svgOptions[i]} alt={`Option #${i}`} />
            )
        }
        return options;
    }

    get content () {
        const { appear, noChapter, polygonAside, currentOption } = this.state
        return (
            <div className={'TheDynamicDesignTool' + (appear ? ' appear' : '') + (noChapter ? ' no-chapter' : '')}>
                <div className="point">
                    <img className="chapter" src={infinity} alt="Final Chapter" />
                    <img className="TheDynamicDesignTool__title" src={title} alt="The Dynamic Design Tool" />
                </div>
                <div className="point">
                    <img className={"polygon" + (polygonAside ? ' aside' : '') + (` select${currentOption}`)} src={polygon} alt="Polygon" />
                    <img className={"text" + (polygonAside ? ' aside' : '')} src={text} alt="Text" />
                </div>
                { this.options }
            </div>
        )
    }

}