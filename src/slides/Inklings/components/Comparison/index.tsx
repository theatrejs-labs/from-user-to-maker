import React from 'react'

import './style.scss'
import Photoshop from '../Photoshop';
import Code from '../Code';

interface IProps {
    appear: boolean
    state: number
}
interface IState {

}

export default class Comparison extends React.Component<IProps, IState> {

    render () {
        return (<div className="point Comparison">
            <div className={'screen-splitter' + (this.props.appear ? ' appear' : '')} />
            <Photoshop />
            <Code />
        </div>)
    }

}