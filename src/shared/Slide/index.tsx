import React from 'react'

import './style.scss'

interface IProps {
    selected?: boolean
}
interface IState {
    currentSlide: number
}

class Slide extends React.Component<IProps, IState> {

    render () {
        const { selected, children } = this.props
        return (
            <div className={`slide` + (selected ? ' current' : '')}>{ children }</div>
        )
    }

}

export default Slide