import React from 'react'

import './style.scss'
import Presentation from '../../shared/Presentation';

import background from './assets/background.svg'
import Intro from '../../slides/Intro';
import Inklings from '../../slides/Inklings';
import UsersAndMakers from '../../slides/UsersAndMakers';
import HereBeDragons from '../../slides/HereBeDragons';
import TheDynamicDesignTool from '../../slides/TheDynamicDesignTool';

export default class extends React.Component {
    render () {
        return (
            <Presentation background={background}>
                <Inklings />
                <Intro />
                <UsersAndMakers />
                <HereBeDragons />
                <TheDynamicDesignTool />
            </Presentation>
        )
    }
}