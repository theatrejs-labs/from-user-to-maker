import React, { RefObject } from 'react'
import socket from '../socket'

import './style.scss'

interface IProps {
    background: string
}
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

    slidesRefs: RefObject<any>[] = []

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
        setTimeout(() => this.next(), 1000);
    }

    onControlCommand (command: string) {
        if (command === 'next') this.next()
        if (command === 'prev') this.prev()
    }

    private get slides () {
        const { children } = this.props
        const { currentSlide } = this.state
        return React.Children.map(children, (slide, index) => {
            this.slidesRefs[index] = React.createRef()
            if (slide) return React.cloneElement(slide as any, {
                ref: this.slidesRefs[index],
                selected: index === currentSlide
            })
        })
    }

    public next () {
        console.log(this.slidesRefs[0].current)
        this.setState({ currentSlide: this.state.currentSlide + 1 })
    }

    public prev () {
        this.setState({ currentSlide: this.state.currentSlide - 1 })        
    }

    public goto (i: number) {
        this.setState({ currentSlide: i })
    }

    render () {
        const { background } = this.props
        return (
            <div className="presentation">
                {this.slides}
                {background && <img className="presentation__background" src={background} alt="Background" />}
            </div>
        )
    }

}

export default Presentation