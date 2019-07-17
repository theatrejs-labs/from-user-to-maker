import React from 'react'

import './style.scss'

interface IProps {
    selected?: boolean
}
interface IState {
    currentStep: number
}

class Slide extends React.Component<IProps, IState> {

    state = {
        currentStep: 0
    }

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