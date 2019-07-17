import React from 'react'
import socket from '../socket'

import './style.scss'
import background from './assets/background.svg'

interface IProps {}
interface IState {
    connectedToRemote: boolean
    currentSlide: number
}

interface IRemoteSignal {
    type: 'command' | 'controller-ready',
    command: string | any
}

class Presentation extends React.PureComponent<IProps, IState> {

    state = {
        connectedToRemote: false,
        currentSlide: 0
    }

    constructor (props: IProps) {
        super(props)
        let connectionTimeout: any = null
        socket.on('remote-control', (data: IRemoteSignal) => {
            if (data.type === 'command') this.onControlCommand(data.command)
            if (data.type === 'controller-ready') {
                if (connectionTimeout) clearTimeout(connectionTimeout)
                socket.emit('remote-control', { type: 'presentation-ready' })
                this.setState({ connectedToRemote: true })
                connectionTimeout = setTimeout(() => { this.setState({ connectedToRemote: false }) }, 4000)
            }
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
            <div className="presentation">
                {this.slides}
                {background && <img className="presentation__background" src={background} />}
            </div>
        )
    }

}

export default Presentation