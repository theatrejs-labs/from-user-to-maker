import React from 'react'

import './style.scss'
import Photoshop from '../Photoshop';
import Code from '../Code';

export enum states {
    INIT,
    PH_VISIBLE,
    CODE_VISIBLE,
    DRAW_CIRCLE,
    SHADER_CIRCLE
}

interface IProps {
    appear: boolean
    state: states
}
interface IState {}

export default class Comparison extends React.Component<IProps, IState> {
    
    photoshop: React.RefObject<Photoshop> = React.createRef()

    isAfter (stateToCheck: states) {
        const { state } = this.props
        return state >= stateToCheck
    }

    checkPSStates () {
        const { state } = this.props
        const photoshop = this.photoshop.current
        if (!photoshop) return
        if (state === states.DRAW_CIRCLE) photoshop.stepOne()
        if (state === states.SHADER_CIRCLE) photoshop.stepTwo()
    }

    render () {
        const photoshopVisibility = this.isAfter(states.PH_VISIBLE)
        const CodeVisibility = this.isAfter(states.CODE_VISIBLE)

        this.checkPSStates()

        return (<div className="point Comparison">
            <div className={'screen-splitter' + (this.props.appear ? ' appear' : '')} />
            <Photoshop ref={this.photoshop} appear={photoshopVisibility} />
            <Code appear={CodeVisibility} />
        </div>)
    }

}