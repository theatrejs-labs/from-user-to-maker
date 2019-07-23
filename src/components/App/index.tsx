import React, { RefObject, lazy } from 'react'

import './style.scss'
import Presentation from '../../shared/Presentation';

import background from './assets/background.svg'
import Intro from '../../slides/Intro';

const Inklings = lazy(() => import('../../slides/Inklings'))
const UsersAndMakers = lazy(() => import('../../slides/UsersAndMakers'))
const HereBeDragons = lazy(() => import('../../slides/HereBeDragons'))
const TheDynamicDesignTool = lazy(() => import('../../slides/TheDynamicDesignTool'))

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