import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide'

import two from './assets/two.svg'
import title from './assets/UsersAndMakers.svg'

import step1 from './assets/step1.svg'
import step2 from './assets/step2.svg'
import step3 from './assets/step3.svg'
import step4 from './assets/step4.svg'


import PlaceHolder, { status } from '../../shared/PlaceHolder';

export default class extends Slide {

    state: {
        appear: boolean
        noChapter: boolean
        slide1: status
        slide2: status
        slide3: status
        slide4: status
    } = {
        appear: false,
        noChapter: false,
        slide1: 'progress',
        slide2: 'progress',
        slide3: 'progress',
        slide4: 'progress'
    }

    steps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({})
            this.setState({ appear: true })
        },
        () => this.setState({ noChapter: true, slide1: 'current' }),
        () => this.setState({ slide1: 'passed', slide2: 'current' }),
        () => this.setState({ slide2: 'passed', slide3: 'current' }),
        () => this.setState({ slide3: 'passed', slide4: 'current' }),
    ]
    backwardSteps = [
        () => {
            const { changeBackgroundStyle } = this.props
            if (changeBackgroundStyle) changeBackgroundStyle({ filter: `blur(35px)`, transform: `translate(-50%, -70%)` })
            this.setState({ appear: false })
        },
        () => this.setState({ noChapter: false, slide1: 'progress' }),
        () => this.setState({ slide1: 'current', slide2: 'progress' }),
        () => this.setState({ slide2: 'current', slide3: 'progress' }),
        () => this.setState({ slide3: 'current', slide4: 'progress' }),
    ]

    get content () {
        const { appear, noChapter, slide1, slide2, slide3, slide4 } = this.state
        return (
            <div className={'UsersAndMakers' + (appear ? ' appear' : '') + (noChapter ? 'no-chapter' : '')}>
                <div className="point">
                    <div className="line left" />
                    <div className="line right" />
                    <img className="chapter" src={two} alt="Chapter Two" />
                    <img className="UsersAndMakers__title" src={title} alt="Users and Makers" />
                </div>
                <PlaceHolder src={step1} status={slide1} />
                <PlaceHolder src={step2} status={slide2} />
                <PlaceHolder src={step3} status={slide3} />
                <PlaceHolder src={step4} status={slide4} />
            </div>
        )
    }

}