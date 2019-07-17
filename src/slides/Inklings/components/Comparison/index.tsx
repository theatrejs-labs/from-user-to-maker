import React from 'react'

import './style.scss'

interface IProps {
    appear: boolean
    state: number
}
interface IState {

}

export default class Comparison extends React.Component<IProps, IState> {

    render () {
        return (<div className="point">
            <div className={'screen-splitter' + (this.props.appear ? ' appear' : '')} />
        </div>)
    }

}