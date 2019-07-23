import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide'

import one from './assets/one.svg'
import title from './assets/inklings.svg'
import games from './assets/games.svg'
import oldschool from './assets/oldschool.svg'
import emily1pic from './assets/emily1.svg'
import emily2pic from './assets/emily2.svg'
import emily3pic from './assets/emily3.svg'

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
        emily1: status
        emily2: status
        emily3: status
    } = {
        appear: false,
        slide1: 'progress',
        noChapter: false,
        comparisonMode: false,
        comparisonState: 0,
        slide2: 'progress',
        emily1: 'progress',
        emily2: 'progress',
        emily3: 'progress'
    }

    steps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({})
            this.setState({ appear: true })
        },
        () => this.setState({ slide1: 'current', noChapter: true }),
        () => this.setState({ slide2: 'current', slide1: 'passed' }),
        () => {
            this.setState({ slide2: 'passed' })
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({ filter: `blur(45px)`, transform: `translate(-55%, -70%)` })
            this.setState({ comparisonMode: true })
        },
        () => this.setState({ comparisonState: 1 }),
        () => this.setState({ comparisonState: 2 }),
        () => this.setState({ comparisonState: 3 }),
        () => this.setState({ comparisonState: 4 }),
        () => this.setState({ comparisonMode: false, comparisonState: 0, emily1: 'current' }),
        () => this.setState({ emily1: 'passed', emily2: 'current' }),
        () => this.setState({ emily2: 'passed', emily3: 'current' }),
        
    ]
    backwardSteps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({ filter: `blur(35px)`, transform: `translate(-50%, -70%)` })
            this.setState({ appear: false })
        },
        () => this.setState({ slide1: 'progress', noChapter: false }),
        () => this.setState({ slide2: 'progress', slide1: 'current' }),
        () => {
            this.setState({ slide2: 'current' })
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({})
            this.setState({ comparisonMode: false })
        },
        () => this.setState({ comparisonState: 0 }),
        () => this.setState({ comparisonState: 1 }),
        () => this.setState({ comparisonMode: true, comparisonState: 2, emily1: 'progress' }),
        () => this.setState({ emily1: 'current', emily2: 'progress' }),
        () => this.setState({ emily2: 'current', emily3: 'progress' }),
    ]

    get content () {
        const { appear, comparisonMode, noChapter, comparisonState, slide1, slide2, emily1, emily2, emily3 } = this.state
        return (
            <div className={'Inklings' + (appear ? ' appear' : '') + (noChapter ? ' no-chapter' : '')}>
                <div className="point">
                    <div className="line" />
                    <img className="chapter" src={one} alt="Chapter One" />
                    <img className="Inklings__title" src={title} alt="Inklings" />
                </div>
                <PlaceHolder src={games} status={slide1} />
                <PlaceHolder src={oldschool} status={slide2} />
                <Comparison appear={comparisonMode} state={comparisonState} />
                <PlaceHolder src={emily1pic} status={emily1} />
                <PlaceHolder src={emily2pic} status={emily2} />
                <PlaceHolder src={emily3pic} status={emily3} />
            </div>
        )
    }

}