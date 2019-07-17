import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide'

import one from './assets/one.svg'
import title from './assets/inklings.svg'
import games from './assets/games.svg'
import oldschool from './assets/oldschool.svg'

import Comparison from './components/Comparison';
import PlaceHolder, { status } from '../../shared/PlaceHolder';

export default class extends Slide {

    state: {
        appear: boolean
        slide1: status,
        noChapter: boolean
        comparisonMode: boolean,
        comparisonState: number,
        slide2: status,
        slide3: status
    } = {
        appear: false,
        slide1: 'progress',
        noChapter: false,
        comparisonMode: false,
        comparisonState: 0,
        slide2: 'progress',
        slide3: 'progress'
    }

    steps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({})
            this.setState({ appear: true })
        },
        () => this.setState({ slide1: 'current', noChapter: true }),
        () => {
            this.setState({ slide1: 'passed' })
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({ filter: `blur(45px)`, transform: `translate(-55%, -70%)` })
            this.setState({ comparisonMode: true })            
        },
        () => this.setState({ comparisonState: 1 }),
        () => this.setState({ comparisonState: 2 }),
    ]
    backwardSteps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({ filter: `blur(35px)`, transform: `translate(-50%, -70%)` })
            this.setState({ appear: false })
        },
        () => this.setState({ slide1: 'progress', noChapter: false }),
        () => {
            this.setState({ slide1: 'current' })
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({})
            this.setState({ comparisonMode: false })
        },
        () => this.setState({ comparisonState: 0 }),
        () => this.setState({ comparisonState: 1 }),
    ]

    get content () {
        const { appear, comparisonMode, noChapter, comparisonState, slide1, slide2, slide3 } = this.state
        return (
            <div className={'Inklings' + (appear ? ' appear' : '') + (noChapter ? ' no-chapter' : '')}>
                <div className="point">
                    <div className="line" />
                    <img className="chapter" src={one} alt="Chapter One" />
                    <img className="Inklings__title" src={title} alt="Inklings" />
                </div>
                <PlaceHolder src={games} status={slide1} />
                <Comparison appear={comparisonMode} state={comparisonState} />
            </div>
        )
    }

}