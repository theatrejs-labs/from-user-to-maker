import React from 'react'

import './style.scss'

export type status = 'progress' | 'current' | 'passed'

interface IProps {
    status: status
    src: string
    alt?: string
}
interface IState {

}

export default class extends React.PureComponent<IProps, IState> {

    render () {
        const { status, src, alt } = this.props
        return (
            <div className={`place-holder ${status || 'progress'}`}>
                <img src={src} alt={alt || "From User to Maker"} />
            </div>
        )
    }

}