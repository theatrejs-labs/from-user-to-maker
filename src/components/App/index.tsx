import React, { RefObject } from 'react'

import './style.scss'
import Presentation from '../../shared/Presentation';

import background from './assets/background.svg'
import Intro from '../../slides/Intro';
import Inklings from '../../slides/Inklings';
import UsersAndMakers from '../../slides/UsersAndMakers';
import HereBeDragons from '../../slides/HereBeDragons';
import TheDynamicDesignTool from '../../slides/TheDynamicDesignTool';

export default class extends React.Component {

    presentation: RefObject<Presentation> = React.createRef();

    // componentDidMount () {
    //     const presentation = this.presentation.current
    //     if (presentation) {
    //         presentation.next()
    //         presentation.next()
    //         presentation.next()
    //         presentation.next()
    //         presentation.next()
    //     }
    // }

    render () {
        return (
            <Presentation ref={this.presentation} background={background}>
                <Intro />
                <Inklings />
                <UsersAndMakers />
                <HereBeDragons />
                <TheDynamicDesignTool />
            </Presentation>
        )
    }
}