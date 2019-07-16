import React from 'react'
import socket from '../socket'

import './style.scss'
import { every } from '../utils/timeout';

interface IProps {}
interface IState {
    connectedToRemote: boolean
    currentSlide: number
}

interface IRemoteSignal {
    type: 'command',
    message: string | any
}

class Presentation extends React.Component<IProps, IState> {

    state = {
        connectedToRemote: false,
        currentSlide: 0
    }

    constructor (props: IProps) {
        super(props)
        every(1000, () => {
            if (socket.connected !== this.state.connectedToRemote) {
                this.setState({ connectedToRemote: socket.connected })
            }
        })
        socket.on('remote-control', (data: IRemoteSignal) => {
            if (data.type === 'command') this.onControlCommand(data.message)
        });
    }

    onControlCommand (command: string) {
        if (command === 'next') this.next()
        if (command === 'prev') this.prev()
    }

    private get slides () {
        const { children } = this.props
        const { currentSlide } = this.state
        return React.Children.map(children, (slide, index) => {
            if (slide) return React.cloneElement(slide as any, {
                selected: index === currentSlide
            })
        })
    }

    public next () {
        this.setState({ currentSlide: this.state.currentSlide + 1 })
    }

    public prev () {
        this.setState({ currentSlide: this.state.currentSlide - 1 })        
    }

    public goto (i: number) {
        this.setState({ currentSlide: i })
    }

    render () {
        return (
            <div className="presentation">{ this.slides }</div>
        )
    }

}

export default Presentation