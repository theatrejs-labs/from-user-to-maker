import React from 'react'

import './style.scss'
import Photoshop from '../Photoshop';
import Code from '../Code';

export enum states {
    INIT,
    PH_VISIBLE,
    CODE_VISIBLE
}

interface IProps {
    appear: boolean
    state: states
}
interface IState {}

export default class Comparison extends React.Component<IProps, IState> {
    
    isAfter (stateToCheck: states) {
        const { state } = this.props
        return state >= stateToCheck
    }

    render () {
        const photoshopVisibility = this.isAfter(states.PH_VISIBLE)
        const CodeVisibility = this.isAfter(states.CODE_VISIBLE)

        return (<div className="point Comparison">
            <div className={'screen-splitter' + (this.props.appear ? ' appear' : '')} />
            <Photoshop appear={photoshopVisibility} />
            <Code appear={CodeVisibility} />
        </div>)
    }

}