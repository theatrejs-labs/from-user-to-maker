import React from 'react'

import './style.scss'

interface IProps {}
interface IState {}

class Presentation extends React.Component<IProps, IState> {

    render () {
        return (
            <div>{ this.props.children }</div>
        )
    }

}

export default Presentation