import React from 'react'

import './style.scss'

interface IProps {
    selected?: boolean
}
interface IState {}

class Slide extends React.Component<IProps, IState> {

    currentStep: number = 0
    steps = []

    get content () {
        return (<></>)
    }

    render () {
        const { selected } = this.props
        return (
            <div className={`slide` + (selected ? ' current' : '')}>
                { this.content }
            </div>
        )
    }

}

export default Slide