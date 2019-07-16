import React, { ReactNode } from 'react'

import './style.scss'

interface IProps {}
interface IState {}

class Presentation extends React.Component<IProps, IState> {

    state = {
        currentSlide: 0
    }

    componentDidMount () {
        // this.next is where it goes to next slide
        setInterval(() => { this.next() }, 1000);
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